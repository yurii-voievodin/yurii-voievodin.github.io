from page import Page


def pages():
    return [
        Page(
            "/timeline/",
            "Professional Timeline - Yurii Voievodin",
            "A chronological journey through my professional career, key milestones,"
            " and notable achievements in software development.",
            template="pages/timeline/timeline.html",
            sitemap=(0.8, "monthly"),
        ),
    ]
