URL = "https://yurii-voievodin.github.io"
NAME = "Yurii Voievodin"
TITLE = "Yurii Voievodin - Software Developer"
DESCRIPTION = (
    "Software developer with 14+ years of experience building iOS, macOS and web applications"
    " — CV, projects, and a travel photo blog."
)
THEME_COLOR = "#7c3aed"
GOOGLE_VERIFICATION = "cTGblQb-bn7Tw2ClzLhJfzgTQ94t8V54PnaOiXzZXJ4"

EMAIL = "yurii.voievodin@icloud.com"
GITHUB = "https://github.com/yurii-voievodin"
LINKEDIN = "https://www.linkedin.com/in/yurivoevodin"

NAVIGATION = [
    ("Home", "/", "Home"),
    ("CV", "/cv/", "FileText"),
    ("Security", "/security/", "Shield"),
    ("Q&A", "/qa/", "MessageCircleQuestion"),
    ("Personal", "/personal/", "Heart"),
    ("Blog", "/blog/", "Clock"),
]


def absolute(path):
    return path if path.startswith("http") else URL + path
