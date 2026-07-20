import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "DustDrift — Support",
    description: "Support for DustDrift, a top-down exploration and survival game for iPhone, iPad, and Mac. Contact us for bug reports, questions, or feedback.",
    openGraph: {
        title: "DustDrift — Support",
        description: "Support for DustDrift, a top-down exploration and survival game for iPhone, iPad, and Mac. Contact us for bug reports, questions, or feedback.",
        url: `${siteConfig.url}/dustdrift-support`,
        type: "website",
    },
};

export default function DustDriftSupportPage() {
    return (
        <div className="min-h-screen p-5">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-purple-300 mb-6 transition-all font-medium"
                >
                    <ArrowLeft className="mr-2 text-violet-400 hover:text-violet-300 transition-colors" size={16} />
                    Home
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2">
                        DustDrift
                    </h1>
                    <p className="text-lg text-zinc-400 font-medium">Support</p>
                </div>

                <div className="space-y-8 text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">About DustDrift</h2>
                        <p>
                            DustDrift is a 2D top-down exploration and survival game: you play an astronaut exploring a procedurally generated alien surface, mining resources from destructible rocks, crafting gear, and fighting hostile robots with a blaster, heavy rifle, gravity gun, or cutter, while traveling between biomes — desert, ice, water, and shardlands — via portals. It runs natively on iPhone, iPad, and Mac. DustDrift is single-player and fully offline, with no account or login required.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Contact Us</h2>
                        <p className="mb-3">
                            Found a bug, have a question, or want to share feedback? Email us directly and we&apos;ll get back to you:
                        </p>
                        <a
                            href="mailto:yurii.voievodin@icloud.com?subject=DustDrift%20Support"
                            className="inline-flex items-center rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold px-5 py-3 hover:from-violet-400 hover:to-purple-400 transition-all"
                        >
                            yurii.voievodin@icloud.com
                        </a>
                        <p className="mt-3 text-sm text-zinc-400">
                            We monitor this inbox and respond to every bug report, question, and piece of feedback.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Frequently Asked Questions</h2>
                        <div className="space-y-5">
                            <div>
                                <h3 className="font-semibold text-zinc-100 mb-1">Which platforms does it support?</h3>
                                <p>DustDrift runs natively on iPhone, iPad, and Mac.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-zinc-100 mb-1">Is there a way to reset my progress?</h3>
                                <p>
                                    Yes — DustDrift stores all progress locally on your device. If you&apos;d like to start over, email us at{' '}
                                    <a
                                        href="mailto:yurii.voievodin@icloud.com"
                                        className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
                                    >
                                        yurii.voievodin@icloud.com
                                    </a>{' '}
                                    and we&apos;ll walk you through it.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-zinc-100 mb-1">I found a bug — what should I include in my report?</h3>
                                <p>
                                    Please include your device model, iOS/iPadOS/macOS version, what you were doing when the issue occurred, and a screenshot or screen recording if possible. This helps us reproduce and fix the issue faster.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-zinc-100 mb-1">Does DustDrift require an internet connection or an account?</h3>
                                <p>No. DustDrift is fully offline and single-player, with no account or login needed.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
