import DustDriftLanding from '@/components/dustdrift/DustDriftLanding';
import { buildDustDriftMetadata } from '@/lib/dustdrift-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = buildDustDriftMetadata('uk');

export default function DustDriftUkPage() {
    return <DustDriftLanding locale="uk" />;
}
