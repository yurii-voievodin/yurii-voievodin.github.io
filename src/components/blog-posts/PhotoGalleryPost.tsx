'use client';

import { Calendar, ArrowLeft, Camera, Image as ImageIcon, Maximize2, X } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';
import { Post, Photo } from '@/types/blog';
import { ReactNode } from 'react';
import { useLightbox } from '@/hooks/useLightbox';

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
              <div
                key={image.id}
                className="group relative bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg border border-zinc-700/50 hover:transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {isLoading(image.id) && (
                    <div className="absolute inset-0 bg-zinc-700/50 animate-pulse flex items-center justify-center">
                      <ImageIcon className="text-zinc-500" size={24} />
                    </div>
                  )}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    onLoad={() => handleImageLoad(image.id)}
                    onError={() => handleImageError(image.id)}
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openLightbox(index)}
                      className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30"
                    >
                      <Maximize2 className="text-white" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {afterGallery}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-zinc-300 z-10"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-zinc-300 bg-black/50 rounded-full p-2 backdrop-blur-sm z-10"
            >
              <ArrowLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-zinc-300 bg-black/50 rounded-full p-2 backdrop-blur-sm z-10"
            >
              <ArrowLeft size={24} className="rotate-180" />
            </button>

            <div className="relative max-h-[80vh] max-w-[90vw]">
              <Image
                src={photos[selectedImage].src}
                alt={photos[selectedImage].alt}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-auto"
                priority
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white font-medium mb-1">
                Photo {selectedImage + 1} of {photos.length}
              </h3>
              <p className="text-zinc-300 text-sm">
                {photos[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
