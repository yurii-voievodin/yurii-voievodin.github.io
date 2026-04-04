'use client';

import { Camera, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Post } from '@/types/blog';
import { landRoverPhotos } from '@/lib/land-rover-data';
import PhotoGalleryPost from './PhotoGalleryPost';

interface LandRoverPostProps {
  post: Post;
}

export default function LandRoverPost({ post }: LandRoverPostProps) {
  return (
    <PhotoGalleryPost
      post={post}
      photos={landRoverPhotos}
      heroImage="/land_rover/mountain.jpg"
      heroAlt="Mountain landscape road"
      heroTitle="Land Rover Discovery Sport 2017"
      heroSubtitle="A collection of adventure photos with my Land Rover"
      heroBorderColor="border-green-500/20"
      dateFormat="MMMM dd, yyyy"
      introSection={
        <div className="bg-zinc-800/50 rounded-2xl p-8 shadow-lg border border-zinc-700/50 mb-12">
          <h2 className="text-2xl font-bold text-zinc-100 mb-4">About This Collection</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            These photos showcase my Land Rover Discovery Sport 2017 in various situations and locations.
            Each image captures a moment from different adventures and experiences throughout 2024-2025.
            From city streets to off-road terrain, this collection represents the versatility and character of this remarkable vehicle.
          </p>
        </div>
      }
      galleryHeading={
        <h2 className="text-3xl font-bold text-zinc-100 mb-8 flex items-center">
          <Camera className="mr-3 text-green-400" size={32} />
          Photo Gallery
        </h2>
      }
      afterGallery={
        <>
          <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-zinc-100 mb-4">
              The Adventure Continues
            </h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              The Land Rover Discovery Sport has been my trusted companion through various adventures and daily journeys.
              These photos represent not just moments in time, but memories of exploration, reliability, and the joy of driving.
              From urban environments to more challenging terrains, this vehicle has consistently delivered performance and comfort.
            </p>
            <p className="text-zinc-400 text-sm">
              The photos were taken in different situations and locations in 2024-2025.
            </p>
          </div>

          <div className="mt-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">More Stories to Tell</h3>
            <p className="text-violet-100 mb-6">
              Interested in more adventures and tech insights? Check out my other blog posts!
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-medium transition-colors backdrop-blur-sm"
            >
              Explore More Posts
              <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Link>
          </div>
        </>
      }
    />
  );
}
