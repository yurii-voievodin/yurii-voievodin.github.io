export type PostDateStyle = 'long' | 'monthYear' | 'shortMonthYear';

const monthLong = new Intl.DateTimeFormat('en-US', { month: 'long', timeZone: 'UTC' });
const monthShort = new Intl.DateTimeFormat('en-US', { month: 'short', timeZone: 'UTC' });

export function formatPostDate(value: string, style: PostDateStyle = 'monthYear'): string {
    const date = new Date(value);
    const year = date.getUTCFullYear();

    switch (style) {
        case 'long':
            return `${monthLong.format(date)} ${String(date.getUTCDate()).padStart(2, '0')}, ${year}`;
        case 'shortMonthYear':
            return `${monthShort.format(date)}, ${year}`;
        default:
            return `${monthLong.format(date)}, ${year}`;
    }
}
