import WavefallLanding from '@/components/wavefall/WavefallLanding';
import { buildWavefallMetadata } from '@/lib/wavefall-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = buildWavefallMetadata('zh-Hant');

export default function WavefallZhHantPage() {
    return <WavefallLanding locale="zh-Hant" />;
}
