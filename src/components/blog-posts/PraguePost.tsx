'use client';

import { Post } from '@/types/blog';
import { praguePhotos } from '@/lib/prague-2025-data';
import PhotoGalleryPost from './PhotoGalleryPost';

interface PraguePostProps {
  post: Post;
}

export default function PraguePost({ post }: PraguePostProps) {
  return (
    <PhotoGalleryPost
      post={post}
      photos={praguePhotos}
      heroImage="/prague-2025/01.jpeg"
      heroAlt="Prague"
      heroTitle="Prague 2025"
      heroSubtitle="A few trips to Prague in 2025"
      heroBorderColor="border-sky-500/20"
    />
  );
}
