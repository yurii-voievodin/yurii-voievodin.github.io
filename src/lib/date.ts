export type PostDateStyle = 'long' | 'monthYear' | 'shortMonthYear';

const monthLong = new Intl.DateTimeFormat('en-US', { month: 'long', timeZone: 'UTC' });
const monthDayLong = new Intl.DateTimeFormat('en-US', { month: 'long', day: '2-digit', timeZone: 'UTC' });
const monthShort = new Intl.DateTimeFormat('en-US', { month: 'short', timeZone: 'UTC' });

export function formatPostDate(value: string, style: PostDateStyle = 'monthYear'): string {
    const date = new Date(value);
    const year = date.getUTCFullYear();

    switch (style) {
        case 'long':
            return `${monthDayLong.format(date)}, ${year}`;
        case 'shortMonthYear':
            return `${monthShort.format(date)}, ${year}`;
        default:
            return `${monthLong.format(date)}, ${year}`;
    }
}
