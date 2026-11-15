# Yurii Voievodin — personal site

CV, projects, travel blog and app landing pages, served from GitHub Pages as plain HTML and CSS. The browser receives no JavaScript.

![Blog listing page](docs/blog-listing.png)

## Build

Python 3.10+ standard library only — nothing to install.

```bash
python3 scripts/build.py           # writes dist/ and checks it
python3 scripts/build.py --serve   # the same, then serves it on http://localhost:8000
```

After every build the output is checked: no `<script>` other than JSON-LD, no leftover markers, every id, link and image resolves (canonical, `hreflang` and `og:image` included). Any problem fails the build.

## Structure

| Folder | What lives there |
|---|---|
| `pages/` | one HTML file per page; the path is the URL: `pages/cv.html` → `/cv/`, `pages/blog/index.html` → `/blog/`, `pages/wavefall/uk.html` → `/wavefall/uk/` |
| `layouts/` | the page frame: `base.html` plus `default`, `nav`, `blank`, and shared parts in `layouts/parts/` (footer, project headers, screenshot galleries) |
| `styles/` | CSS; `base.css` first, then the rest in name order, joined into `/static/site.css` |
| `public/` | images, videos, the CV PDF, icons — copied into the site as they are |
| `scripts/` | `build.py` (the whole build), `check.py` (output checks it runs), `icons.py` (icon shapes) |
| `docs/` | images for this README |

A page starts with its head data, then its HTML:

```html
<title>CV - Yurii Voievodin</title>
<meta name="description" content="…">
<meta name="layout" content="nav">
<meta name="sitemap" content="0.8 monthly">

<div class="…">…</div>
```

`layout` is `default` (content and footer) when omitted, or `nav` (with the top bar) or `blank` (content only). A page without `sitemap` stays out of `sitemap.xml`. Other head fields: `type` (`article` puts the page in the RSS feed and on `/blog/`), `published`, `image`, `keywords`, `lang`, `locale`, `robots`, `<link rel="canonical">` and `<link rel="alternate" hreflang>`. Open Graph, Twitter and the rest of `<head>` are generated from these. An `article` needs `image` and `published` (`YYYY-MM-DD`).

Markers inside HTML, all in `{{ }}`:

```html
{{ include footer }}        insert layouts/parts/footer.html (or a layout such as {{ include default }})
{{ icon ArrowLeft 16 }}     an icon from scripts/icons.py, optional size
{{ email }}                 a value: email, github, linkedin, year, lang, and date on project pages
{{ posts }}                 the blog tiles, built from the posts' head data
{{ commercial }}            the project tiles of pages/projects/commercial/ ({{ personal }} for personal/)
```

A gallery is one `<img>` per photo between `{{ gallery id kind }}` and `{{ end }}`; the build writes the carousel or grid and a full-size viewer for each photo, with previous/next links in list order:

```html
{{ gallery hooh-shots tall }}
<img src="/projects/Hooh/hooh-chat.png" alt="Hooh AI Chat — retrieving invoices" width="922" height="2000">
<img src="/projects/Hooh/hooh-pdf-signing.png" alt="Hooh PDF editor — signing a contract" width="922" height="2000">
{{ end }}
```

Viewer ids are `<id>-photo-1`, `-2`, …; the kind is `tall` or `wide` (carousels), `grid` (blog photos) or `personal` (the photos on /personal/). In carousels `alt` describes the screenshot; in grids it is the caption shown in the viewer, and a photo without one gets none.

A project page under `pages/projects/commercial/` or `personal/` also needs `<meta name="image">` (its tile picture, cropped to 4:3) and `<meta name="date">` (shown on the tile and through `{{ date }}` on the page). The tiles on `/projects/` and `/projects/personal/` follow the pages' Older links, newest first, so one chain sets both the grid and the Newer/Older navigation; a broken chain fails the build.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`: it builds and checks with Python and publishes `dist/` to GitHub Pages.
