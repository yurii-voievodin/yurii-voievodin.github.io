# Static site (no JavaScript)

The site rebuilt as plain HTML + CSS. The build is a Python script that uses only the standard library; the browser receives no JavaScript.

```bash
python3 site/build.py                      # writes site/dist
python3 site/build.py --serve              # build, then serve on http://localhost:8000
python3 site/build.py --areas blog --out /tmp/site-preview   # build core + one area into another folder
python3 site/check.py [DIR] [--partial]    # no <script>, no leftover markers, every id / link / image resolves
```

| Path | Role |
|---|---|
| `build.py` | loads the areas, renders every page, copies `public/`, writes `site.css`, `sitemap.xml`, `robots.txt` |
| `engine.py` | template markers and global slots |
| `page.py` | the `Page` model and everything in `<head>` (meta, Open Graph, hreflang, JSON-LD) |
| `config.py` | site URL, names, social links, footer navigation |
| `components.py` | icon SVGs and the footer links |
| `areas/*.py` | one module per part of the site: the list of its pages with their head metadata (`pages()`), plus optional `SLOTS` and generated `files()` such as the RSS feed |
| `pages/<area>/` | the content of every page as plain HTML |
| `partials/` | layouts, nav, footer |
| `static/css/` | `base.css` first, then every other file in name order, joined into `/static/site.css` |

Template markers:

```html
<!-- include: partials/footer.html -->   another file
<!-- slot: timeline -->                   HTML from a Python function (page.slots, then area SLOTS)
<!-- icon: ArrowLeft 16 -->               an icon from icons.py, optional size
{{ title }}                               escaped text (Page.text_vars)
```

Layouts (`Page.layout`): `home` and `focus` (content + footer), `site` (nav + content + footer), `bare` (content only).
