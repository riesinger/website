---
title: Exploring Notion's API
subtitle: Notes taken while dabbling with Notion's API
date: "2023-08-04T17:52:00+02:00"
tags:
  - dev
  - api
featured: false
colorFeatured: "blueViolet"
---

You can consider this post as sort of a public notebook. I started this since
I've recently started dabbling with [Notion](https://notion.so)'s API and
stumbled across some things I wanted to take note of, should I ever run into
them again.

## `Content-Type` is important

If you interact with Notion's API, **never** forget to set the `Content-Type`
header to `application/json`. Otherwise you'll get errors that you'll spend
hours debugging. I, for example called the
`https://api.notion.com/v1/oauth/token` endpoint to exchange an auth code for a
more permanent OAuth token.

And while I sent the following body:

```js
{
  grant_type: 'authorization_code',
  code: 'temporary auth code you get as request parameter',
  redirect_uri: 'where your OAuth callback lives'
}
```

I always received a `400` error with a message stating I need to send a
`grant_type`. Turns out that Notion doesn't really parse your request body when
you don't send along `Content-Type: application/json`, and the error message is
less than ideal.

A better response would've been a `415 Unsupported Media Type` error with a message stating that Notion only accepts JSON data.
