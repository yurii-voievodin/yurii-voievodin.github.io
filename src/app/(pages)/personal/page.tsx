'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Camera, 
  Maximize2, 
  X, 
  ArrowLeft,
  ArrowRight,
  Film,
  Gamepad2
} from 'lucide-react';
import { personalPhotos, movies, games } from '@/lib/personal-data';

export default function PersonalPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoading, setImageLoading] = useState<{ [key: string]: boolean }>({});

  const handleImageLoad = (imageName: string) => {
    setImageLoading(prev => ({ ...prev, [imageName]: false }));
  };

  const handleImageError = (imageName: string) => {
    setImageLoading(prev => ({ ...prev, [imageName]: false }));
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % personalPhotos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? personalPhotos.length - 1 : selectedImage - 1);
    }
  };

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
              <div 
                key={photo.name}
                className="group relative bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg border border-zinc-700/50 hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {imageLoading[photo.name] !== false && (
                    <div className="absolute inset-0 bg-zinc-700/50 animate-pulse flex items-center justify-center">
                      <Camera className="text-zinc-500" size={24} />
                    </div>
                  )}
                  <Image
                    src={photo.name}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onLoad={() => handleImageLoad(photo.name)}
                    onError={() => handleImageError(photo.name)}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openLightbox(index)}
                      className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30"
                    >
                      <Maximize2 className="text-white" size={20} />
                    </button>
                  </div>
                </div>
              </div>
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
              <a
                key={movie.name}
                href={movie.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg border border-zinc-700/50 hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {imageLoading[movie.name] !== false && (
                    <div className="absolute inset-0 bg-zinc-700/50 animate-pulse flex items-center justify-center">
                      <Film className="text-zinc-500" size={24} />
                    </div>
                  )}
                  <Image
                    src={movie.image}
                    alt={movie.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onLoad={() => handleImageLoad(movie.name)}
                    onError={() => handleImageError(movie.name)}
                  />
                  
                  {/* Overlay with name */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-medium text-lg">{movie.name}</h3>
                    </div>
                  </div>
                </div>
              </a>
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
              <a
                key={game.name}
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-zinc-800/50 rounded-2xl overflow-hidden shadow-lg border border-zinc-700/50 hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {imageLoading[game.name] !== false && (
                    <div className="absolute inset-0 bg-zinc-700/50 animate-pulse flex items-center justify-center">
                      <Gamepad2 className="text-zinc-500" size={24} />
                    </div>
                  )}
                  <Image
                    src={game.image}
                    alt={game.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onLoad={() => handleImageLoad(game.name)}
                    onError={() => handleImageError(game.name)}
                  />
                  
                  {/* Overlay with name */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-medium text-lg">{game.name}</h3>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-zinc-300 z-10"
            >
              <X size={32} />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-zinc-300 bg-black/50 rounded-full p-2 backdrop-blur-sm z-10"
            >
              <ArrowLeft size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-zinc-300 bg-black/50 rounded-full p-2 backdrop-blur-sm z-10"
            >
              <ArrowRight size={24} />
            </button>
            
            {/* Image */}
            <div className="relative max-h-[80vh] max-w-[90vw]">
              <Image
                src={personalPhotos[selectedImage].name}
                alt={personalPhotos[selectedImage].alt}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-auto"
                priority
              />
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white font-medium mb-1">
                Photo {selectedImage + 1} of {personalPhotos.length}
              </h3>
              <p className="text-zinc-300 text-sm">
                {personalPhotos[selectedImage].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}