'use client';

import { Calendar, Clock, ArrowLeft, Camera, Image as ImageIcon, Maximize2, X } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/blog';
import { useState } from 'react';
import { norwayPhotos } from '@/lib/norway-2025-data';

interface NorwayPostProps {
  post: Post;
}

export default function NorwayPost({ post }: NorwayPostProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>({});

  const images = norwayPhotos;

  const handleImageLoad = (imageId: number) => {
    setImageLoading(prev => ({ ...prev, [imageId]: false }));
  };

  const handleImageError = (imageId: number) => {
    setImageLoading(prev => ({ ...prev, [imageId]: false }));
  };

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId - 1);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

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
        <div className="relative rounded-3xl shadow-2xl overflow-hidden mb-12 border border-blue-500/20">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/norway-2025/IMG_7207.jpeg"
              alt="Norway landscape"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30"></div>
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-12 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Norway 2025 Adventure
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              A photographic journey through the stunning landscapes of Norway
            </p>

            <div className="flex items-center justify-center space-x-6 text-white/90 mt-8 drop-shadow-md">
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{format(new Date(post.date), 'MMMM, yyyy')}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Camera size={18} />
                <span>{images.length} Photos</span>
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

        {/* Introduction */}
        <div className="bg-zinc-800/50 rounded-2xl p-8 shadow-lg border border-zinc-700/50 mb-12">
          <h2 className="text-2xl font-bold text-zinc-100 mb-4">About This Journey</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            This collection captures the breathtaking beauty of Norway during my 2025 adventure.
            From dramatic fjords to snow-capped mountains, each photograph tells a story of exploration
            and wonder in one of the world's most spectacular countries. Experience the raw natural beauty,
            unique Nordic culture, and unforgettable moments from this incredible journey.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg border border-zinc-700/50 hover:transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {imageLoading[image.id] !== false && (
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

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openLightbox(image.id)}
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

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-zinc-100 mb-4">
            Land of the Midnight Sun
          </h3>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Norway's diverse landscapes offer some of the most stunning natural scenery on Earth.
            From the dramatic coastlines of the fjords to the pristine wilderness of the interior,
            this Nordic country showcases nature at its most magnificent. These photographs capture
            the essence of Norwegian beauty - the interplay of light and shadow, the grandeur of
            untouched wilderness, and the unique character that makes Norway truly special.
          </p>
          <p className="text-zinc-400 text-sm">
            Photography captured during the 2025 Norway expedition.
          </p>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">More Adventures Await</h3>
          <p className="text-violet-100 mb-6">
            Discover more travel stories, adventures, and insights from my journeys around the world!
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-medium transition-colors backdrop-blur-sm"
          >
            Explore More Posts
            <ArrowLeft className="ml-2 rotate-180" size={16} />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-zinc-300 z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
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

            {/* Image */}
            <div className="relative max-h-[80vh] max-w-[90vw]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-auto"
                priority
              />
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white font-medium mb-1">
                Photo {selectedImage + 1} of {images.length}
              </h3>
              <p className="text-zinc-300 text-sm">
                {images[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}