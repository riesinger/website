# riesinger.dev Hugo theme

A simple dark & light blog theme for your Hugo blog.

This theme is heavily based on [hello friend
ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng), but is clened up and made
lighter-weight.

## Features

- Theming: **dark/light mode**, depending on the browser settings
- Great reading experience thanks to [**Inter UI font**](https://rsms.me/inter/), made by [Rasmus Andersson](https://rsms.me/about/)
- An easy way to modify the theme with Hugo tooling
- Fully responsive
- Support for social icons


## How to configure

The theme doesn't require any advanced configuration. Just copy the following config file.

``` toml
baseurl = "/"
languageCode = "en-us"
theme = "riesinger"

[params]
  dateform        = "Jan 2, 2006"
  dateformShort   = "Jan 2"
  dateformNum     = "2006-01-02"
  dateformNumTime = "2006-01-02 15:04 -0700"

  # Set disableReadOtherPosts to true in order to hide the links to other posts.
  disableReadOtherPosts = false

  # Metadata mostly used in document's head
  description = "My new homepage or blog"
  keywords = "homepage, blog"
  images = [""]

  # Directory name of your blog content (default is `content/posts`)
  contentTypeName = "posts"

  # Default theme "light" or "dark"
  defaultTheme = "dark"

[languages]
  [languages.en]
    title = "Your Blog"
    subtitle = "A simple theme for Hugo"
    keywords = ""
    copyright = ""
    readOtherPosts = "Read other posts"

    [languages.en.params.logo]
      logoText = "Riesinger"
      logoHomeLink = "/"
    # or
    #
    # path = "/img/your-example-logo.svg"
    # alt = "Your example logo alt text"

  # And you can even create generic menu
  [[menu.main]]
    identifier = "blog"
    name       = "Blog"
    url        = "/posts"
```

## Available Social Icons:

- [codechef](https://simpleicons.org/?q=codechef)
- [codepen](https://simpleicons.org/?q=codepen)
- [docker](https://simpleicons.org/?q=docker)
- [email](https://feathericons.com/?query=mail)
- [facebook](https://simpleicons.org/?q=facebook)
- gitbook
- [github](https://feathericons.com/?query=github)
- [gitlab](https://feathericons.com/?query=gitlab)
- [instagram](https://feathericons.com/?query=instagram)
- [kaggle](https://simpleicons.org/?q=kaggle)
- [keybase](https://simpleicons.org/?q=keybase)
- [mastodon](https://simpleicons.org/?q=mastodon)
- [linkedin](https://feathericons.com/?query=linked)
- [podcasts-apple](https://simpleicons.org/?q=podcast)
- [podcasts-google](https://simpleicons.org/?q=podcast)
- [slack](https://simpleicons.org/?q=slack)
- stackoverflow
- telegram
- twitch
- twitter
- youtube

If you need another one, just open an issue or create a pull request with your wished icon. :)

