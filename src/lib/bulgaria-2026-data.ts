import { Post, Photo } from '@/types/blog';
import BulgariaPost from '@/components/blog-posts/BulgariaPost';

export const bulgariaPostMetadata: Post = {
  slug: 'bulgaria-2026',
  title: 'Bulgaria 2026',
  date: '2026-05-06',
  excerpt: "Black Sea coast, mountains, and ancient cities",
  tags: ['travel', 'photography', 'bulgaria', 'adventure'],
  featuredImage: '/bulgaria-2026/hero.jpeg',
  component: BulgariaPost,
};

export const bulgariaPhotos: Photo[] = [
  { id: 1, src: '/bulgaria-2026/01.jpeg', alt: 'Bulgaria 2026 Trip - Photo 1', description: 'We stopped in some little village in front of the mountains to take a break, enjoy the view and eat a sandwich' },
  { id: 8, src: '/bulgaria-2026/08.jpeg', alt: 'Bulgaria 2026 Trip - Photo 8', description: 'A favorite place for peace and thoughts' },
  { id: 2, src: '/bulgaria-2026/03.jpeg', alt: 'Bulgaria 2026 Trip - Photo 2', description: 'Central street of the resort town of Bansko with many cafes and restaurants serving local cuisine.' },
  { id: 9, src: '/bulgaria-2026/09.jpeg', alt: 'Bulgaria 2026 Trip - Photo 9', description: 'Just pure beauty' },
  { id: 6, src: '/bulgaria-2026/06.jpeg', alt: 'Bulgaria 2026 Trip - Photo 6', description: 'Turkish coffee in the morning with nice views' },
  { id: 7, src: '/bulgaria-2026/07.jpeg', alt: 'Bulgaria 2026 Trip - Photo 7', description: 'Two Toyota Hilux campers by the sea ' },
  { id: 4, src: '/bulgaria-2026/04.jpeg', alt: 'Bulgaria 2026 Trip - Photo 4', description: 'View from a balcony in Bansko' },
  { id: 10, src: '/bulgaria-2026/10.jpeg', alt: 'Bulgaria 2026 Trip - Photo 10', description: 'Snow-covered forest in the mountains and rockfall near Sofia' },
  { id: 5, src: '/bulgaria-2026/05.jpeg', alt: 'Bulgaria 2026 Trip - Photo 5', description: 'Somewhere in the forest' },
  { id: 11, src: '/bulgaria-2026/11.jpeg', alt: 'Bulgaria 2026 Trip - Photo 11', description: '' },
  { id: 12, src: '/bulgaria-2026/12.jpeg', alt: 'Bulgaria 2026 Trip - Photo 12', description: '' },
  { id: 13, src: '/bulgaria-2026/13.jpeg', alt: 'Bulgaria 2026 Trip - Photo 13', description: 'Hello, friends' },
  { id: 14, src: '/bulgaria-2026/14.jpeg', alt: 'Bulgaria 2026 Trip - Photo 14', description: '' },
  { id: 15, src: '/bulgaria-2026/15.jpeg', alt: 'Bulgaria 2026 Trip - Photo 15', description: '' },
  { id: 16, src: '/bulgaria-2026/16.jpeg', alt: 'Bulgaria 2026 Trip - Photo 16', description: '' },
  { id: 17, src: '/bulgaria-2026/17.jpeg', alt: 'Bulgaria 2026 Trip - Photo 17', description: '' },
];
