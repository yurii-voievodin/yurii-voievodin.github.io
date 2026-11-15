import components as c
from page import Page

HOME_DESCRIPTION = (
    "Experienced software developer with 14+ years of expertise in web and mobile apps development."
    " Proficient in Swift, modern iOS frameworks, AI-powered development tools,"
    " and implementing AI/ML features in applications."
)

MOVED = {
    "/dustdrift/": "/wavefall/",
    "/dustdrift/uk/": "/wavefall/uk/",
    "/dustdrift/ko/": "/wavefall/ko/",
    "/dustdrift/ja/": "/wavefall/ja/",
    "/dustdrift/zh-Hant/": "/wavefall/zh-Hant/",
    "/dustdrift-privacy/": "/wavefall-privacy/",
    "/dustdrift-support/": "/wavefall-support/",
    "/projects/personal/dustdrift/": "/projects/personal/wavefall/",
}

SLOTS = {
    "home-actions": lambda page: c.button("/cv/", "explore my cv" + c.icon("ArrowRight", 16))
    + "\n"
    + c.button("/projects/", "view projects" + c.icon("ArrowRight", 16), "secondary"),
}


def moved(source, target):
    return Page(
        source,
        "Wavefall",
        layout="focus" if source.startswith("/projects/") else "bare",
        template="pages/core/moved.html",
        vars={"target": target},
        robots="noindex, follow",
        canonical=target,
        refresh=target,
    )


def pages():
    return [
        Page("/", "Home - Yurii Voievodin", HOME_DESCRIPTION, layout="home", template="pages/core/home.html", sitemap=(1, "monthly")),
        Page("/404.html", "Yurii Voievodin - Software Developer", layout="bare", template="pages/core/404.html", robots="noindex"),
        *(moved(source, target) for source, target in MOVED.items()),
    ]
