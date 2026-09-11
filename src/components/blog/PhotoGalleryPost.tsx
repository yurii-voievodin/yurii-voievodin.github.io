'use client';

import { Calendar, ArrowRight, Camera } from '@/components/icons';
import { formatPostDate } from '@/lib/date';
import Image from 'next/image';
import type { GalleryPanel, PhotoGallery, Post } from '@/types/blog';
import { useLightbox } from '@/hooks/useLightbox';
import Lightbox from '@/components/Lightbox';
import BackLink from '@/components/ui/BackLink';
import Button from '@/components/ui/Button';
import Panel from '@/components/ui/Panel';
import SectionHeading from '@/components/ui/SectionHeading';
import Tag from '@/components/ui/Tag';
import ImageCard from '@/components/ImageCard';

function GalleryPanelCard({ panel, className = '' }: { panel: GalleryPanel; className?: string }) {
  return (
    <Panel radius="2xl" className={`p-8 ${panel.cta ? 'text-center' : ''} ${className}`}>
      <h2 className="text-2xl font-bold text-zinc-100 mb-4">{panel.heading}</h2>
      <p className="text-lg text-zinc-300 leading-relaxed">{panel.body}</p>
      {panel.note && <p className="mt-4 text-sm text-zinc-400">{panel.note}</p>}
      {panel.cta && (
        <div className="mt-6">
          <Button href={panel.cta.href}>
            {panel.cta.label}
            <ArrowRight size={16} />
          </Button>
        </div>
      )}
    </Panel>
  );
}

export default function PhotoGalleryPost({ post, gallery }: { post: Post; gallery: PhotoGallery }) {
  const { photos, hero, dateFormat = 'monthYear', intro, galleryHeading, outro } = gallery;
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
        <div className="mb-8">
          <BackLink href="/blog">Back to Blog</BackLink>
        </div>

        <div className="relative mb-12 overflow-hidden rounded-3xl border border-violet-500/20 shadow-2xl">
          <div className="absolute inset-0">
            <Image src={hero.image} alt={hero.alt} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
          </div>

          <div className="relative p-8 md:p-12 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              {hero.subtitle}
            </p>

            <div className="flex items-center justify-center space-x-6 text-white/90 mt-8 drop-shadow-md">
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{formatPostDate(post.date, dateFormat)}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Camera size={18} />
                <span>{photos.length} Photos</span>
              </div>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex justify-center flex-wrap gap-3 mt-6">
                {post.tags.map((tag) => (
                  <Tag key={tag} tone="onImage" size="md">
                    {tag}
                  </Tag>
                ))}
              </div>
            )}
          </div>
        </div>

        {intro && <GalleryPanelCard panel={intro} className="mb-12" />}

        <div className="mb-12">
          {galleryHeading && (
            <SectionHeading size="lg" icon={<Camera size={32} />} className="mb-8">
              {galleryHeading}
            </SectionHeading>
          )}

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

        {outro?.map((panel, i) => (
          <GalleryPanelCard key={panel.heading} panel={panel} className={i > 0 ? 'mt-8' : ''} />
        ))}
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
