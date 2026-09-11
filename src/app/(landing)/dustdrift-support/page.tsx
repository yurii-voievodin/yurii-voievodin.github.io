import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import InlineLink from '@/components/ui/InlineLink';
import LegalPage, { Faq, LegalSection } from '@/components/landing/LegalPage';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
    title: 'DustDrift — Support',
    description:
        'Support for DustDrift, a top-down exploration and survival game for iPhone, iPad, and Mac. Contact us for bug reports, questions, or feedback.',
    path: '/dustdrift-support',
});

export default function DustDriftSupportPage() {
    return (
        <LegalPage app="DustDrift" appHref="/dustdrift" kind="Support">
            <LegalSection heading="About DustDrift">
                <p>
                    DustDrift is a 2D top-down exploration and survival game: you play an astronaut exploring a procedurally generated alien surface, mining resources from destructible rocks, crafting gear, and fighting hostile robots with a blaster, heavy rifle, gravity gun, or cutter, while traveling between biomes — desert, ice, water, and shardlands — via portals. It runs natively on iPhone, iPad, and Mac. DustDrift is single-player and fully offline, with no account or login required.
                </p>
            </LegalSection>

            <LegalSection heading="Contact Us">
                <p className="mb-3">
                    Found a bug, have a question, or want to share feedback? Email us directly and we&apos;ll get back to you:
                </p>
                <Button href="mailto:yurii.voievodin@icloud.com?subject=DustDrift%20Support" external>
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
                            answer: 'DustDrift runs natively on iPhone, iPad, and Mac.',
                        },
                        {
                            question: 'Is there a way to reset my progress?',
                            answer: (
                                <>
                                    Yes — DustDrift stores all progress locally on your device. If you&apos;d like to start over, email us at{' '}
                                    <InlineLink href="mailto:yurii.voievodin@icloud.com">
                                        yurii.voievodin@icloud.com
                                    </InlineLink>{' '}
                                    and we&apos;ll walk you through it.
                                </>
                            ),
                        },
                        {
                            question: 'I found a bug — what should I include in my report?',
                            answer: 'Please include your device model, iOS/iPadOS/macOS version, what you were doing when the issue occurred, and a screenshot or screen recording if possible. This helps us reproduce and fix the issue faster.',
                        },
                        {
                            question: 'Does DustDrift require an internet connection or an account?',
                            answer: 'No. DustDrift is fully offline and single-player, with no account or login needed.',
                        },
                    ]}
                />
            </LegalSection>
        </LegalPage>
    );
}
