'use client';

import { Post } from '@/types/blog';
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
    />
  );
}
