import json
from dataclasses import dataclass, field
from datetime import date
from html import escape
from typing import Callable, Optional

import config


@dataclass
class Page:
    url: str
    title: str
    description: str = config.DESCRIPTION
    layout: str = "site"
    template: Optional[str] = None
    body: Optional[Callable[["Page"], str]] = None
    vars: dict = field(default_factory=dict)
    slots: dict = field(default_factory=dict)
    lang: str = "en"
    og_type: str = "website"
    og_locale: Optional[str] = None
    image: Optional[str] = None
    canonical: Optional[str] = None
    alternates: dict = field(default_factory=dict)
    keywords: list = field(default_factory=list)
    published: Optional[str] = None
    tags: list = field(default_factory=list)
    robots: Optional[str] = None
    refresh: Optional[str] = None
    jsonld: list = field(default_factory=list)
    sitemap: Optional[tuple] = None
    lastmod: Optional[str] = None

    @property
    def output(self):
        path = self.url.lstrip("/")
        return path + "index.html" if path == "" or path.endswith("/") else path

    def text_vars(self):
        return {
            "title": self.title,
            "description": self.description,
            "lang": self.lang,
            "year": str(date.today().year),
            "email": config.EMAIL,
            "github": config.GITHUB,
            "linkedin": config.LINKEDIN,
            **self.vars,
        }


def meta(name, content, attr="name"):
    return f'<meta {attr}="{name}" content="{escape(content)}">'


def link(rel, href, **extra):
    attrs = "".join(f' {k.replace("_", "-")}="{escape(v)}"' for k, v in extra.items())
    return f'<link rel="{rel}" href="{escape(href)}"{attrs}>'


def head(page):
    tags = ['<meta charset="utf-8">', meta("viewport", "width=device-width, initial-scale=1")]
    if page.refresh:
        tags.append(meta("refresh", f"0; url={page.refresh}", attr="http-equiv"))
    tags += [
        f"<title>{escape(page.title)}</title>",
        meta("description", page.description),
        meta("author", config.NAME),
        link("manifest", "/manifest.json"),
    ]
    if page.keywords:
        tags.append(meta("keywords", ", ".join(page.keywords)))
    tags.append(meta("creator", config.NAME))
    if page.robots:
        tags.append(meta("robots", page.robots))
    tags.append(meta("theme-color", config.THEME_COLOR))
    if page.canonical:
        tags.append(link("canonical", config.absolute(page.canonical)))
    for lang, path in page.alternates.items():
        tags.append(link("alternate", config.absolute(path), hreflang=lang))
    tags += [
        link("alternate", config.absolute("/feed.xml"), type="application/rss+xml"),
        meta("google-site-verification", config.GOOGLE_VERIFICATION),
        meta("og:title", page.title, "property"),
        meta("og:description", page.description, "property"),
        meta("og:url", config.absolute(page.canonical or page.url), "property"),
    ]
    if page.og_locale:
        tags.append(meta("og:locale", page.og_locale, "property"))
    if page.image:
        tags.append(meta("og:image", config.absolute(page.image), "property"))
    tags.append(meta("og:type", page.og_type, "property"))
    if page.og_type == "article":
        if page.published:
            tags.append(meta("article:published_time", page.published, "property"))
        tags.append(meta("article:author", config.NAME, "property"))
        tags += [meta("article:tag", tag, "property") for tag in page.tags]
    tags += [
        meta("twitter:card", "summary_large_image" if page.image else "summary"),
        meta("twitter:title", page.title),
        meta("twitter:description", page.description),
    ]
    if page.image:
        tags.append(meta("twitter:image", config.absolute(page.image)))
    tags += [
        link("icon", "/favicon.ico", type="image/x-icon"),
        link("apple-touch-icon", "/apple-touch-icon.png"),
        link("stylesheet", "/static/site.css"),
    ]
    return "\n  ".join(tags)


WEBSITE = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": config.NAME,
    "url": config.URL,
    "description": config.DESCRIPTION,
}


def ld_script(block):
    text = json.dumps(block, ensure_ascii=False).replace("</", "<\\/")
    return f'<script type="application/ld+json">{text}</script>'


def jsonld(page):
    return "\n".join(ld_script(block) for block in [WEBSITE, *page.jsonld])
