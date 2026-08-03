---
title: Samsung SSDs with ZFS
subtitle: A quick tell-tale about Samsung's broken firmware
date: "2021-11-12T12:04:50+0100"
tags:
  - homelab
---

This post is mainly a summary of [this post by Thomas][cavelabarticle],
because I know that I'll loose that link at some point but I'll likely need the solution mentioned in the post again at some point.

I have two 500 GB Samsung 870 Evo SSDs in my home server, being used in a ZFS mirror for "fast" storage.
Now, the pool was working fine for a while, but at one point, I ran `zpool status` and it gave me the following output:

```
pool: ssd
state: DEGRADED
status: One or more devices has experienced an unrecoverable error. An attempt was made to correct the error. Applications are unaffected.
config:
  NAME       STATE    READ WRITE CKSUM
  ssd        DEGRADED    0     0     0
    mirror-0 DEGRADED    0     0     0
      sdd    DEGRADED   11     0   121 too many errors
      sde    ONLINE      0     0     0
```

Now, the SSDs are fairly new, I purchased them in May of this year, which had me a bit confused. Was `sdd` already broken? I didn't write too much data to them.
`smartctl` says about 4 TiB, which is clearly within Samsung's warranty of 300 TBW.

After a bit of searching, I stumbled upon an article on [cavelab.dev][cavelabarticle], where Thomas explains various problems he had when using Samsung SSDs in a ZFS pool.
One part was particularly interesting to me: He mentions a firmware bug, which leads to the SSDs reporting that they support asynchronous TRIM commands, which they actually don't.
That leads to all sorts of funky errors when you start writing to the SSDs a bit, for example reads and writes just timing out because the SSD is unresponsive for a short while.

The real solution to the problem would be Samsung fixing their firmware, but in the meantime, one can add the following kernel parameters to GRUB/their bootloader of choice:

```
libata.force=4.00:noncq,5.00:noncq
```

The `4.00` and `5.00` in the parameters are the ATA port IDs of the drives. These can be found out using `lsblk -o NAME,HCTL`, which will output something like the following:

```
...
sdd                            4:0:0:0
sde                            5:0:0:0
...
```

After regenerating my GRUB config (`sudo update-grub`) and rebooting, I cleared the errors ZFS reported (`zpool clear ssd`) and monitored carefully, whether the issue would return.
Luckily it didn't.

I hope this is of help for someone, and I urge you to read the excellent [article on cavelab.dev][cavelabarticle] to get a bigger picture and to help you to find out whether you're having the same issue.

[cavelabarticle]: https://blog.cavelab.dev/2021/02/zfs-ssd-pool-problems/
