import re
from html import escape

INLINE = re.compile(
    r"(`+)([\s\S]*?)\1"
    r"|\*\*([\s\S]+?)\*\*"
    r"|\*([^*\n]+?)\*"
    r"|_([^_\n]+?)_"
    r"|\[([^\]]*)\]\(([^)\s]+)\)"
)
SAFE_PROTOCOL = re.compile(r"^(https?|ircs?|mailto|xmpp)$", re.I)
BULLET = re.compile(r"^\s{0,3}[-*+]\s+")


def safe_url(value):
    colon, question, hash_, slash = (value.find(ch) for ch in ":?#/")
    if (
        colon < 0
        or (slash > -1 and colon > slash)
        or (question > -1 and colon > question)
        or (hash_ > -1 and colon > hash_)
        or SAFE_PROTOCOL.match(value[:colon])
    ):
        return value
    return ""


def inline(text):
    out, last = [], 0
    for m in INLINE.finditer(text):
        _, code, strong, em_star, em_under, link_text, href = m.groups()
        if em_under is not None:
            before = text[m.start() - 1] if m.start() > 0 else ""
            after = text[m.end()] if m.end() < len(text) else ""
            if re.match(r"\w", before) or re.match(r"\w", after):
                continue
        out.append(escape(text[last : m.start()]))
        if code is not None:
            out.append(f"<code>{escape(code)}</code>")
        elif strong is not None:
            out.append(f"<strong>{inline(strong)}</strong>")
        elif em_star is not None or em_under is not None:
            out.append(f"<em>{inline(em_star or em_under)}</em>")
        else:
            out.append(f'<a href="{escape(safe_url(href))}">{inline(link_text)}</a>')
        last = m.end()
    out.append(escape(text[last:]))
    return "".join(out)


def is_blank(line):
    return not line.strip()


def markdown(source):
    if not source:
        return ""
    lines = source.replace("\r\n", "\n").replace("\r", "\n").split("\n")
    blocks, i = [], 0

    while i < len(lines):
        if is_blank(lines[i]):
            i += 1
            continue

        if BULLET.match(lines[i]):
            items, loose = [], False
            while i < len(lines):
                if BULLET.match(lines[i]):
                    text = BULLET.sub("", lines[i]).strip()
                    i += 1
                    while i < len(lines) and not is_blank(lines[i]) and not BULLET.match(lines[i]):
                        text += " " + lines[i].strip()
                        i += 1
                    items.append(text)
                elif is_blank(lines[i]):
                    nxt = i
                    while nxt < len(lines) and is_blank(lines[nxt]):
                        nxt += 1
                    if nxt < len(lines) and BULLET.match(lines[nxt]):
                        loose, i = True, nxt
                    else:
                        break
                else:
                    break
            wrap = (lambda t: f"<p>{inline(t)}</p>") if loose else inline
            blocks.append("<ul>" + "".join(f"<li>{wrap(t)}</li>" for t in items) + "</ul>")
            continue

        paragraph = []
        while i < len(lines) and not is_blank(lines[i]) and not BULLET.match(lines[i]):
            paragraph.append(lines[i].strip())
            i += 1
        blocks.append(f"<p>{inline(' '.join(paragraph))}</p>")

    return "\n".join(blocks)
