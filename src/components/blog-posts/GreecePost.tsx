'use client';

import { Post } from '@/types/blog';
import Panel from '@/components/ui/Panel';
import { greecePhotos } from '@/lib/greece-2026-data';
import PhotoGalleryPost from './PhotoGalleryPost';

interface GreecePostProps {
  post: Post;
}

export default function GreecePost({ post }: GreecePostProps) {
  return (
    <PhotoGalleryPost
      post={post}
      photos={greecePhotos}
      heroImage="/greece-2026/hero.jpeg"
      heroAlt="Meteora monasteries on the cliffs"
      heroTitle="Greece 2026"
      heroSubtitle="Two summer road trips — camping by turquoise coves and the monasteries of Meteora"
      heroBorderColor="border-cyan-500/20"
      introSection={
        <Panel radius="2xl" className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-zinc-100 mb-4">About This Journey</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Two trips to Greece this summer — driving over by car ferry, camping along the coast, swimming in turquoise coves, and a climb up to the monasteries of Meteora. All photos taken on an iPhone.
          </p>
        </Panel>
      }
    />
  );
}
