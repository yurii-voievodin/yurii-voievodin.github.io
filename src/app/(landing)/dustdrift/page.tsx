import DustDriftLanding from '@/components/dustdrift/DustDriftLanding';
import { buildDustDriftMetadata } from '@/lib/dustdrift-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = buildDustDriftMetadata('en');

export default function DustDriftPage() {
    return <DustDriftLanding locale="en" />;
}
