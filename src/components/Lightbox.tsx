'use client';

import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  selectedIndex: number;
  caption?: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ images, selectedIndex, caption, onClose, onNext, onPrev }: LightboxProps) {
  const image = images[selectedIndex];

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-6xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-zinc-300 z-10"
        >
          <X size={32} />
        </button>

        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-zinc-300 bg-black/50 rounded-full p-2 backdrop-blur-sm z-10"
        >
          <ArrowLeft size={24} />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-zinc-300 bg-black/50 rounded-full p-2 backdrop-blur-sm z-10"
        >
          <ArrowRight size={24} />
        </button>

        <div className="relative max-h-[80vh] max-w-[90vw]">
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={800}
            className="object-contain max-h-[80vh] w-auto"
            priority
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h3 className="text-white font-medium mb-1">
            Photo {selectedIndex + 1} of {images.length}
          </h3>
          {caption && (
            <p className="text-zinc-300 text-sm">{caption}</p>
          )}
        </div>
      </div>
    </div>
  );
}
