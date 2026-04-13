import PhotoCarousel from '@/components/PhotoCarousel';

interface WidePhotoCarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  className?: string;
}

export default function WidePhotoCarousel({ images, className = '' }: WidePhotoCarouselProps) {
  return (
    <PhotoCarousel
      images={images}
      className={className}
      aspectRatio="aspect-[16/10]"
      enableLightbox
    />
  );
}
