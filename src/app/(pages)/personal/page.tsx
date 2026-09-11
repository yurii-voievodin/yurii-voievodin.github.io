'use client';

import {
  Camera,
  Film,
  Gamepad2
} from '@/components/icons';
import { personalPhotos, movies, games } from '@/lib/personal-data';
import { useLightbox } from '@/hooks/useLightbox';
import Lightbox from '@/components/Lightbox';
import ImageCard from '@/components/ImageCard';
import SectionHeading from '@/components/ui/SectionHeading';

function TitleOverlay({ name }: { name: string }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-medium text-lg">{name}</h3>
      </div>
    </div>
  );
}

export default function PersonalPage() {
  const {
    selectedImage,
    isLoading,
    handleImageLoad,
    handleImageError,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
  } = useLightbox(personalPhotos.length);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-6">Personal</h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">Some things that interest me: photography, movies & series, and games</p>
        </div>

        {/* Photos Section */}
        <section className="mb-20">
          <SectionHeading size="lg" icon={<Camera size={32} />} className="mb-8">
            Some of my favorite photos
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalPhotos.map((photo, index) => (
              <ImageCard
                key={photo.name}
                src={photo.name}
                alt={photo.alt}
                isLoading={isLoading(photo.name)}
                onLoad={() => handleImageLoad(photo.name)}
                onError={() => handleImageError(photo.name)}
                onClick={() => openLightbox(index)}
                loadingIcon={<Camera className="text-zinc-500" size={24} />}
                className="hover:border-violet-500/30"
              />
            ))}
          </div>
        </section>

        {/* Movies Section */}
        <section className="mb-20">
          <SectionHeading size="lg" icon={<Film size={32} />} className="mb-8">
            Favorite movies and series
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <ImageCard
                key={movie.name}
                src={movie.image}
                alt={movie.alt}
                href={movie.url}
                isLoading={isLoading(movie.name)}
                onLoad={() => handleImageLoad(movie.name)}
                onError={() => handleImageError(movie.name)}
                loadingIcon={<Film className="text-zinc-500" size={24} />}
                overlay={<TitleOverlay name={movie.name} />}
                className="hover:border-violet-500/30"
              />
            ))}
          </div>
        </section>

        {/* Games Section */}
        <section className="mb-20">
          <SectionHeading size="lg" icon={<Gamepad2 size={32} />} className="mb-8">
            Favorite games
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <ImageCard
                key={game.name}
                src={game.image}
                alt={game.alt}
                href={game.url}
                isLoading={isLoading(game.name)}
                onLoad={() => handleImageLoad(game.name)}
                onError={() => handleImageError(game.name)}
                loadingIcon={<Gamepad2 className="text-zinc-500" size={24} />}
                overlay={<TitleOverlay name={game.name} />}
                className="hover:border-violet-500/30"
              />
            ))}
          </div>
        </section>
      </div>

      {selectedImage !== null && (
        <Lightbox
          images={personalPhotos.map(p => ({ src: p.name, alt: p.alt }))}
          selectedIndex={selectedImage}
          caption={personalPhotos[selectedImage].alt}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
}
