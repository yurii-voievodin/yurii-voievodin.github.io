'use client';

import { useState, useCallback } from 'react';

export function useLightbox(totalImages: number) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoading, setImageLoading] = useState<{ [key: string]: boolean }>({});

  const handleImageLoad = useCallback((key: string | number) => {
    setImageLoading(prev => ({ ...prev, [key]: false }));
  }, []);

  const handleImageError = useCallback((key: string | number) => {
    setImageLoading(prev => ({ ...prev, [key]: false }));
  }, []);

  const openLightbox = useCallback((index: number) => {
    setSelectedImage(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    setSelectedImage(prev => prev !== null ? (prev + 1) % totalImages : null);
  }, [totalImages]);

  const prevImage = useCallback(() => {
    setSelectedImage(prev => prev !== null ? (prev === 0 ? totalImages - 1 : prev - 1) : null);
  }, [totalImages]);

  const isLoading = useCallback((key: string | number) => {
    return imageLoading[key] !== false;
  }, [imageLoading]);

  return {
    selectedImage,
    isLoading,
    handleImageLoad,
    handleImageError,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
  };
}
