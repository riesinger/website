# [riesinger.dev](https://riesinger.dev)

Hi there 👋 You've found my personal website and blog.

Built with Hugo and plain CSS; served by Caddy.

## Local development

Run `hugo server` and open `http://localhost:1313/`. Use `hugo` for a production build.

## Design system

All pages use the Pocket ID-inspired theme: locally hosted Instrument Serif for
the homepage name and main page titles, system sans-serif for section headings
and body text, neutral surfaces, rounded cards, and automatic light/dark modes.
No Tailwind or frontend build dependencies are needed.

- `assets/css/base.css` owns shared theme tokens, typography, navigation, and footer.
- `assets/css/main.css` owns the homepage, archives, articles, projects, and reference tables.
- `layouts/partials/icon.html` contains the shared inline icons.

The custom P/R monogram lives in `static/icon.svg`; this is the font-independent
vector master used in the personal-site header and as the SVG favicon. Its colors
adapt to light/dark preferences. PNG and ICO exports use the fixed dark tile;
the Apple touch icon is opaque so the platform can apply its own mask.

Regenerate the raster exports with ImageMagick:

```sh
magick -background none -density 1536 static/icon.svg -resize 1024x1024 \
  -depth 8 -strip /tmp/riesinger-icon-master.png
for size in 16 32; do
  magick /tmp/riesinger-icon-master.png -resize "${size}x${size}" "static/favicon-${size}x${size}.png"
done
for size in 192 512; do
  magick /tmp/riesinger-icon-master.png -resize "${size}x${size}" "static/android-chrome-${size}x${size}.png"
done
magick /tmp/riesinger-icon-master.png -resize 180x180 -background '#171717' \
  -alpha remove -alpha off static/apple-touch-icon.png
magick /tmp/riesinger-icon-master.png -define icon:auto-resize=48,32,16 static/favicon.ico
```

The main archive's tag filter is progressively enhanced: without JavaScript,
all entries remain visible. Wide reference pages use `wide: true` in frontmatter.

Same-origin navigation uses native CSS View Transitions from `base.css`, with a
steady header and a quick page fade by default. Writing and project
card titles marked `data-transition-title` move into the destination `main h1`
over 320ms; the remaining content then fades in over 180ms.

`assets/js/page-transitions.js` pairs only the selected title through the native
`pageswap` / `pagereveal` events. Its classic script deliberately loads in the
head before the first render; do not add `async`, `defer`, or `type="module"`.
It hands off an ephemeral source/destination URL pair through session storage,
consumes it on arrival, and clears temporary transition names when finished.
New card title markers must be inside their destination links.

Reduced-motion preferences disable all page transitions. Without JavaScript,
the required browser APIs, or session storage, navigation keeps the basic fade
where supported, otherwise ordinary page changes. No client-side router is used;
same-page anchors and opening links in a new tab retain their native behavior.
