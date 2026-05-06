'use client';

import { Post } from '@/types/blog';
import { kyivPhotos } from '@/lib/kyiv-2025-data';
import PhotoGalleryPost from './PhotoGalleryPost';

interface KyivPostProps {
  post: Post;
}

export default function KyivPost({ post }: KyivPostProps) {
  return (
    <PhotoGalleryPost
      post={post}
      photos={kyivPhotos}
      heroImage="/kyiv-2025/hero.jpeg"
      heroAlt="Kyiv"
      heroTitle="Kyiv 2025"
      heroSubtitle="Kyiv in 2025"
      heroBorderColor="border-amber-500/20"
    />
  );
}
