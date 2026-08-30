import DustDriftLanding from '@/components/dustdrift/DustDriftLanding';
import { buildDustDriftMetadata } from '@/lib/dustdrift-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = buildDustDriftMetadata('ko');

export default function DustDriftKoPage() {
    return <DustDriftLanding locale="ko" />;
}
