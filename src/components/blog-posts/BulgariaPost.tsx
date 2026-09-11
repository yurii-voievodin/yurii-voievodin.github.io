'use client';

import { Post } from '@/types/blog';
import Panel from '@/components/ui/Panel';
import { bulgariaPhotos } from '@/lib/bulgaria-2026-data';
import PhotoGalleryPost from './PhotoGalleryPost';

interface BulgariaPostProps {
  post: Post;
}

export default function BulgariaPost({ post }: BulgariaPostProps) {
  return (
    <PhotoGalleryPost
      post={post}
      photos={bulgariaPhotos}
      heroImage="/bulgaria-2026/hero.jpeg"
      heroAlt="Bulgaria landscape"
      heroTitle="Bulgaria 2026"
      heroSubtitle="Black Sea coast, mountains, and ancient cities"
      heroBorderColor="border-emerald-500/20"
      introSection={
        <Panel radius="2xl" className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-zinc-100 mb-4">About This Journey</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            We visited Sofia and the Bansko ski resort in the mountains, walked along the seaside in Burgas, and made trips to Nessebar and Sunny Beach. All photos were taken on an iPhone 14 Pro.
          </p>
        </Panel>
      }
    />
  );
}
