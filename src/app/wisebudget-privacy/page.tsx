import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "WiseBudget — Privacy Policy",
    description: "Privacy policy for WiseBudget, a personal finance app for macOS. Your financial data stays on your device and is never collected, sold, or shared.",
    openGraph: {
        title: "WiseBudget — Privacy Policy",
        description: "Privacy policy for WiseBudget, a personal finance app for macOS. Your financial data stays on your device and is never collected, sold, or shared.",
        url: `${siteConfig.url}/wisebudget-privacy`,
        type: "website",
    },
};

export default function WiseBudgetPrivacyPage() {
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
                        WiseBudget
                    </h1>
                    <p className="text-lg text-zinc-400 font-medium">Privacy Policy</p>
                    <p className="text-sm text-zinc-500 mt-2">Last updated: April 2, 2026</p>
                </div>

                <div className="space-y-8 text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Overview</h2>
                        <p>
                            WiseBudget is a personal finance app that respects your privacy. Your financial data stays on your device and is never collected, sold, or shared with third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Data Storage</h2>
                        <p>
                            All your financial data — including expenses, income, budget plans, and categories — is stored locally on your Mac. We do not operate servers and do not have access to your data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Bank Credentials</h2>
                        <p>
                            If you choose to connect your Wise or Monobank accounts, your API tokens are stored securely in the macOS Keychain. These tokens are used solely to communicate directly between your device and the respective bank APIs. We never see, store, or transmit your credentials through any intermediary server.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Third-Party Services</h2>
                        <p className="mb-3">
                            The app communicates directly with the following services when you opt in:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-2">
                            <li><strong className="text-zinc-100">Wise API</strong> (api.wise.com) — to sync transactions and fetch exchange rates</li>
                            <li><strong className="text-zinc-100">Monobank API</strong> (api.monobank.ua) — to sync transactions</li>
                        </ul>
                        <p className="mt-3">
                            These connections are initiated only by you and occur directly between your device and the service provider. No data passes through our infrastructure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Data Collection</h2>
                        <p>
                            We do not collect any personal data, usage analytics, crash reports, or telemetry of any kind.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Data Export</h2>
                        <p>
                            You can export all your data at any time via the CSV export feature. You retain full ownership and control of your financial information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-100 mb-3">Children&apos;s Privacy</h2>
                        <p>
                            WiseBudget is not directed at children under 13 and does not knowingly collect data from children.
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
