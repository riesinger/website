---
title: "Pure CSS Tooltips"
date: 2017-05-11T11:17:08+01:00
draft: false
toc: false
images:
tags: 
  - CSS
  - Web
---

![Example of the finished projects](/pure-css-tooltips/done.png)

There are many JQuery, Angular, React and VueJS plugins for doing tooltips, but sometimes, the
simplest solution is the best. That’s why I am showing you how to implement great looking tooltips
purely in CSS. Let’s get started by downloading my [boilerplate from
Github](https://github.com/riesinger/pure-css-tooltips-tutorial). Jump into the folder and
open the `index.html` file. You should see the following:
{{< highlight html >}}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name="author" content="Pascal Riesinger">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="tooltips.css">
    <title>Pure CSS Tooltips demo</title>
  </head>
  <body>
    <button tooltip tooltip-left tooltip-content="This button will take you to google.com">Google it!</button>
  </body>
</html>
{{< /highlight >}}

The `style.css` file styles the body and the buttons and it should look like this:

{{< highlight css >}}
html, body {
  margin: 0;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #eee;
}
button {
  margin: 8px;
  padding: 16px 24px;
  background-color: #2196F3;
  color: #fff;
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
{{< /highlight >}}

The `tooltips.css` file should be empty, as we’ll implement the tooltips together :wink:

You might have noticed the `tooltip`, `tooltip-left` and `tooltip-content` props on the `button`
element. We’ll use these to add a tooltip to the element, change its position and its content. Let’s
dive into how to implement the desired behaviour.

{{< highlight css >}}
[tooltip] {
  position: relative;
}
[tooltip]::before {
  content: attr(tooltip-content);
  display: block;
  position: absolute;
  top: 50%;
  right: calc(100% + 16px);
  width: 200%;
  padding: 8px 16px;
  text-align: center;
  text-transform: none;
  font-size: 14px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transform: translate(20px, -50%);
  transition: all .2s ease-in-out .5s;
  z-index: 1;
}
[tooltip]:hover::before {
  opacity: 1;
  transform: translate(0, -50%);
}
{{< /highlight >}}

In CSS, you can select elements based on their props by putting the prop into square brackets, so
`[tooltip]` selects every element that has the `tooltip` prop (our `button`). We add a `::before`
pseudo-element to the parent to display the tooltip content. By setting content to
`attr(tooltip-content)`, we tell the `::before` element to show its parent’s `tooltip-content`. We
want to show tooltips to the left of the parent by default, so we position it `absolute`. The result
of the above code should look like this:

![Demo of a tooltip](/pure-css-tooltips/demo.gif)

This looks pretty good already, doesn’t it? Now let’s add the ability to show tooltips in different
directions. First, let’s add some more buttons which feature the `tooltip-bottom`, `tooltip-right`
and `tooltip-top` properties.

{{< highlight html >}}
<button tooltip tooltip-left tooltip-content="This button will take you to google.com">Google it!</button>
<button tooltip tooltip-bottom tooltip-content="This tooltip is at the bottom">Bottom</button>
<button tooltip tooltip-right tooltip-content="This tooltip is at the right">Right</button>
<button tooltip tooltip-top tooltip-content="This tooltip is at the top">Top !</button>
{{< /highlight >}}

Now, jump into the `tooltips.css` file and style the new tooltips based on their props:

{{< highlight css >}}
[tooltip-bottom]::before {
  top: calc(100% + 16px);
  left: 50%;
  right: initial;
  transform: translate(-50%, -20px);
}
[tooltip-bottom]:hover::before {
  transform: translate(-50%, 0)
}
[tooltip-right]::before {
  top: 50%;
  left: calc(100% + 16px);
  right: initial;
  transform: translate(-20px, -50%);
}
[tooltip-right]:hover::before {
  transform: translate(0, -50%);
}
[tooltip-top]::before {
  top: initial;
  left: 50%;
  right: initial;
  bottom: calc(100% + 16px);
  transform: translate(-50%, 20px);
}
[tooltip-top]:hover::before {
  transform: translate(-50%, 0);
}
{{< /highlight >}}

We obviously don’t need to style the `[tooltip-left]` selector, as that’s already handled by the
default. You should now have a page that looks somewhat like this:
Pretty cool, huh?

![Demo of the finished project](/pure-css-tooltips/demo_full.gif)

The cool thing about this is that we can easily add tooltips to every possbile element by just
adding the `tooltip` and `tooltip-content` tags. We just needed 61 lines (53 if we strip the blank
ones) to implement cool-looking tooltips.

If yours don’t work for some reason, checkout the finished branch on my [Github
repo](https://github.com/riesinger/pure-css-tooltips-tutorial).
