import type { Metadata } from 'next';
import LegalPage, { LegalSection, PolicyFooterSections } from '@/components/landing/LegalPage';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
    title: 'WiseBudget — Privacy Policy',
    description:
        'Privacy policy for WiseBudget, a personal finance app for macOS. Your financial data stays on your device and is never collected, sold, or shared.',
    path: '/wisebudget-privacy',
});

export default function WiseBudgetPrivacyPage() {
    return (
        <LegalPage app="WiseBudget" appHref="/wisebudget" kind="Privacy Policy" updated="April 2, 2026">
            <LegalSection heading="Overview">
                <p>
                    WiseBudget is a personal finance app that respects your privacy. Your financial data stays on your device and is never collected, sold, or shared with third parties.
                </p>
            </LegalSection>

            <LegalSection heading="Data Storage">
                <p>
                    All your financial data — including expenses, income, budget plans, and categories — is stored locally on your Mac. We do not operate servers and do not have access to your data.
                </p>
            </LegalSection>

            <LegalSection heading="Bank Credentials">
                <p>
                    If you choose to connect your Wise or Monobank accounts, your API tokens are stored securely in the macOS Keychain. These tokens are used solely to communicate directly between your device and the respective bank APIs. We never see, store, or transmit your credentials through any intermediary server.
                </p>
            </LegalSection>

            <LegalSection heading="Third-Party Services">
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
            </LegalSection>

            <LegalSection heading="Data Collection">
                <p>
                    We do not collect any personal data, usage analytics, crash reports, or telemetry of any kind.
                </p>
            </LegalSection>

            <LegalSection heading="Data Export">
                <p>
                    You can export all your data at any time via the CSV export feature. You retain full ownership and control of your financial information.
                </p>
            </LegalSection>

            <LegalSection heading="Children&apos;s Privacy">
                <p>
                    WiseBudget is not directed at children under 13 and does not knowingly collect data from children.
                </p>
            </LegalSection>

            <PolicyFooterSections />
        </LegalPage>
    );
}
