'use client';

import Image from 'next/image';
import { Image as ImageIcon, Maximize2 } from 'lucide-react';
import { ReactNode, ElementType } from 'react';

interface ImageCardProps {
  src: string;
  alt: string;
  isLoading: boolean;
  onLoad: () => void;
  onError: () => void;
  onClick?: () => void;
  loadingIcon?: ReactNode;
  overlay?: ReactNode;
  href?: string;
  sizes?: string;
  className?: string;
}

export default function ImageCard({
  src,
  alt,
  isLoading,
  onLoad,
  onError,
  onClick,
  loadingIcon,
  overlay,
  href,
  sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
  className = '',
}: ImageCardProps) {
  const Wrapper: ElementType = href ? 'a' : 'div';
  const wrapperProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg border border-zinc-700/50 transition-all duration-300 ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-zinc-700/50 animate-pulse flex items-center justify-center">
            {loadingIcon || <ImageIcon className="text-zinc-500" size={24} />}
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes={sizes}
          onLoad={onLoad}
          onError={onError}
        />

        {overlay || (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
            <button
              onClick={onClick}
              className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30"
            >
              <Maximize2 className="text-white" size={20} />
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
}
