# Personal Blog & CV - Next.js Static Site

A modern personal blog and CV website built with Next.js, TypeScript, and Tailwind CSS, designed to be exported as a static site for easy deployment.

## Screenshots

![Blog Listing Page](public/Screenshot%202025-10-18%20at%2018.31.27.png)
*Blog listing page showing travel adventures and tech articles*

## Features

- 📝 **Blog System**: TypeScript-based blog architecture with custom React components for rich content
- 📄 **CV/Resume Section**: Professional experience and skills showcase
- 🎨 **Modern Design**: Clean, responsive design with Tailwind CSS
- ⚡ **Static Export**: Generates static HTML files for fast loading
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML
- 📱 **Mobile Responsive**: Works perfectly on all devices
- ⚙️ **TypeScript**: Full type safety and better developer experience
- 🎯 **Component-Based Posts**: Each post can have a specialized React component for custom layouts

## Project Structure

```
next-blog/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── blog/           # Blog pages
│   │   ├── cv/             # CV page
│   │   └── layout.tsx      # Root layout
│   ├── components/
│   │   └── blog-posts/    # Custom blog post components
│   ├── lib/
│   │   ├── *-data.ts      # Blog post metadata and data
│   │   ├── posts-registry.ts  # Central post registry
│   │   └── blog.ts        # Blog utility functions
│   └── types/             # TypeScript types
├── public/               # Static assets (images, etc.)
└── package.json
```

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the site

### Building for Production

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out` directory

## Adding Blog Posts

The blog uses a TypeScript-based architecture where each post consists of:

### 1. Create a Data File

Create a new data file in `src/lib/` (e.g., `my-post-data.ts`):

```typescript
import { Post } from '@/types/blog';
import MyPost from '@/components/blog-posts/MyPost';

export const myPostMetadata: Post = {
  slug: 'my-post',
  title: 'My Post Title',
  date: '2024-06-09',
  excerpt: 'A brief description of your post',
  tags: ['tag1', 'tag2'],
  featuredImage: '/images/my-post-cover.jpg',
  component: MyPost,
};

// Optional: Add any additional data structures your post needs
export const myPostData = [
  // Your custom data here
];
```

### 2. Create a Component (Optional)

For custom layouts, create a component in `src/components/blog-posts/MyPost.tsx`:

```typescript
import { Post } from '@/types/blog';

interface MyPostProps {
  post: Post;
}

export default function MyPost({ post }: MyPostProps) {
  return (
    <div>
      <h1>{post.title}</h1>
      {/* Your custom layout here */}
    </div>
  );
}
```

### 3. Register the Post

Add your post to `src/lib/posts-registry.ts`:

```typescript
import { myPostMetadata } from './my-post-data';

export const allPosts: Post[] = [
  myPostMetadata,
  // ... other posts
];
```

Your post will now appear on the blog page!

## Customizing Your CV

Edit the file `src/lib/cv-data.ts` to update your professional information:

- Experience
- Education
- Skills
- Contact information

## Customization

### Personal Information

1. Update navigation title in `src/components/Navigation.tsx`
2. Modify hero section in `src/app/page.tsx`
3. Update CV details in `src/lib/cv-data.ts`
4. Replace placeholder content throughout the site

### Styling

- Tailwind CSS classes can be modified in components
- Global styles in `src/app/globals.css`
- Tailwind config in `tailwind.config.js`

## Deployment

### Static Hosting (Recommended)

1. Build the static site:
```bash
npm run build
```

2. Deploy the `out` folder to any static hosting service:
   - **GitHub Pages**: Upload to your repository


## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript for blog data and components
- **Tailwind CSS**: Utility-first CSS framework
- **React Components**: Custom blog post layouts with full flexibility
- **Lucide React**: Beautiful icons
- **Date-fns**: Date formatting
- **Static Site Generation**: Pre-rendered pages for optimal performance

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production and export static files
- `npm run start` - Start production server (not needed for static export)
- `npm run lint` - Run ESLint

## License

This project is open source and available under the [MIT License](LICENSE).
