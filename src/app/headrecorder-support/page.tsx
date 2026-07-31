import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Head Recorder — Support",
    description: "Support for Head Recorder, a macOS app that records your screen and webcam together as one video. Contact us for bug reports, questions, or feedback.",
    openGraph: {
        title: "Head Recorder — Support",
        description: "Support for Head Recorder, a macOS app that records your screen and webcam together as one video. Contact us for bug reports, questions, or feedback.",
        url: `${siteConfig.url}/headrecorder-support`,
        type: "website",
    },
};

export default function HeadRecorderSupportPage() {
    return (
        <div className="min-h-screen p-5">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-purple-300 mb-6 transition-all font-medium"
                >
                    <ArrowLeft className="mr-2 text-violet-400 hover:text-violet-300 transition-colors" size={16} />
                    Yurii Voievodin
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2">
                        Head Recorder
                    </h1>
                    <p className="text-lg text-zinc-400 font-medium">Support</p>
                </div>

                <div className="space-y-8 text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">About Head Recorder</h2>
                        <p>
                            Head Recorder is a macOS app that records your screen and your webcam at the same time, then composites them into a single video with your camera shown as a bubble in the corner — circle or rectangle, resized and mirrored the way you like. Recording and processing happen entirely on your Mac.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Contact Us</h2>
                        <p className="mb-3">
                            Found a bug, have a question, or want to share feedback? Email us directly and we&apos;ll get back to you:
                        </p>
                        <a
                            href="mailto:yurii.voievodin@icloud.com?subject=Head%20Recorder%20Support"
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
                                <p>Head Recorder runs natively on macOS (13.0 or later).</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-zinc-100 mb-1">Where does my recording go after I stop?</h3>
                                <p>
                                    Head Recorder composites your screen and camera into a single .mov file locally on your Mac, ready to save or share wherever you like.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-zinc-100 mb-1">Does it require an internet connection or an account?</h3>
                                <p>No. Head Recorder works fully offline, with no account or login needed.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-zinc-100 mb-1">I found a bug — what should I include in my report?</h3>
                                <p>
                                    Please include your Mac model, macOS version, what you were doing when the issue occurred, and a screenshot or screen recording if possible. This helps us reproduce and fix the issue faster.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
