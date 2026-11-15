import json
from html import escape

import components as c
import config
from engine import ROOT, render
from page import Page

DATA = ROOT / "data/landings"

SLOTS = {
    "legal-updated": lambda page: (
        f'<p class="legal-updated">Last updated: {escape(page.vars["updated"])}</p>' if page.vars.get("updated") else ""
    ),
}


def load(name):
    return json.loads((DATA / f"{name}.json").read_text(encoding="utf-8"))


def fixed(html):
    return lambda page: html


def legal_page(url, title, description, app, app_href, kind, body, updated=None, sitemap=(0.3, "yearly")):
    return Page(
        url,
        title,
        description,
        layout="bare",
        template="pages/landings/legal.html",
        vars={"app": app, "app_href": app_href, "kind": kind, "updated": updated or ""},
        slots={"legal-body": lambda page: render(body, page)},
        sitemap=sitemap,
    )


def badge(store):
    return (
        f'<a class="landing-badge" href="{escape(store["href"])}"{c.external_attrs(True)} '
        f'aria-label="{escape(store["aria"])}"><img src="{escape(store["badge"])}" alt="{escape(store["alt"])}"></a>'
    )


def platforms(items, note):
    chips = "".join(f'<span class="landing-chip">{escape(item)}</span>' for item in items)
    return f'<div class="landing-platforms">{chips}<span class="landing-platforms-note">{escape(note)}</span></div>'


def outro_links(links):
    dot = '<span class="landing-dot" aria-hidden="true">·</span>'
    return dot.join(f'<a class="inline-link" href="{escape(link["href"])}">{escape(link["label"])}</a>' for link in links)


def section(heading, inner):
    return f'<section class="landing-section">\n<h2 class="landing-heading">{escape(heading)}</h2>\n{inner}\n</section>'


def card(item, plain):
    mark = (
        c.icon(item["icon"], 24, cls="landing-card-icon")
        if plain
        else f'<span class="landing-card-tile">{c.icon(item["icon"], 20)}</span>'
    )
    return f'<div class="landing-card">{mark}<h3>{escape(item["title"])}</h3><p>{escape(item["body"])}</p></div>'


def cards(block):
    plain = block.get("icon_style") == "plain"
    lead = f'<p class="landing-lead">{escape(block["lead"])}</p>\n' if block.get("lead") else ""
    items = "\n".join(card(item, plain) for item in block["cards"])
    return f'{lead}<div class="landing-cards landing-cards-{block.get("columns", 3)}">\n{items}\n</div>'


def tour(name, items):
    out = []
    for i, item in enumerate(items, 1):
        checked = " checked" if i == 1 else ""
        loading = "eager" if i == 1 else "lazy"
        out.append(f"""<div class="landing-tour-item">
  <input class="visually-hidden" type="radio" name="{name}" id="{name}-{i}"{checked}>
  <img class="landing-tour-shot" src="{escape(item["image"])}" alt="{escape(item["title"])}" width="1600" height="1024" loading="{loading}">
  <label class="landing-tour-text" for="{name}-{i}">
    <span class="landing-tour-title">{escape(item["title"])}</span>
    <span class="landing-tour-body"><span>{escape(item["body"])}</span></span>
  </label>
</div>""")
    return f'<div class="landing-tour" style="--n: {len(items)}">\n' + "\n".join(out) + "\n</div>"


def trailer(variants, locale, aria, alt):
    tabs, frames = [], []
    for i, variant in enumerate(variants):
        key = variant["id"]
        src = escape(variant["src"].replace("{locale}", locale))
        poster = escape(variant["poster"].replace("{locale}", locale))
        checked = " checked" if i == 0 else ""
        tabs.append(
            f'<label class="wf-trailer-tab wf-trailer-tab-{key}">'
            f'<input class="visually-hidden" type="radio" name="wf-trailer"{checked}>{escape(variant["label"])}</label>'
        )
        frames.append(
            f'<div class="wf-trailer-frame wf-trailer-frame-{key}" style="aspect-ratio: {variant["aspect"]}">'
            f'<video src="{src}" poster="{poster}" controls preload="none" playsinline aria-label="{escape(alt)}">'
            f'<a class="inline-link" href="{src}">{escape(aria)}</a></video></div>'
        )
    return (
        '<div class="wf-trailer">\n<div class="wf-trailer-tabs">'
        + "".join(tabs)
        + "</div>\n"
        + "\n".join(frames)
        + "\n</div>"
    )


def screenshots(name, images):
    return c.carousel(name, images, shape="wide", lightbox=True)


def landing(url, title, description, app, store, outro_links_html, sections_html, header="", platforms_html="", **fields):
    return Page(
        url,
        title,
        description,
        layout="bare",
        template="pages/landings/landing.html",
        vars={
            "app": app["name"],
            "icon": app["icon"],
            "tagline": app["tagline"],
            "intro": app["intro"],
            "cta_note": app["cta_note"],
            "outro_heading": app["outro_heading"],
            "outro_body": app["outro_body"],
        },
        slots={
            "landing-header": fixed(header),
            "landing-badge": fixed(badge(store)),
            "landing-platforms": fixed(platforms_html),
            "landing-sections": fixed("\n".join(sections_html)),
            "landing-links": fixed(outro_links_html),
        },
        **fields,
    )


def app_landing(name):
    data = load(name)
    blocks = []
    for block in data["sections"]:
        inner = screenshots(f"{name}-screenshots", block["images"]) if block["kind"] == "screenshots" else cards(block)
        blocks.append(section(block["heading"], inner))
    app = {
        **data,
        "outro_heading": data["footer"]["heading"],
        "outro_body": data["footer"]["body"],
    }
    return landing(
        data["url"],
        data["title"],
        data["description"],
        app,
        data["app_store"],
        outro_links(data["footer"]["links"]),
        blocks,
        image=data["image"],
        sitemap=(0.8, "monthly"),
    )


def locale_switcher(locales, current):
    links = []
    for code, loc in locales.items():
        mark = ' aria-current="page"' if code == current else ""
        links.append(
            f'<a class="wf-locale" href="{loc["path"]}" hreflang="{code}" lang="{loc["lang"]}"{mark}>{escape(loc["label"])}</a>'
        )
    return '<div class="wf-locales">' + "".join(links) + "</div>"


def wavefall_pages():
    data = load("wavefall")
    locales = data["locales"]
    alternates = {"x-default": locales["en"]["path"], **{code: loc["path"] for code, loc in locales.items()}}
    store = {"href": data["app_store_url"], "badge": "/wavefall/app-store-badge.svg"}
    pages = []
    for code, loc in locales.items():
        date = loc["release_date"]
        items = [{**item, "image": image} for item, image in zip(loc["tour"], data["tour_images"])]
        perks = f'<p class="landing-perks">{escape(" · ".join(loc["perks"]))}</p>'
        blocks = [
            section(loc["trailer_heading"], trailer(data["trailers"], code, loc["trailer_aria"], loc["trailer_alt"])),
            section(loc["tour_heading"], tour("wf-tour", items) + "\n" + perks),
        ]
        app = {
            "name": "Wavefall",
            "icon": "/wavefall/icon.png",
            "tagline": loc["tagline"],
            "intro": loc["intro"],
            "cta_note": loc["cta_note"].replace("{date}", date),
            "outro_heading": loc["footer_heading"],
            "outro_body": loc["footer_body"].replace("{date}", date),
        }
        links = [
            {"label": loc["support_label"], "href": "/wavefall-support/"},
            {"label": loc["privacy_label"], "href": "/wavefall-privacy/"},
        ]
        jsonld = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Wavefall",
            "applicationCategory": "Game",
            "operatingSystem": "iOS, iPadOS, macOS",
            "description": loc["description"],
            "image": config.absolute(data["ld_image"]),
            "url": config.absolute(loc["path"]),
            "inLanguage": loc["lang"],
            "releaseDate": data["release_date_iso"],
            "offers": {"@type": "Offer", "availability": "https://schema.org/PreOrder", "url": data["app_store_url"]},
        }
        pages.append(
            landing(
                loc["path"],
                loc["title"],
                loc["description"],
                app,
                {**store, "aria": loc["app_store_aria"], "alt": loc["app_store_alt"]},
                outro_links(links),
                blocks,
                header=locale_switcher(locales, code),
                platforms_html=platforms(data["platforms"], loc["platforms_note"]),
                lang=loc["lang"],
                og_locale=loc["og_locale"],
                image=data["og_image"],
                canonical=loc["path"],
                alternates=alternates,
                jsonld=[jsonld],
                sitemap=(0.8 if code == "en" else 0.7, "monthly"),
            )
        )
    return pages


def pages():
    return [
        *wavefall_pages(),
        app_landing("wisebudget"),
        app_landing("headrecorder"),
        legal_page(
            "/wavefall-privacy/",
            "Wavefall — Privacy Policy",
            "Privacy policy for Wavefall, a single-player game for iPhone, iPad, and Mac that collects no data of any kind.",
            "Wavefall",
            "/wavefall/",
            "Privacy Policy",
            "pages/landings/wavefall-privacy.html",
            updated="July 20, 2026",
        ),
        legal_page(
            "/wavefall-support/",
            "Wavefall — Support",
            "Support for Wavefall, a top-down exploration and survival game for iPhone, iPad, and Mac."
            " Contact us for bug reports, questions, or feedback.",
            "Wavefall",
            "/wavefall/",
            "Support",
            "pages/landings/wavefall-support.html",
        ),
        legal_page(
            "/wisebudget-privacy/",
            "WiseBudget — Privacy Policy",
            "Privacy policy for WiseBudget, a personal finance app for macOS."
            " Your financial data stays on your device and is never collected, sold, or shared.",
            "WiseBudget",
            "/wisebudget/",
            "Privacy Policy",
            "pages/landings/wisebudget-privacy.html",
            updated="April 2, 2026",
        ),
        legal_page(
            "/headrecorder-privacy/",
            "Head Recorder — Privacy Policy",
            "Privacy policy for Head Recorder, a macOS screen and webcam recording app"
            " that processes everything locally and collects no data.",
            "Head Recorder",
            "/headrecorder/",
            "Privacy Policy",
            "pages/landings/headrecorder-privacy.html",
            updated="July 31, 2026",
        ),
        legal_page(
            "/headrecorder-support/",
            "Head Recorder — Support",
            "Support for Head Recorder, a macOS app that records your screen and webcam together as one video."
            " Contact us for bug reports, questions, or feedback.",
            "Head Recorder",
            "/headrecorder/",
            "Support",
            "pages/landings/headrecorder-support.html",
        ),
    ]
