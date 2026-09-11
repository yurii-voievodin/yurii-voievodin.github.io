'use client';

import { Post } from '@/types/blog';
import Panel from '@/components/ui/Panel';
import { norwayPhotos } from '@/lib/norway-2025-data';
import PhotoGalleryPost from './PhotoGalleryPost';

interface NorwayPostProps {
  post: Post;
}

export default function NorwayPost({ post }: NorwayPostProps) {
  return (
    <PhotoGalleryPost
      post={post}
      photos={norwayPhotos}
      heroImage="/norway-2025/IMG_7207.jpeg"
      heroAlt="Norway landscape"
      heroTitle="Norway 2025"
      heroSubtitle="A photographic journey through the stunning landscapes of Norway"
      heroBorderColor="border-blue-500/20"
      introSection={
        <Panel radius="2xl" className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-zinc-100 mb-4">About This Journey</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            This collection captures the breathtaking beauty of Norway during my 2025 adventure. From dramatic fjords to mountains, each photograph tells a story of exploration and wonder. It&apos;s the most impressive country and nature I&apos;ve ever seen so far.
          </p>
        </Panel>
      }
    />
  );
}
