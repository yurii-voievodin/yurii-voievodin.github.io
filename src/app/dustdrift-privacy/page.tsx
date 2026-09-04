import Link from 'next/link';
import { ArrowLeft } from '@/components/icons';
import { siteConfig } from '@/lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "DustDrift — Privacy Policy",
    description: "Privacy policy for DustDrift, a single-player game for iPhone, iPad, and Mac that collects no data of any kind.",
    openGraph: {
        title: "DustDrift — Privacy Policy",
        description: "Privacy policy for DustDrift, a single-player game for iPhone, iPad, and Mac that collects no data of any kind.",
        url: `${siteConfig.url}/dustdrift-privacy`,
        type: "website",
    },
};

export default function DustDriftPrivacyPage() {
    return (
        <div className="min-h-screen p-5">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/dustdrift"
                    className="inline-flex items-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-purple-300 mb-6 transition-all font-medium"
                >
                    <ArrowLeft className="mr-2 text-violet-400 hover:text-violet-300 transition-colors" size={16} />
                    DustDrift
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2">
                        DustDrift
                    </h1>
                    <p className="text-lg text-zinc-400 font-medium">Privacy Policy</p>
                    <p className="text-sm text-zinc-500 mt-2">Last updated: July 20, 2026</p>
                </div>

                <div className="space-y-8 text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Overview</h2>
                        <p>
                            DustDrift is a single-player game for iPhone, iPad, and Mac. It has no accounts, no sign-in, and no network connectivity of any kind — it does not collect any personal data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Data Storage</h2>
                        <p>
                            The app stores your game settings and save/inventory progress locally on your device. This data never leaves your device, is never transmitted anywhere, and is never accessible to us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Data Collection</h2>
                        <p>
                            DustDrift makes no network calls. There is no analytics, no crash reporting, no advertising, and no third-party SDKs of any kind. There are no in-app purchases. We do not collect any data because there is no mechanism in the app to do so.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Children&apos;s Privacy</h2>
                        <p>
                            DustDrift is not directed at children under 13 and does not knowingly collect data from anyone.
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
