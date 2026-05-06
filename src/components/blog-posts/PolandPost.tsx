'use client';

import { Post } from '@/types/blog';
import { polandPhotos } from '@/lib/poland-2025-data';
import PhotoGalleryPost from './PhotoGalleryPost';

interface PolandPostProps {
  post: Post;
}

export default function PolandPost({ post }: PolandPostProps) {
  return (
    <PhotoGalleryPost
      post={post}
      photos={polandPhotos}
      heroImage="/poland-2025/01.jpeg"
      heroAlt="Poland landscape"
      heroTitle="Poland 2025"
      heroSubtitle="Half a year living in Poland"
      heroBorderColor="border-rose-500/20"
    />
  );
}
