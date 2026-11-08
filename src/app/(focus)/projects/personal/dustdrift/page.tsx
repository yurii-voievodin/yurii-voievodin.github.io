import MovedPage, { movedMetadata } from '@/components/redirect/MovedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = movedMetadata('/projects/personal/wavefall/');

export default function Moved() {
    return <MovedPage to="/projects/personal/wavefall/" />;
}
