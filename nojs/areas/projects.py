import json
from html import escape

import components as c
from engine import ROOT, render
from page import Page

DATA = ROOT / "data/projects"
CATEGORIES = {"commercial": "/projects/", "personal": "/projects/personal/"}


def load(category):
    return json.loads((DATA / f"{category}.json").read_text(encoding="utf-8"))


def switch(category):
    links = []
    for name, href in CATEGORIES.items():
        current = ' aria-current="page"' if name == category else ""
        links.append(f'<a href="{href}"{current}>{name.title()}</a>')
    return "\n".join(links)


def main(category, project, page):
    slug = project["slug"]
    html = '<div class="project-body">\n' + render(f"pages/projects/{category}/{slug}.html", page) + "</div>"
    if project.get("images"):
        shots = c.carousel(f"{slug}-shots", project["images"], "tall")
        html = f'<div class="project-columns">\n{html}\n<div class="project-shots">\n{shots}\n</div>\n</div>'
    if project.get("wideImages"):
        gallery = c.carousel(f"{slug}-gallery", project["wideImages"], "wide", lightbox=True)
        html += f'\n<div class="project-wide">\n{gallery}\n</div>'
    image = project.get("footerImage")
    if image:
        html += (
            f'\n<img class="project-footer-image" src="{escape(image["src"])}" alt="{escape(image["alt"])}"'
            f' width="{image["width"]}" height="{image["height"]}" loading="lazy">'
        )
    return html


def nav_card(category, project, newer):
    side, label, arrow = ("newer", "Next project", "ArrowLeft") if newer else ("older", "Previous project", "ArrowRight")
    text = (
        f'<span class="project-nav-text"><span class="project-nav-label">{label}</span>'
        f'<span class="project-nav-name">{escape(project["name"])}</span>'
        f'<span class="project-nav-date">{escape(project["date"])}</span></span>'
    )
    mark = c.icon(arrow, 26)
    inner = mark + text if newer else text + mark
    return f'<a class="project-nav-card project-nav-{side}" href="/projects/{category}/{project["slug"]}/">{inner}</a>'


def nav(category, projects, index):
    newer = projects[index - 1] if index > 0 else None
    older = projects[index + 1] if index + 1 < len(projects) else None
    if not newer and not older:
        return ""
    gap = '<div class="project-nav-gap"></div>'
    cards = [
        nav_card(category, newer, True) if newer else gap,
        nav_card(category, older, False) if older else gap,
    ]
    return '<nav class="project-nav" aria-label="More projects">\n' + "\n".join(cards) + "\n</nav>"


def project_page(url, category, projects, index, sitemap):
    project = projects[index]
    return Page(
        url,
        f"{project['name']} — Projects — Yurii Voievodin",
        project["summary"],
        layout="focus",
        template="pages/projects/project.html",
        vars={"name": project["name"], "summary": project["summary"], "date": project["date"]},
        slots={
            "project-switch": switch(category),
            "project-tags": c.tag_row(project["tags"]),
            "project-main": lambda page: main(category, project, page),
            "project-nav": lambda page: nav(category, projects, index),
        },
        sitemap=sitemap,
    )


def pages():
    result = []
    for category, url in CATEGORIES.items():
        projects = load(category)
        result.append(project_page(url, category, projects, 0, (0.8, "monthly")))
        result += [
            project_page(f"/projects/{category}/{p['slug']}/", category, projects, i, (0.5, "monthly"))
            for i, p in enumerate(projects)
        ]
    return result
