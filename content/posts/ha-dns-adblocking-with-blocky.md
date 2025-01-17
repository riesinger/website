---
title: "My Highly Available DNS setup with Blocky"
subtitle: "You used Pi-hole before, but your network is gone when you reboot your server? You think Pi-hole's configuration doesn't fit into a containerized landscape? Enter blocky!"
date: "2022-05-01T15:30:04"
tags:
  - docker
  - homelab
  - networking
  - self-hosting
---

We live in a world where everything is connected to the internet. And I like that wold. For the most part.
There are some thing that have been going in the wrong direction in the last few years, namely online advertisement and tracking.
Luckily, there are ways to improve that situation, if you get a little crafty and craft a blocking DNS server.

## Pi-hole: the good, the bad, the ugly

You might have heard of the Pi-hole project already. According to [their website](https://pi-hole.net), it is used for “**Network-wide Ad Blocking**”**.** It was the first major project which made it easy to run a custom DNS server (NOT resolver; I might get into that topic in another post) and add block lists to it. It is a great project: There is _lots_ of documentation, it's super simple to setup (it's literally just one script), it works perfectly fine most of the time and has an active community.

What could you want more?

Well, since Pi-hole is a conglomerate of off-the-shelf technologies being linked together, it isn't the best fit for running it in Docker containers.

This leads me to having the following issues with it, in ascending order of importance:

- It's a large container image
- It does too much in one container
- It's not entirely configurable “from the outside”
- A high availability (HA) setup is too complicated to achieve with it.

Let me elaborate. Pi-hole's docker image is based on Debian. This automatically makes it quite large. At the time of writing, the AMD64 image is a 107.36 MB download (so that's the compressed size). Now, this isn't a huge issue, but I do prefer images which are as small as possible. Aside from the negligible download time and disk usage, one real benefit of smaller images is less attach surface. When things are installed in the container, there are less apps that can be broken and exploited.

Next, the Pi-hole image does too many things at once. It's a DNS server, hosts a web interface, can run a DHCP server and has an embedded database (now, I don't consider embedding SQLite an issue, since a **lot** of software does that).

The largest issue I have with running Pi-hole is that some of its configuration _requires_ using the web interface (or the CLI). To add block lists and manage client groups, you need to sign in and lick though the UI. I like to automate as much of my servers' setup as I can with Ansible. While it's certainly _possible_ to configure Pi-hole from the ground up using Ansible, running lots of `docker exec` commands would be no fun at all.

That's also my reason for issue #4. To make two Pi-hole servers have the same configuration, you need to employ some syncing scripts like https://github.com/vmstan/gravity-sync. While they work, I don't necessarily want to have to run periodic syncs just to make sure that my two instances of Pi-hole have the same configuration.

## Enter blocky

Now, while searching the internet for alternatives to Pi-hole, I came across [Blocky](https://github.com/0xERR0R/blocky), which is a DNS server written in Go with containerization in mind. Let me check off the previous pain points I have with Pi-hole:

The AMD64 image is less than 19MB (compressed). The runner image is based on Alpine Linux. That's still more things installed than I'd like, since Go apps can also be completely statically compiled, but at least it's a ~5,5x reduction in image size.

Blocky only does one thing: It resolves (and optionally logs) DNS queries. Running the docker image only starts up the Go app, which is responsible for listening to DNS & HTTP queries (for DoH and the API). There's no database, there's no web UI and no DHCP.

The (to me) most important part: Blocky's configuration is a simple flat file. This makes the main application stateless and therefore easy to tear down and bring back up, without needing to persist a docker volume. Issue #4 is also solved by this, since I can just spin up two instances for HA with the same exact configuration file and use KeepaliveD to assign a floating IP.

You can optionally add a database to Blocky for query logging, which is useful if you need to debug your blocklists or just for getting some more statistics than you can get from the built-in Prometheus metrics endpoint — let's face it; who doesn't love statistics?! But since that query log isn't any configuration data, I don't care when I loose the whole database, so I also don't need to back that up somewhere, making my life even easier.

## Deploying Blocky

Let's deploy a simple non-HA instance of Blocky with `docker-compose` first.

Start by creating the following `docker-compose.yaml` file on your server:

```yaml
version: "3.2"
services:
  blocky:
    image: "spx01/blocky"
    networks:
      - blocky
    volumes:
      - /your/directory/for/blocky/config.yml:/app/config.yml
    restart: unless-stopped
    ports:
      - "53:53/tcp"
      - "53:53/udp"
    image: postgres:14-alpine
    restart: unless-stopped
    networks:
      - blocky
    volumes:
      - database:/var/lib/postgresql/data
    env_file:
      - /your/directory/for/blocky/.env
volumes:
  database: {}
networks:
  blocky: {}
```

This `docker-compose.yaml` file will spin up an instance of Blocky and an instance of PostgreSQL, which is used for query logging. But before you use `docker-compose up -d`, you need to create two more config files: The main Blocky config and a `.env` file containing the database credentials. Let's start with the simpler of the the two, the `.env` file:

```bash
POSTGRES_PASSWORD=think-of-something-clever
POSTGRES_USER=probably-blocky-to-make-it-easy
POSTGRES_DB=blocky
```

The variables should be fairly self-explanatory at this point. Now let's look at my blocky config:

```yaml
upstream:
  default:
    - tcp-tls:1.1.1.1:853 # Use DoT to connect to Cloudflare
    - 2606:4700:4700::1111 # And also do that via IPv6
blocking:
  blackLists:
    ads: # These hosts fall in the ads category
      - https://adaway.org/hosts.txt
      - https://v.firebog.net/hosts/AdguardDNS.txt
			- # SNIP - Find some more at https://firebog.net
    suspicious: # I use this category for sus stuff which doesn't fall in any other category
      - https://v.firebog.net/hosts/static/w3kbl.txt
      - # SNIP - Again, head to https://firebog.net
    tracking: # These hosts are used for tracking, which I want to avoid as hard as I can
      - https://gitlab.com/quidsup/notrack-blocklists/raw/master/notrack-blocklist.txt
      - https://v.firebog.net/hosts/Easyprivacy.txt
      - https://v.firebog.net/hosts/Prigent-Ads.txt
      - # SNIP - You get the drill
    malicious: # These are phising, malware & crypto mining sites
      - http://phishing.mailscanner.info/phishing.bad.sites.conf
      - https://v.firebog.net/hosts/Prigent-Crypto.txt
      - # SNIP
  clientGroupsBlock: # Define groups in which clients will be put. If no other group matches, the "default" group will be used
    default:
      - ads
      - suspicious
      - tracking
      - malicious
  whiteLists: # Allow some special hosts which are on some block lists. Unfortunately, you have to allow them per group
    ads:
      - |
        cdn.optimizely.com
        api2.branch.io
        s.shopify.com
        cdn.shopify.com
    tracking:
      - |
        cdn.optimizely.com
        api2.branch.io
        s.shopify.com
        cdn.shopify.com
port: 53 # This is the port to use for DNS traffic
httpPort: 4000 # This is the port Blocky will listen on for the HTTP API, the Prometheus metrics endpoint and DoH, should you use it
prometheus:
  enable: yes
queryLog: # If you don't need a querylog, feel free to skip this
  type: postgresql
  target: "user=the-one-from-earlier password=same host=postgres dbname=blocky sslmode=disable TimeZone=Europe/Berlin"
  logRetentionDays: 90
caching:
  minTime: 60s # How long to cache responses at a minimum. If the entry's TTL is shorter, it will get overridden by this value
  maxItemsCount: 10000 # How many DNS entries to keep in the cache at most. Unless your network is super busy, you probably won't ever have 10000 entries
  prefetching: yes # If an entry is "hot", proactively keep it in the cache by re-fetching it in the background
  prefetchMaxItemsCount: 2000 # How many entries to keep hot
clientLookup:
  upstream: 10.0.0.1 # Use rDNS to ask the router for client hostnames. This must be the IP address of your DHCP server (usually your router)
  singleNameOrder: # Make sure to only request the first client name instead of a list
    - 1
```

I annotated most values in the config file, so most things should be relatively clear. However, the documentation at [https://0xerr0r.github.io/blocky/configuration/](https://0xerr0r.github.io/blocky/configuration/) is quite well-written most of the time, so please carefully read it before setting up your own DNS server.

Once you have all three files, you should be able to use `docker-compose up -d` to spin up your blocky instance. In case you get port conflict errors on port 53, it's likely that SystemD is running its resolver on that one. Follow [this guide](https://github.com/pi-hole/docker-pi-hole/#installing-on-ubuntu) for how to disable `systemd-resolved`.

Now, from your local machine, test whether you can resolve any domain names with your new Blocky resolver using `dig`:

```bash
dig @ip.of.your.server riesinger.dev
```

If you receive A records, you're good to go!

Now, you have two options on how to use your new DNS server:

1. Either, you configure it on every device you own
2. Or you enter it in your router/DHCP server's configuration, so clients automatically pick it up

For testing, option 1 is the easier one, but since you often cannot even set the DNS server on IoT devices and configuring all devices manually gets quite tedious, I'd suggest using option 2 once your Blocky instance is up and running.

Since every router is different, you'll need to figure out how to set a DNS server on your own, but for FRITZ!Box routers, you can find it in `Home Network -> Network -> Network Settings -> IPv4-Settings -> Local DNS Server`.

After you've set up the new DNS server in your router, you'll need to re-connect all devices so they fetch the new information via DHCP. The easiest way to do that is to just reboot your router.

## Now, let's make it HA

You now have your own blocking, caching DNS server; that's great 🎉 However, what happens when you reboot the server? Depending on what you use your server for, that might happen more or less often and since DNS is such a critical part of the networking stack, it's nice to have a backup plan.

So let's make your DNS server highly available with KeepaliveD. You'll obviously need a second server, but any device shall do, such as a Raspberry Pi. Blocky doesn't require a lot of resources and if your backup DNS server is a bit slower than your main one, that's also fine. At least you'll still _have_ DNS resolution when your main server is down!

First, use the same `docker-compose.yaml` file on your second host again and make sure that blocky is running fine using `dig` with the IP of your second server.

Once that is complete, install the `keepalived` package on both machines. For Ubuntu and Debian, you can just do `apt install keepalived`. Next, create a file at `/etc/keepalived/keepalived.conf` on your **main** server and enter the following content:

```bash
global_defs {
  router_id blocky-dns-01
  script_user root
  enable_script_security
}

vrrp_script check_blocky {
  script "/usr/local/bin/check_blocky.sh"
  interval 1
  timeout 2
  weight -50
}

vrrp_instance BLOCKY {
  state MASTER
  interface <your primary network interface, like eth0>
  virtual_router_id 55
  priority 100
  advert_int 1
  unicast_src_ip <the IP address of your main server>

  unicast_peer {
    <the IP address of your backup server>
  }

  authentication {
    auth_type PASS
    auth_pass <an 8-character password>
  }

  virtual_ipaddress {
    <the virtual IP you want to use> dev <your primary network interface>
  }

  track_script {
    check_blocky
  }
}
```

There are some “template” spots in the config file above, which you'll need to edit. The most important part is the `virtual_ipaddress` section. Here, you'll define a “virtual” or floating IP address, which will be held by whichever one of your two servers is currently online. This is how we'll make your DNS resolution HA; as long as your main server is online, it will hold your chosen DNS IP address, let's say `10.0.0.53`. Once it goes offline and your backup server detects that, it will itself now present the IP address `10.0.0.53`. Your other devices won't even notice that the DNS server changed — well, except for the short period between your main server shutting down and the backup server noticing it, which should take less than two seconds, in which DNS queries will fail.

You'll see that the `keepalived.conf` file references another script, `/usr/local/bin/check_blocky.sh`. This is the script it will use to determine whether blocky is running or not. Let's create the file and paste the following content:

```bash
#!/bin/sh

dig @127.0.0.1 -p 53 healthcheck.blocky +tcp +short || exit 1
```

It's a really simple script, which again uses `dig` to query Blocky, which luckily has a special health check DNS entry hard-coded, which will resolve as long as Blocky is running fine.

As long as this script exits successfully, KeepaliveD will state that the current server is healthy.

Now, for the backup server, you'll also need to install KeepaliveD, create the `check_blocky.sh` script (with the same content) and the `keepalived.conf` file. However, this time the config looks slightly different:

```bash
global_defs {
  router_id blocky-dns-01
  script_user root
  enable_script_security
}

vrrp_script check_blocky {
  script "/usr/local/bin/check_blocky.sh"
  interval 1
  timeout 2
  weight -50
}

vrrp_instance BLOCKY {
  state BACKUP
  interface <your primary network interface>
  virtual_router_id 55
  priority 75
  advert_int 1
  unicast_src_ip <the IP address of your backup server>

  unicast_peer {
    <the IP address of your main server>
  }

  authentication {
    auth_type PASS
    auth_pass <the same 8 character password>
  }

  virtual_ipaddress {
    <the same virtual IP> dev <your primary network interface on this server>
  }

  track_script {
    check_blocky
  }

}
```

There are two changes (apart from the IP addresses); namely the `state BACKUP`, which makes this server start up in backup mode by default (it won't hold the floating IP) and `priority 75`. This lower priority ensures that this server will be the backup as long as the main server is running fine. As soon as the main server's health check script fails though, it's starting priority of `100` will be reduced by the `weight` specified, so `50` in this case, making it `50`, which is lower than the backup server's `priority` value.

After creating all of the config files on both servers, start KeepaliveD on both (`systemctl start keepalived && systemctl enable keepalived`) and use `dig` to verify that the virtual IP you chose can be used to query for DNS entries.

If that works, change the DNS server IP in your router and you're good to go!

You can verify that the HA setup is working by using `docker-compose down` on the main server to stop blocky and then querying DNS again to see that it still works.
