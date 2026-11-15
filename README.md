# Yurii Voievodin — personal site

CV, projects, travel blog and app landing pages, served from GitHub Pages as plain HTML and CSS. The browser receives no JavaScript.

![Blog Listing Page](public/Screenshot%202025-10-18%20at%2018.31.27.png)

## Build

Python 3.10+ standard library only — nothing to install.

```bash
python3 scripts/build.py           # writes dist/
python3 scripts/build.py --serve   # build, then serve on http://localhost:8000
python3 scripts/check.py           # no <script>, every id, link and image resolves
```

## Structure

| Folder | What lives there |
|---|---|
| `pages/` | one HTML file per page; the path is the URL: `pages/cv.html` → `/cv/`, `pages/blog/index.html` → `/blog/`, `pages/wavefall/uk.html` → `/wavefall/uk/` |
| `layouts/` | the page frame: `base.html` plus `default`, `nav`, `home`, `blank`, and shared parts (nav, footer) |
| `styles/` | CSS; `base.css` first, then the rest in name order, joined into `/static/site.css` |
| `public/` | images, videos, the CV PDF, icons — copied into the site as they are |
| `scripts/` | `build.py` (the whole build), `check.py` (output checks), `icons.py` (icon shapes) |

A page starts with its head data, then its HTML:

```html
<title>CV - Yurii Voievodin</title>
<meta name="description" content="…">
<meta name="layout" content="nav">
<meta name="sitemap" content="0.8 monthly">

<div class="…">…</div>
```

`layout` is `default` (content and footer) when omitted, or `nav`, `home`, `blank`. A page without `sitemap` stays out of `sitemap.xml`. Other head fields: `type` (`article` puts the page in the RSS feed), `published`, `image`, `keywords`, `lang`, `locale`, `robots`, `<link rel="canonical">`, `<link rel="alternate" hreflang>` and `<meta http-equiv="refresh">` for redirects. Open Graph, Twitter and the rest of `<head>` are generated from these.

Markers inside HTML:

```html
<!-- include: layouts/parts/footer.html -->   insert another file
<!-- icon: ArrowLeft 16 -->                   an icon from scripts/icons.py, optional size
{{ email }}                                   site values from scripts/build.py: email, github, linkedin, year
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`: it builds with Python, runs the checks and publishes `dist/` to GitHub Pages.
