'use client';

import { Calendar, ArrowLeft, Camera } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';
import { Post, Photo } from '@/types/blog';
import { ReactNode } from 'react';
import { useLightbox } from '@/hooks/useLightbox';
import Lightbox from '@/components/Lightbox';
import ImageCard from '@/components/ImageCard';

interface PhotoGalleryPostProps {
  post: Post;
  photos: Photo[];
  heroImage: string;
  heroAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBorderColor?: string;
  dateFormat?: string;
  galleryHeading?: ReactNode;
  introSection?: ReactNode;
  afterGallery?: ReactNode;
}

export default function PhotoGalleryPost({
  post,
  photos,
  heroImage,
  heroAlt,
  heroTitle,
  heroSubtitle,
  heroBorderColor = 'border-violet-500/20',
  dateFormat = 'MMMM, yyyy',
  galleryHeading,
  introSection,
  afterGallery,
}: PhotoGalleryPostProps) {
  const {
    selectedImage,
    isLoading,
    handleImageLoad,
    handleImageError,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
  } = useLightbox(photos.length);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-purple-300 mb-6 transition-all font-medium"
          >
            <ArrowLeft className="mr-2 text-violet-400 hover:text-violet-300 transition-colors" size={16} />
            Back to Blog
          </Link>
        </div>

        {/* Hero Section */}
        <div className={`relative rounded-3xl shadow-2xl overflow-hidden mb-12 border ${heroBorderColor}`}>
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30"></div>
          </div>

          <div className="relative p-8 md:p-12 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              {heroTitle}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              {heroSubtitle}
            </p>

            <div className="flex items-center justify-center space-x-6 text-white/90 mt-8 drop-shadow-md">
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{format(new Date(post.date), dateFormat)}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Camera size={18} />
                <span>{photos.length} Photos</span>
              </div>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex justify-center flex-wrap gap-3 mt-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/30 text-white text-sm rounded-full border border-white/40 backdrop-blur-sm drop-shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {introSection}

        {/* Photo Gallery */}
        <div className="mb-12">
          {galleryHeading}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photos.map((image, index) => (
              <ImageCard
                key={image.id}
                src={image.src}
                alt={image.alt}
                isLoading={isLoading(image.id)}
                onLoad={() => handleImageLoad(image.id)}
                onError={() => handleImageError(image.id)}
                onClick={() => openLightbox(index)}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            ))}
          </div>
        </div>

        {afterGallery}
      </div>

      {selectedImage !== null && (
        <Lightbox
          images={photos}
          selectedIndex={selectedImage}
          caption={photos[selectedImage].description}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
}
