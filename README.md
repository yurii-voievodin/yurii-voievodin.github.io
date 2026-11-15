# Yurii Voievodin — personal site

CV, projects, travel blog and app landing pages, served from GitHub Pages as plain HTML and CSS. The browser receives no JavaScript.

![Blog Listing Page](public/Screenshot%202025-10-18%20at%2018.31.27.png)

## Build

Python 3.10+ standard library only — nothing to install.

```bash
python3 nojs/build.py           # writes nojs/dist
python3 nojs/build.py --serve   # build, then serve on http://localhost:8000
python3 nojs/check.py           # no <script>, every id, link and image resolves
```

Source layout, template markers and areas are described in [nojs/README.md](nojs/README.md). Images and other static files live in `public/` and are copied into the build as they are.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`: it builds with Python, runs the checks and publishes `nojs/dist` to GitHub Pages.
