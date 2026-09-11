import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import LegalPage, { Faq, LegalSection } from '@/components/landing/LegalPage';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
    title: 'Head Recorder — Support',
    description:
        'Support for Head Recorder, a macOS app that records your screen and webcam together as one video. Contact us for bug reports, questions, or feedback.',
    path: '/headrecorder-support',
});

export default function HeadRecorderSupportPage() {
    return (
        <LegalPage app="Head Recorder" appHref="/headrecorder" kind="Support">
            <LegalSection heading="About Head Recorder">
                <p>
                    Head Recorder is a macOS app that records your screen and your webcam at the same time, then composites them into a single video with your camera shown as a bubble in the corner — circle or rectangle, resized and mirrored the way you like. Recording and processing happen entirely on your Mac.
                </p>
            </LegalSection>

            <LegalSection heading="Contact Us">
                <p className="mb-3">
                    Found a bug, have a question, or want to share feedback? Email us directly and we&apos;ll get back to you:
                </p>
                <Button href="mailto:yurii.voievodin@icloud.com?subject=Head%20Recorder%20Support" external>
                    yurii.voievodin@icloud.com
                </Button>
                <p className="mt-3 text-sm text-zinc-400">
                    We monitor this inbox and respond to every bug report, question, and piece of feedback.
                </p>
            </LegalSection>

            <LegalSection heading="Frequently Asked Questions">
                <Faq
                    items={[
                        {
                            question: 'Which platforms does it support?',
                            answer: 'Head Recorder runs natively on macOS (13.0 or later).',
                        },
                        {
                            question: 'Where does my recording go after I stop?',
                            answer: 'Head Recorder composites your screen and camera into a single .mov file locally on your Mac, ready to save or share wherever you like.',
                        },
                        {
                            question: 'Does it require an internet connection or an account?',
                            answer: 'No. Head Recorder works fully offline, with no account or login needed.',
                        },
                        {
                            question: 'I found a bug — what should I include in my report?',
                            answer: 'Please include your Mac model, macOS version, what you were doing when the issue occurred, and a screenshot or screen recording if possible. This helps us reproduce and fix the issue faster.',
                        },
                    ]}
                />
            </LegalSection>
        </LegalPage>
    );
}
