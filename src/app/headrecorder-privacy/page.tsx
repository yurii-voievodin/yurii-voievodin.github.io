import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Head Recorder — Privacy Policy",
    description: "Privacy policy for Head Recorder, a macOS screen and webcam recording app that processes everything locally and collects no data.",
    openGraph: {
        title: "Head Recorder — Privacy Policy",
        description: "Privacy policy for Head Recorder, a macOS screen and webcam recording app that processes everything locally and collects no data.",
        url: `${siteConfig.url}/headrecorder-privacy`,
        type: "website",
    },
};

export default function HeadRecorderPrivacyPage() {
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
                    <p className="text-lg text-zinc-400 font-medium">Privacy Policy</p>
                    <p className="text-sm text-zinc-500 mt-2">Last updated: July 31, 2026</p>
                </div>

                <div className="space-y-8 text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Overview</h2>
                        <p>
                            Head Recorder is a macOS app that records your screen and webcam. It has no accounts, no sign-in, and does not transmit anything it records anywhere — all recording and processing happen locally on your Mac.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Camera, Microphone &amp; Screen Recording Access</h2>
                        <p>
                            Head Recorder requests camera, microphone, and screen recording permissions solely to capture the video and audio you choose to record. These permissions are used only while you are actively recording and are never used to observe you in the background.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Data Storage</h2>
                        <p>
                            Recordings are captured and composited into a single video file entirely on your Mac. This data never leaves your device, is never transmitted anywhere, and is never accessible to us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Data Collection</h2>
                        <p>
                            Head Recorder makes no network calls. There is no analytics, no crash reporting, no advertising, and no third-party SDKs of any kind. We do not collect any data because there is no mechanism in the app to do so.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Children&apos;s Privacy</h2>
                        <p>
                            Head Recorder is not directed at children under 13 and does not knowingly collect data from anyone.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Changes to This Policy</h2>
                        <p>
                            Any updates to this policy will be reflected in future app versions with an updated date above.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Contact</h2>
                        <p>
                            If you have questions about this policy, please contact us at{' '}
                            <a
                                href="mailto:yurii.voievodin@icloud.com"
                                className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
                            >
                                yurii.voievodin@icloud.com
                            </a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
