from page import Page


def pages():
    return [
        Page(
            "/personal/",
            "Personal Interests - Yurii Voievodin",
            "Explore my personal interests: photography, favorite movies and series, and video games."
            " A glimpse into what inspires me beyond coding.",
            template="pages/personal/personal.html",
            sitemap=(0.8, "monthly"),
        ),
    ]
