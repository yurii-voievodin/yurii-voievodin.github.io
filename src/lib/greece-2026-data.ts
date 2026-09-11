import type { Photo, Post } from '@/types/blog';

export const greecePhotos: Photo[] = [
  { id: 1, src: '/greece-2026/01.jpeg', alt: 'Greece 2026 Trip - Photo 1', description: "Crossing over by car ferry, the ship's ancient trireme emblem watching over the deck" },
  { id: 2, src: '/greece-2026/02.jpeg', alt: 'Greece 2026 Trip - Photo 2', description: 'Blue hour in a small harbor town, lights spilling across the water' },
  { id: 3, src: '/greece-2026/03.jpeg', alt: 'Greece 2026 Trip - Photo 3', description: 'Parked in the shade of the pines above a turquoise cove' },
  { id: 4, src: '/greece-2026/04.jpeg', alt: 'Greece 2026 Trip - Photo 4', description: "Camp dinner on the Campingaz after a long day of driving" },
  { id: 5, src: '/greece-2026/05.jpeg', alt: 'Greece 2026 Trip - Photo 5', description: 'Some of the clearest water I have ever swum in' },
  { id: 6, src: '/greece-2026/06.jpeg', alt: 'Greece 2026 Trip - Photo 6', description: 'Working from the camp table as the sun drops through the pines' },
  { id: 7, src: '/greece-2026/07.jpeg', alt: 'Greece 2026 Trip - Photo 7', description: 'The car tucked away on a rocky headland above the sea' },
  { id: 8, src: '/greece-2026/08.jpeg', alt: 'Greece 2026 Trip - Photo 8', description: 'At Meteora, with the monasteries perched on the cliffs behind' },
  { id: 9, src: '/greece-2026/09.jpeg', alt: 'Greece 2026 Trip - Photo 9', description: 'Paddleboarding across a quiet turquoise bay' },
  { id: 10, src: '/greece-2026/10.jpeg', alt: 'Greece 2026 Trip - Photo 10', description: 'A stone cairn on the rocks, a sailboat anchored in the bay' },
  { id: 11, src: '/greece-2026/11.jpeg', alt: 'Greece 2026 Trip - Photo 11', description: 'Meteora — monasteries built straight into the cliffs' },
  { id: 12, src: '/greece-2026/12.jpeg', alt: 'Greece 2026 Trip - Photo 12', description: '' },
  { id: 13, src: '/greece-2026/13.jpeg', alt: 'Greece 2026 Trip - Photo 13', description: 'Sunset walk on the beach' },
  { id: 14, src: '/greece-2026/14.jpeg', alt: 'Greece 2026 Trip - Photo 14', description: '' },
];

export const greecePostMetadata: Post = {
  slug: 'greece-2026',
  title: 'Greece 2026',
  date: '2026-08-28',
  excerpt: 'Two summer road trips — camping by turquoise coves and the monasteries of Meteora',
  tags: ['travel', 'photography', 'greece', 'roadtrip'],
  featuredImage: '/greece-2026/hero.jpeg',
  gallery: {
    photos: greecePhotos,
    hero: {
      image: '/greece-2026/hero.jpeg',
      alt: 'Meteora monasteries on the cliffs',
      title: 'Greece 2026',
      subtitle:
        'Two summer road trips — camping by turquoise coves and the monasteries of Meteora',
    },
    intro: {
      heading: 'About This Journey',
      body:
        'Two trips to Greece this summer — driving over by car ferry, camping along the coast, swimming in turquoise coves, and a climb up to the monasteries of Meteora. All photos taken on an iPhone.',
    },
  },
};
