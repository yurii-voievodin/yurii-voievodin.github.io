import type { Metadata } from 'next';
import LegalPage, { LegalSection, PolicyFooterSections } from '@/components/landing/LegalPage';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
    title: 'DustDrift — Privacy Policy',
    description:
        'Privacy policy for DustDrift, a single-player game for iPhone, iPad, and Mac that collects no data of any kind.',
    path: '/dustdrift-privacy',
});

export default function DustDriftPrivacyPage() {
    return (
        <LegalPage app="DustDrift" appHref="/dustdrift" kind="Privacy Policy" updated="July 20, 2026">
            <LegalSection heading="Overview">
                <p>
                    DustDrift is a single-player game for iPhone, iPad, and Mac. It has no accounts, no sign-in, and no network connectivity of any kind — it does not collect any personal data.
                </p>
            </LegalSection>

            <LegalSection heading="Data Storage">
                <p>
                    The app stores your game settings and save/inventory progress locally on your device. This data never leaves your device, is never transmitted anywhere, and is never accessible to us.
                </p>
            </LegalSection>

            <LegalSection heading="Data Collection">
                <p>
                    DustDrift makes no network calls. There is no analytics, no crash reporting, no advertising, and no third-party SDKs of any kind. There are no in-app purchases. We do not collect any data because there is no mechanism in the app to do so.
                </p>
            </LegalSection>

            <LegalSection heading="Children&apos;s Privacy">
                <p>
                    DustDrift is not directed at children under 13 and does not knowingly collect data from anyone.
                </p>
            </LegalSection>

            <PolicyFooterSections />
        </LegalPage>
    );
}
