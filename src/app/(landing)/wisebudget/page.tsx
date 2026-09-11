import type { Metadata } from 'next';
import {
    RefreshCw,
    Target,
    Coins,
    TrendingUp,
    CalendarDays,
    ShieldCheck,
    LayoutDashboard,
    ArrowLeftRight,
    Infinity as InfinityIcon,
} from '@/components/icons';
import AppLanding, { type LandingCard } from '@/components/landing/AppLanding';
import { wisebudgetScreenshots } from '@/lib/wisebudget-images';
import { buildMetadata } from '@/lib/metadata';

const title = 'WiseBudget — Your Financial Dashboard for Mac';
const description =
    'Track expenses and income across multiple currencies, sync transactions from Wise and Monobank, plan monthly budgets per category, and visualize spending with charts and analytics. Your data stays on your device.';

export const metadata: Metadata = buildMetadata({
    title,
    description,
    path: '/wisebudget',
    image: '/wisebudget/screenshots/dashboard.png',
});

const features: LandingCard[] = [
    {
        icon: RefreshCw,
        title: 'Bank Sync',
        body: 'Sync transactions automatically from Wise and Monobank, with duplicates detected and skipped.',
    },
    {
        icon: Target,
        title: 'Budget Planning',
        body: 'Set a monthly budget per category and track pacing against it in real time.',
    },
    {
        icon: Coins,
        title: 'Multi-Currency',
        body: 'Track expenses and income across currencies, converted to your base currency automatically.',
    },
    {
        icon: TrendingUp,
        title: 'Cashflow Insights',
        body: 'See income vs. expenses month by month, plus lifetime trends since your very first transaction.',
    },
    {
        icon: CalendarDays,
        title: 'Spending Calendar',
        body: 'Browse a daily calendar view of spending to spot the days that broke your budget.',
    },
    {
        icon: ShieldCheck,
        title: 'Private by Design',
        body: 'No accounts, no servers — your financial data stays on your Mac, always.',
    },
];

const views: LandingCard[] = [
    { icon: LayoutDashboard, title: 'Dashboard', body: 'Income, expenses, and balance for the month, plus your latest transactions at a glance.' },
    { icon: Target, title: 'Budget Plan', body: 'Set a per-category budget and watch pacing bars fill up as the month goes on.' },
    { icon: ArrowLeftRight, title: 'Cashflow', body: 'Compare income vs. expenses month by month, with a running balance for each.' },
    { icon: InfinityIcon, title: 'Lifetime', body: 'Every year at a glance — income vs. expenses trends and cumulative net since day one.' },
];

export default function WiseBudgetPage() {
    return (
        <AppLanding
            name="WiseBudget"
            icon="/wisebudget/icon.png"
            tagline="Your Financial Dashboard for Mac"
            description="Track expenses and income across multiple currencies, sync transactions from Wise and Monobank, plan monthly budgets per category, and visualize spending with charts and analytics — all in one native Mac app."
            appStore={{
                href: 'https://apps.apple.com/us/app/wisebudgeter/id6760725900',
                badge: '/wisebudget/mac-app-store-badge.svg',
                ariaLabel: 'Download WiseBudget on the Mac App Store',
                alt: 'Download on the Mac App Store',
            }}
            ctaNote="Available now on the Mac App Store"
            sections={[
                {
                    kind: 'cards',
                    heading: 'See Your Money, Every Way',
                    lead: 'Four views into the same data — the month, the trend, and the whole picture.',
                    cards: views,
                    columns: 4,
                    iconStyle: 'plain',
                },
                { kind: 'screenshots', heading: 'Screenshots', images: wisebudgetScreenshots },
                { kind: 'cards', heading: 'Key Features', cards: features },
            ]}
            footer={{
                heading: 'Get WiseBudget',
                body: 'Available now on the Mac App Store.',
                links: [{ label: 'Privacy Policy', href: '/wisebudget-privacy' }],
            }}
        />
    );
}
