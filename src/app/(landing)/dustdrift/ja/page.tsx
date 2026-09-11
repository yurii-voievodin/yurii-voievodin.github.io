import DustDriftLanding from '@/components/dustdrift/DustDriftLanding';
import { buildDustDriftMetadata } from '@/lib/dustdrift-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = buildDustDriftMetadata('ja');

export default function DustDriftJaPage() {
    return <DustDriftLanding locale="ja" />;
}
