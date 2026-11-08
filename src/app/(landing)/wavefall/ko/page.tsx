import WavefallLanding from '@/components/wavefall/WavefallLanding';
import { buildWavefallMetadata } from '@/lib/wavefall-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = buildWavefallMetadata('ko');

export default function WavefallKoPage() {
    return <WavefallLanding locale="ko" />;
}
