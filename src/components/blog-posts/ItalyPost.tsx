'use client';

import { Post } from '@/types/blog';
import { italyPhotos } from '@/lib/italy-2025-data';
import PhotoGalleryPost from './PhotoGalleryPost';

interface ItalyPostProps {
  post: Post;
}

export default function ItalyPost({ post }: ItalyPostProps) {
  return (
    <PhotoGalleryPost
      post={post}
      photos={italyPhotos}
      heroImage="/italy-2025/IMG_3420.jpeg"
      heroAlt="Italy landscape"
      heroTitle="Italy 2025"
      heroSubtitle="A cultural and visual journey through the heart of Italy"
      heroBorderColor="border-orange-500/20"
    />
  );
}
