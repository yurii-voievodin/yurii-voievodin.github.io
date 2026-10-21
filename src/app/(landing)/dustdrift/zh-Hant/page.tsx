import DustDriftLanding from '@/components/dustdrift/DustDriftLanding';
import { buildDustDriftMetadata } from '@/lib/dustdrift-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = buildDustDriftMetadata('zh-Hant');

export default function DustDriftZhHantPage() {
    return <DustDriftLanding locale="zh-Hant" />;
}
