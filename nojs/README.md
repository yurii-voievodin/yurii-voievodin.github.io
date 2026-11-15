# No-JS prototype

A few pages of the site rebuilt as plain HTML + CSS. The build is a Python script that uses only the standard library; the browser receives no JavaScript.

```bash
python3 nojs/build.py           # writes nojs/dist
python3 nojs/check.py           # no <script>, no leftover markers, every id / link / image resolves
python3 nojs/build.py --serve   # build, then serve on http://localhost:8000
```

| Path | Role |
|---|---|
| `build.py` | page list, marker replacement, copying the images a page uses from `public/` |
| `components.py` | Python functions that turn data into HTML (nav, timeline, gallery, tour) |
| `mdlite.py` | port of `src/lib/markdown.tsx` |
| `icons.py` | Lucide icon paths from `src/components/icons.tsx` |
| `partials/` | layout, header, footer, timeline detail sheets |
| `pages/` | page bodies |
| `data/` | gallery and tour JSON; the timeline reads `public/data/timeline.json` |
| `static/site.css` | all styles, plain CSS |

Template markers:

```html
<!-- include: partials/header.html -->   another file
<!-- slot: timeline -->                   HTML from a Python function (SLOTS in build.py)
{{ title }}                               escaped text (Page.vars in build.py)
```

What replaces the React code:

| Page | Was | Now |
|---|---|---|
| header | `Navigation.tsx` | `aria-current="page"` set by `build.py` |
| Q&A | `useState` accordion | `<details>` / `<summary>` |
| Timeline | `fetch` + `TimelineHighlighter` | rendered at build time, `:target` highlight |
| Timeline details | `DetailModal` | `popover` + `popovertarget` |
| Gallery | `PhotoCarousel` + `Lightbox` | `scroll-snap` carousel, `:target` lightbox |
| Tour | `FeatureTour` | radio buttons + `:has(:checked)` |
