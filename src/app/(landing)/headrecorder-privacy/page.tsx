import type { Metadata } from 'next';
import LegalPage, { LegalSection, PolicyFooterSections } from '@/components/landing/LegalPage';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
    title: 'Head Recorder — Privacy Policy',
    description:
        'Privacy policy for Head Recorder, a macOS screen and webcam recording app that processes everything locally and collects no data.',
    path: '/headrecorder-privacy',
});

export default function HeadRecorderPrivacyPage() {
    return (
        <LegalPage
            app="Head Recorder"
            appHref="/headrecorder"
            kind="Privacy Policy"
            updated="July 31, 2026"
        >
            <LegalSection heading="Overview">
                <p>
                    Head Recorder is a macOS app that records your screen and webcam. It has no accounts, no sign-in, and does not transmit anything it records anywhere — all recording and processing happen locally on your Mac.
                </p>
            </LegalSection>

            <LegalSection heading="Camera, Microphone &amp; Screen Recording Access">
                <p>
                    Head Recorder requests camera, microphone, and screen recording permissions solely to capture the video and audio you choose to record. These permissions are used only while you are actively recording and are never used to observe you in the background.
                </p>
            </LegalSection>

            <LegalSection heading="Data Storage">
                <p>
                    Recordings are captured and composited into a single video file entirely on your Mac. This data never leaves your device, is never transmitted anywhere, and is never accessible to us.
                </p>
            </LegalSection>

            <LegalSection heading="Data Collection">
                <p>
                    Head Recorder makes no network calls. There is no analytics, no crash reporting, no advertising, and no third-party SDKs of any kind. We do not collect any data because there is no mechanism in the app to do so.
                </p>
            </LegalSection>

            <LegalSection heading="Children&apos;s Privacy">
                <p>
                    Head Recorder is not directed at children under 13 and does not knowingly collect data from anyone.
                </p>
            </LegalSection>

            <PolicyFooterSections />
        </LegalPage>
    );
}
