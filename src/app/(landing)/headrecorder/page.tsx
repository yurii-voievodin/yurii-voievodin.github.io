import type { Metadata } from 'next';
import {
    Monitor,
    Video,
    Move,
    FlipHorizontal2,
    Mic,
    ShieldCheck,
} from '@/components/icons';
import AppLanding, { type LandingCard } from '@/components/landing/AppLanding';
import { headrecorderScreenshots } from '@/lib/headrecorder-images';
import { buildMetadata } from '@/lib/metadata';

const title = 'Head Recorder — Screen + Webcam, Recorded Together';
const description =
    'Record your screen and webcam together in one take. Head Recorder composites your camera as a customizable bubble over your screen recording — resize it, move it to any corner, mirror it, pick circle or rectangle — and saves a single video, entirely on your Mac.';

export const metadata: Metadata = buildMetadata({
    title,
    description,
    path: '/headrecorder',
    image: '/headrecorder/screenshots/mac-screen-webcam.png',
});

const features: LandingCard[] = [
    {
        icon: Monitor,
        title: 'Screen + Webcam, One Take',
        body: 'Record your display and your camera at the same time — Head Recorder composites them into a single video as you go.',
    },
    {
        icon: Move,
        title: 'Camera Bubble, Your Way',
        body: 'Drop the camera bubble in any corner and resize it to fit your recording.',
    },
    {
        icon: Video,
        title: 'Circle or Rectangle',
        body: 'Switch the camera bubble between a circle or rectangle to match your style.',
    },
    {
        icon: FlipHorizontal2,
        title: 'Mirror Your Camera',
        body: 'Mirror the camera feed so it looks natural in the frame, on or off with one toggle.',
    },
    {
        icon: Mic,
        title: 'Pick Your Sources',
        body: 'Choose which display, camera, and microphone to record from — or record with no microphone at all.',
    },
    {
        icon: ShieldCheck,
        title: 'Private by Design',
        body: 'No accounts, no servers — recording and processing happen entirely on your Mac.',
    },
];

export default function HeadRecorderPage() {
    return (
        <AppLanding
            name="Head Recorder"
            icon="/headrecorder/icon.png"
            tagline="Screen + Webcam, Recorded Together"
            description="Record your screen and your webcam at the same time, composited into a single video with your camera shown as a bubble — resized, repositioned, and mirrored the way you like. Recording and processing happen entirely on your Mac."
            appStore={{
                href: 'https://apps.apple.com/us/app/head-recorder-screen-webcam/id6796696067',
                badge: '/headrecorder/mac-app-store-badge.svg',
                ariaLabel: 'Download Head Recorder on the Mac App Store',
                alt: 'Download on the Mac App Store',
            }}
            ctaNote="Available now on the Mac App Store"
            sections={[
                { kind: 'screenshots', heading: 'Screenshots', images: headrecorderScreenshots },
                { kind: 'cards', heading: 'Key Features', cards: features },
            ]}
            footer={{
                heading: 'Get Head Recorder',
                body: 'Available now on the Mac App Store.',
                links: [
                    { label: 'Support', href: '/headrecorder-support' },
                    { label: 'Privacy Policy', href: '/headrecorder-privacy' },
                ],
            }}
        />
    );
}
