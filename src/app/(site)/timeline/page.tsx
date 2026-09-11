import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import TimelineContent from './TimelineContent';

export const metadata: Metadata = buildMetadata({
  title: 'Professional Timeline - Yurii Voievodin',
  description:
    'A chronological journey through my professional career, key milestones, and notable achievements in software development.',
  path: '/timeline',
});

export default function TimelinePage() {
  return <TimelineContent />;
}
