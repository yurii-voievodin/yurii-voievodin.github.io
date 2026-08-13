import Link from 'next/link';
import Image from 'next/image';
import {
    Monitor,
    Video,
    Move,
    FlipHorizontal2,
    Mic,
    ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { headrecorderScreenshots } from '@/lib/headrecorder-images';
import WidePhotoCarousel from '@/components/WidePhotoCarousel';
import AppStoreBadge from '@/components/headrecorder/AppStoreBadge';
import type { Metadata } from 'next';

const title = 'Head Recorder — Screen + Webcam, Recorded Together';
const description =
    'Record your screen and webcam together in one take. Head Recorder composites your camera as a customizable bubble over your screen recording — resize it, move it to any corner, mirror it, pick circle or rectangle — and saves a single video, entirely on your Mac.';

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        url: `${siteConfig.url}/headrecorder`,
        type: 'website',
        images: [{ url: `${siteConfig.url}/headrecorder/screenshots/mac-screen-webcam.png` }],
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [`${siteConfig.url}/headrecorder/screenshots/mac-screen-webcam.png`],
    },
};

const features = [
    {
        icon: Monitor,
        title: 'Screen + Webcam, One Take',
        body: 'Record your display and your camera at the same time — Head Recorder composites them into a single video as you go.',
    },
    {
        icon: Move,
        title: 'Camera Bubble, Your Way',
        body: 'Drop the camera bubble in any corner and resize it to fit your recording.',
    },
    {
        icon: Video,
        title: 'Circle or Rectangle',
        body: 'Switch the camera bubble between a circle or rectangle to match your style.',
    },
    {
        icon: FlipHorizontal2,
        title: 'Mirror Your Camera',
        body: 'Mirror the camera feed so it looks natural in the frame, on or off with one toggle.',
    },
    {
        icon: Mic,
        title: 'Pick Your Sources',
        body: 'Choose which display, camera, and microphone to record from — or record with no microphone at all.',
    },
    {
        icon: ShieldCheck,
        title: 'Private by Design',
        body: 'No accounts, no servers — recording and processing happen entirely on your Mac.',
    },
];

export default function HeadRecorderPage() {
    return (
        <div className="min-h-screen p-5">
            <div className="max-w-5xl mx-auto">
                {/* Hero */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 pt-6">
                    <Image
                        src="/headrecorder/icon.png"
                        alt="Head Recorder app icon"
                        width={112}
                        height={112}
                        className="rounded-3xl shadow-lg border border-zinc-700/50 flex-shrink-0"
                    />
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2">Head Recorder</h1>
                        <p className="text-lg md:text-xl bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold mb-3">
                            Screen + Webcam, Recorded Together
                        </p>
                        <p className="text-zinc-300 leading-relaxed max-w-2xl">
                            Record your screen and your webcam at the same time, composited into a single video with
                            your camera shown as a bubble — resized, repositioned, and mirrored the way you like.
                            Recording and processing happen entirely on your Mac.
                        </p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mb-12">
                    <AppStoreBadge />
                    <p className="text-xs text-zinc-500 mt-1.5">Available now on the Mac App Store</p>
                </div>

                {/* Screenshots */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-zinc-100 mb-4">Screenshots</h2>
                    <WidePhotoCarousel images={headrecorderScreenshots} />
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
                    <h2 className="text-2xl font-bold text-zinc-100 mb-2">Get Head Recorder</h2>
                    <p className="text-zinc-400 mb-5">Available now on the Mac App Store.</p>
                    <div className="flex justify-center">
                        <AppStoreBadge />
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-6 text-sm">
                        <Link href="/headrecorder-support" className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2">
                            Support
                        </Link>
                        <span className="text-zinc-600">·</span>
                        <Link href="/headrecorder-privacy" className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
