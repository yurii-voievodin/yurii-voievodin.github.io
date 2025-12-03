'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoCarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  className?: string;
}

export default function PhotoCarousel({ images, className = '' }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Touch handlers for swipe navigation
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative w-full ${className}`}>
      {/* Image Container */}
      <div
        className="relative w-full aspect-[1/2] overflow-hidden rounded-2xl shadow-lg bg-zinc-900"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-contain transition-opacity duration-300"
          priority={currentIndex === 0}
        />
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/40 shadow-lg group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/40 shadow-lg group"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
            <span className="text-white text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
