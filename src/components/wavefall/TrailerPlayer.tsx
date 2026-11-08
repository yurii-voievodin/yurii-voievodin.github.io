'use client';

import { useState } from 'react';
import { Play } from '@/components/icons';

export interface TrailerVariant {
  id: string;
  label: string;
  src: string;
  poster: string;
  aspect: string;
}

interface TrailerPlayerProps {
  variants: TrailerVariant[];
  ariaLabel: string;
  alt: string;
}

export default function TrailerPlayer({ variants, ariaLabel, alt }: TrailerPlayerProps) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const { src, poster, aspect } = variants[index];

  const select = (i: number) => {
    setIndex(i);
    setPlaying(false);
  };

  return (
    <div>
      {variants.length > 1 && (
        <div className="flex gap-2 mb-3" role="tablist">
          {variants.map((variant, i) => (
            <button
              key={variant.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => select(i)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                i === index
                  ? 'bg-violet-500/20 text-violet-200 border-violet-500/60'
                  : 'text-zinc-400 border-zinc-700 hover:text-zinc-200'
              }`}
            >
              {variant.label}
            </button>
          ))}
        </div>
      )}
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-zinc-900 border border-zinc-700/50"
        style={{ aspectRatio: aspect }}
      >
        {playing ? (
          <video
            key={src}
            src={src}
            poster={poster}
            className="absolute inset-0 w-full h-full object-contain"
            controls
            autoPlay
            playsInline
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full"
            aria-label={ariaLabel}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poster}
              alt={alt}
              className="absolute inset-0 w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
