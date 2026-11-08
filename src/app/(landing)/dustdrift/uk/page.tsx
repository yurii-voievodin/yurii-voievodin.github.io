import MovedPage, { movedMetadata } from '@/components/redirect/MovedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = movedMetadata('/wavefall/uk/');

export default function Moved() {
    return <MovedPage to="/wavefall/uk/" />;
}
