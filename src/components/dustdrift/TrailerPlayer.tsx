'use client';

import { useState } from 'react';
import { Play } from '@/components/icons';

interface TrailerPlayerProps {
  ariaLabel?: string;
  alt?: string;
}

export default function TrailerPlayer({
  ariaLabel = 'Play DustDrift gameplay trailer',
  alt = 'DustDrift gameplay — the astronaut beside the docked space shuttle',
}: TrailerPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-[2326/1836] overflow-hidden rounded-2xl shadow-lg bg-zinc-900 border border-zinc-700/50">
      {playing ? (
        <video
          src="/dustdrift/trailer.mp4"
          poster="/dustdrift/trailer-poster.jpg"
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
            src="/dustdrift/trailer-poster.jpg"
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
  );
}
