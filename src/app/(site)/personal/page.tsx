import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import PersonalContent from './PersonalContent';

export const metadata: Metadata = buildMetadata({
  title: 'Personal Interests - Yurii Voievodin',
  description:
    'Explore my personal interests: photography, favorite movies and series, and video games. A glimpse into what inspires me beyond coding.',
  path: '/personal',
});

export default function PersonalPage() {
  return <PersonalContent />;
}
