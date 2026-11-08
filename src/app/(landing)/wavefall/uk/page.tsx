import WavefallLanding from '@/components/wavefall/WavefallLanding';
import { buildWavefallMetadata } from '@/lib/wavefall-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = buildWavefallMetadata('uk');

export default function WavefallUkPage() {
    return <WavefallLanding locale="uk" />;
}
