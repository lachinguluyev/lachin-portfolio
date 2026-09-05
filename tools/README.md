# tools/

Two generators. Run them from the project root, in this order, **after adding or
editing a project in `js/projects.js`**:

```bash
python tools/build-og-images.py    # 1200x630 share images
python tools/build-seo.py          # meta/OG/JSON-LD, static project pages, sitemap
```

`tools/build-favicons.py` only needs re-running if the brand logo changes.

## build-og-images.py
Reads every `cover:` in `js/projects.js` and writes a 1200×630 crop to
`assets/og/<project-id>.jpg` (the image WhatsApp / LinkedIn / Google show).

## build-favicons.py
Cuts the **L** and **A** glyphs out of `assets/brand/logo-black.png` — the real
LACHIN ARCHITECTS mark — and composes them into a square monogram, then writes
`favicon.ico`, `favicon-32/48/96/144/192/512.png`, `apple-touch-icon.png` and
`site.webmanifest`. The full wordmark is unreadable at 16px (the size a browser
tab and a Google result actually show), which is why the icon is a monogram.
Google also requires the favicon to be square and a multiple of 48px.

## build-seo.py
- Injects the `<!-- SEO:START --> … <!-- SEO:END -->` head block into
  `index / about / services / contact / real-time-app / course`.
  Re-running replaces the block, it never duplicates.
- Generates one **static, pre-rendered** page per project at `<project-id>.html`,
  so crawlers and link previews see the real title, text and images without JS.
  `js/project.js` still takes over in the browser (id comes from `body[data-project]`).
- Writes `sitemap.xml` (17 URLs) and `robots.txt`.

Page titles and descriptions for the non-project pages live in the `PAGES` dict
inside `build-seo.py` — edit them there, not in the HTML, or the next run
overwrites them.

`project.html?id=X` is kept only as a redirect for old links; it is `noindex`.
