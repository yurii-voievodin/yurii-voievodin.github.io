'use client';

import { Post } from '@/types/blog';
import { austriaPhotos } from '@/lib/austria-2025-data';
import PhotoGalleryPost from './PhotoGalleryPost';

interface AustriaPostProps {
  post: Post;
}

export default function AustriaPost({ post }: AustriaPostProps) {
  return (
    <PhotoGalleryPost
      post={post}
      photos={austriaPhotos}
      heroImage="/austria-2025/IMG_6445.jpeg"
      heroAlt="Austria landscape"
      heroTitle="Austria 2025"
      heroSubtitle="A journey through Austria's Alpine landscapes and historic Vienna"
      heroBorderColor="border-red-500/20"
    />
  );
}
