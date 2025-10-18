import { Post } from '@/types/blog';
import FutureTechPost from '@/components/blog-posts/FutureTechPost';

export const featurePostMetadata: Post = {
  slug: 'feature',
  title: 'Hello from the feature',
  date: '2021-03-06',
  excerpt: 'Пропоную замислитися над недалеким майбутнім нашої цивілізації та уявити які нові технології, пристрої та професії можуть з\'явитися через 50 років. А також які з теперішніх речей стануть застарілими та вийдуть із використання.',
  tags: ['future', 'technology', 'ukrainian'],
  component: FutureTechPost,
};
