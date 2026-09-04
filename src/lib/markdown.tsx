import type { ReactNode } from 'react';

const INLINE_PATTERN =
    '(`+)([\\s\\S]*?)\\1' +
    '|\\*\\*([\\s\\S]+?)\\*\\*' +
    '|\\*([^*\\n]+?)\\*' +
    '|_([^_\\n]+?)_' +
    '|\\[([^\\]]*)\\]\\(([^)\\s]+)\\)';

const SAFE_PROTOCOL = /^(https?|ircs?|mailto|xmpp)$/i;

function safeUrl(value: string): string {
    const colon = value.indexOf(':');
    const questionMark = value.indexOf('?');
    const numberSign = value.indexOf('#');
    const slash = value.indexOf('/');

    if (
        colon < 0 ||
        (slash > -1 && colon > slash) ||
        (questionMark > -1 && colon > questionMark) ||
        (numberSign > -1 && colon > numberSign) ||
        SAFE_PROTOCOL.test(value.slice(0, colon))
    ) {
        return value;
    }

    return '';
}

function parseInline(text: string): ReactNode {
    const re = new RegExp(INLINE_PATTERN, 'g');
    const nodes: ReactNode[] = [];
    let last = 0;
    let key = 0;
    let match: RegExpExecArray | null;

    while ((match = re.exec(text)) !== null) {
        const [full, , code, strong, emStar, emUnderscore, linkText, href] = match;

        if (emUnderscore !== undefined) {
            const before = text[match.index - 1];
            const after = text[match.index + full.length];
            if ((before && /\w/.test(before)) || (after && /\w/.test(after))) continue;
        }

        if (match.index > last) nodes.push(text.slice(last, match.index));

        if (code !== undefined) nodes.push(<code key={key++}>{code}</code>);
        else if (strong !== undefined) nodes.push(<strong key={key++}>{parseInline(strong)}</strong>);
        else if (emStar !== undefined) nodes.push(<em key={key++}>{parseInline(emStar)}</em>);
        else if (emUnderscore !== undefined) nodes.push(<em key={key++}>{parseInline(emUnderscore)}</em>);
        else nodes.push(<a key={key++} href={safeUrl(href)}>{parseInline(linkText)}</a>);

        last = match.index + full.length;
    }

    if (last < text.length) nodes.push(text.slice(last));
    return nodes.length === 1 ? nodes[0] : nodes;
}

const isBlank = (line: string) => /^\s*$/.test(line);
const isBullet = (line: string) => /^\s{0,3}[-*+]\s+/.test(line);

export default function Markdown({ children }: { children?: string | null }) {
    if (!children) return null;

    const lines = children.replace(/\r\n?/g, '\n').split('\n');
    const blocks: ReactNode[] = [];
    let i = 0;
    let key = 0;

    while (i < lines.length) {
        if (isBlank(lines[i])) {
            i++;
            continue;
        }

        if (isBullet(lines[i])) {
            const items: string[] = [];
            let loose = false;

            while (i < lines.length) {
                if (isBullet(lines[i])) {
                    let text = lines[i].replace(/^\s{0,3}[-*+]\s+/, '').trim();
                    i++;
                    while (i < lines.length && !isBlank(lines[i]) && !isBullet(lines[i])) {
                        text += ` ${lines[i].trim()}`;
                        i++;
                    }
                    items.push(text);
                } else if (isBlank(lines[i])) {
                    let next = i;
                    while (next < lines.length && isBlank(lines[next])) next++;
                    if (next < lines.length && isBullet(lines[next])) {
                        loose = true;
                        i = next;
                    } else break;
                } else break;
            }

            blocks.push(
                <ul key={key++}>
                    {items.map((item, index) => (
                        <li key={index}>{loose ? <p>{parseInline(item)}</p> : parseInline(item)}</li>
                    ))}
                </ul>
            );
            continue;
        }

        const paragraph: string[] = [];
        while (i < lines.length && !isBlank(lines[i]) && !isBullet(lines[i])) {
            paragraph.push(lines[i].trim());
            i++;
        }
        blocks.push(<p key={key++}>{parseInline(paragraph.join(' '))}</p>);
    }

    return <>{blocks}</>;
}
