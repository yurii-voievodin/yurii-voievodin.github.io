import Link from 'next/link';
import Image from 'next/image';
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
import { siteConfig } from '@/lib/config';
import { wisebudgetScreenshots } from '@/lib/wisebudget-images';
import WidePhotoCarousel from '@/components/WidePhotoCarousel';
import AppStoreBadge from '@/components/wisebudget/AppStoreBadge';
import type { Metadata } from 'next';

const title = 'WiseBudget — Your Financial Dashboard for Mac';
const description =
    'Track expenses and income across multiple currencies, sync transactions from Wise and Monobank, plan monthly budgets per category, and visualize spending with charts and analytics. Your data stays on your device.';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        url: `${siteConfig.url}/wisebudget`,
        type: 'website',
        images: [{ url: `${siteConfig.url}/wisebudget/screenshots/dashboard.png` }],
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [`${siteConfig.url}/wisebudget/screenshots/dashboard.png`],
    },
};

const features = [
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

const views = [
    { icon: LayoutDashboard, name: 'Dashboard', body: 'Income, expenses, and balance for the month, plus your latest transactions at a glance.' },
    { icon: Target, name: 'Budget Plan', body: 'Set a per-category budget and watch pacing bars fill up as the month goes on.' },
    { icon: ArrowLeftRight, name: 'Cashflow', body: 'Compare income vs. expenses month by month, with a running balance for each.' },
    { icon: InfinityIcon, name: 'Lifetime', body: 'Every year at a glance — income vs. expenses trends and cumulative net since day one.' },
];

export default function WiseBudgetPage() {
    return (
        <div className="min-h-screen p-5">
            <div className="max-w-5xl mx-auto">
                {/* Hero */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 pt-6">
                    <Image
                        src="/wisebudget/icon.png"
                        alt="WiseBudget app icon"
                        width={112}
                        height={112}
                        className="rounded-3xl shadow-lg border border-zinc-700/50 flex-shrink-0"
                    />
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2">WiseBudget</h1>
                        <p className="text-lg md:text-xl bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold mb-3">
                            Your Financial Dashboard for Mac
                        </p>
                        <p className="text-zinc-300 leading-relaxed max-w-2xl">
                            Track expenses and income across multiple currencies, sync transactions from Wise and
                            Monobank, plan monthly budgets per category, and visualize spending with charts and
                            analytics — all in one native Mac app.
                        </p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mb-12">
                    <AppStoreBadge />
                    <p className="text-xs text-zinc-400 mt-1.5">Available now on the Mac App Store</p>
                </div>

                {/* Views */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-zinc-100 mb-4">See Your Money, Every Way</h2>
                    <p className="text-zinc-400 mb-4 -mt-2">
                        Four views into the same data — the month, the trend, and the whole picture.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {views.map(({ icon: Icon, name, body }) => (
                            <div
                                key={name}
                                className="rounded-2xl bg-zinc-800/50 border border-zinc-700/50 p-5 backdrop-blur-sm"
                            >
                                <Icon className="w-6 h-6 text-violet-400 mb-3" />
                                <h3 className="font-semibold text-zinc-100 mb-1.5">{name}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Screenshots */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-zinc-100 mb-4">Screenshots</h2>
                    <WidePhotoCarousel images={wisebudgetScreenshots} />
                </div>

                {/* Features */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-zinc-100 mb-4">Key Features</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {features.map(({ icon: Icon, title, body }) => (
                            <div
                                key={title}
                                className="rounded-2xl bg-zinc-800/50 border border-zinc-700/50 p-5 backdrop-blur-sm"
                            >
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-3">
                                    <Icon className="w-5 h-5 text-violet-400" />
                                </div>
                                <h3 className="font-semibold text-zinc-100 mb-1.5">{title}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="rounded-3xl bg-zinc-800/90 border border-zinc-700/50 p-8 text-center backdrop-blur-sm mb-8">
                    <h2 className="text-2xl font-bold text-zinc-100 mb-2">Get WiseBudget</h2>
                    <p className="text-zinc-400 mb-5">Available now on the Mac App Store.</p>
                    <div className="flex justify-center">
                        <AppStoreBadge />
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-6 text-sm">
                        <Link href="/wisebudget-privacy" className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
