import Link from 'next/link';
import Image from 'next/image';
import {
    Smartphone,
    Pickaxe,
    Swords,
    Bot,
    DoorOpen,
    Shield,
} from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { dustdriftScreenshots } from '@/lib/dustdrift-images';
import WidePhotoCarousel from '@/components/WidePhotoCarousel';
import TrailerPlayer from '@/components/dustdrift/TrailerPlayer';
import AppStoreBadge from '@/components/dustdrift/AppStoreBadge';
import type { Metadata } from 'next';

const title = 'DustDrift — Explore, Mine, Craft, Survive';
const description =
    "Stranded on an alien world, mine resources, craft gear, and fight back against hostile robots across four connected biomes. DustDrift is a procedurally rendered exploration and survival game, native on iPhone, iPad, and Mac. Pre-order now on the App Store, arriving December 10, 2026.";

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        url: `${siteConfig.url}/dustdrift`,
        type: 'website',
        images: [{ url: `${siteConfig.url}/dustdrift/trailer-poster.jpg` }],
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [`${siteConfig.url}/dustdrift/trailer-poster.jpg`],
    },
};

const RELEASE_DATE = 'December 10, 2026';
const PLATFORMS = ['iPhone', 'iPad', 'Mac'];

const features = [
    {
        icon: Pickaxe,
        title: 'Mine & Craft',
        body: 'Mine resources out of destructible rock formations and craft better tools, weapons, and upgrades at crafting stations and your 3D printer.',
    },
    {
        icon: Swords,
        title: 'Four Combat Tools',
        body: 'Arm yourself with a blaster, heavy rifle, gravity gun, or cutter — each with its own playstyle — and fight off hostile robots.',
    },
    {
        icon: Bot,
        title: 'Hostile Robots',
        body: 'Skittering RoboSpiders, heavy Brawlers, and watchful Sentinels patrol the surface — stay armed, or turn one into an ally.',
    },
    {
        icon: DoorOpen,
        title: 'Portals to New Worlds',
        body: 'Step through portals to reach entirely different biomes, each with its own docked ship to call home.',
    },
    {
        icon: Shield,
        title: 'Fully Offline',
        body: 'No accounts, no ads, no in-app purchases — everything runs and saves locally on your device.',
    },
    {
        icon: Smartphone,
        title: 'Native Everywhere',
        body: 'Built from the ground up for touch and mouse alike — the same core game runs natively on iPhone, iPad, and Mac.',
    },
];

export default function DustDriftPage() {
    return (
        <div className="min-h-screen p-5">
            <div className="max-w-5xl mx-auto">
                {/* Hero */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 pt-6">
                    <Image
                        src="/dustdrift/icon.png"
                        alt="DustDrift app icon"
                        width={112}
                        height={112}
                        className="rounded-3xl shadow-lg border border-zinc-700/50 flex-shrink-0"
                    />
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2">DustDrift</h1>
                        <p className="text-lg md:text-xl bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold mb-3">
                            Explore, Mine, Craft, Survive
                        </p>
                        <p className="text-zinc-300 leading-relaxed max-w-2xl">
                            Stranded on an alien world, you&apos;re the last line between survival and the void. Mine
                            resources, craft your way to better gear, and fight back — or make friends with the
                            enemy.
                        </p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mb-12">
                    <AppStoreBadge />
                    <p className="text-xs text-zinc-500 mt-1.5">
                        Pre-order now — arriving {RELEASE_DATE} on iPhone, iPad, and Mac
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                        {PLATFORMS.map((platform) => (
                            <span
                                key={platform}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/30"
                            >
                                {platform}
                            </span>
                        ))}
                        <span className="text-xs text-zinc-500 ml-1">
                            Requires iOS or iPadOS 16.0 or later, or macOS 13.0 or later
                        </span>
                    </div>
                </div>

                {/* Trailer */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-zinc-100 mb-4">Gameplay Trailer</h2>
                    <TrailerPlayer />
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

                {/* Screenshots */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-zinc-100 mb-4">Screenshots</h2>
                    <WidePhotoCarousel images={dustdriftScreenshots} />
                </div>

                {/* Footer CTA */}
                <div className="rounded-3xl bg-zinc-800/90 border border-zinc-700/50 p-8 text-center backdrop-blur-sm mb-8">
                    <h2 className="text-2xl font-bold text-zinc-100 mb-2">Pre-order DustDrift</h2>
                    <p className="text-zinc-400 mb-5">Arriving {RELEASE_DATE} on iPhone, iPad, and Mac.</p>
                    <div className="flex justify-center">
                        <AppStoreBadge />
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-6 text-sm">
                        <Link href="/dustdrift-support" className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2">
                            Support
                        </Link>
                        <span className="text-zinc-600">·</span>
                        <Link href="/dustdrift-privacy" className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
