'use client';

import { useEffect, useRef } from 'react';
import { X, ArrowLeft, ArrowRight } from '@/components/icons';
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

const CONTROL =
  'p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm text-white transition-colors';

export default function Lightbox({ images, selectedIndex, caption, onClose, onNext, onPrev }: LightboxProps) {
  const image = images[selectedIndex];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'ArrowLeft') {
        onPrev();
        return;
      }
      if (e.key === 'ArrowRight') {
        onNext();
        return;
      }
      if (e.key !== 'Tab') return;

      // Keep Tab inside the dialog — the page behind it is hidden by the backdrop.
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    >
      <div className="relative max-w-6xl max-h-full">
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close image viewer"
          className={`absolute -top-14 right-0 z-10 ${CONTROL}`}
        >
          <X size={20} />
        </button>

        <button
          onClick={onPrev}
          aria-label="Previous image"
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 ${CONTROL}`}
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={onNext}
          aria-label="Next image"
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 ${CONTROL}`}
        >
          <ArrowRight size={20} />
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
          <p className="text-white font-medium mb-1" aria-live="polite">
            Photo {selectedIndex + 1} of {images.length}
          </p>
          {caption && <p className="text-zinc-300 text-sm">{caption}</p>}
        </div>
      </div>
    </div>
  );
}
