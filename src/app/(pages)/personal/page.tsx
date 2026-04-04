'use client';

import {
  Camera,
  Film,
  Gamepad2
} from 'lucide-react';
import { personalPhotos, movies, games } from '@/lib/personal-data';
import { useLightbox } from '@/hooks/useLightbox';
import Lightbox from '@/components/Lightbox';
import ImageCard from '@/components/ImageCard';

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
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 flex items-center">
            <Camera className="mr-3 text-violet-400" size={32} />
            Some of my favorite photos
          </h2>

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
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 flex items-center">
            <Film className="mr-3 text-violet-400" size={32} />
            Favorite movies and series
          </h2>

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
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 flex items-center">
            <Gamepad2 className="mr-3 text-violet-400" size={32} />
            Favorite games
          </h2>

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
