import WavefallLanding from '@/components/wavefall/WavefallLanding';
import { buildWavefallMetadata } from '@/lib/wavefall-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = buildWavefallMetadata('en');

export default function WavefallPage() {
    return <WavefallLanding locale="en" />;
}
