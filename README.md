# Personal Blog & CV - Next.js Static Site

A modern personal blog and CV website built with Next.js, TypeScript, and Tailwind CSS, designed to be exported as a static site for easy deployment.

## Features

- 📝 **Blog System**: Markdown-based blog posts with frontmatter support
- 📄 **CV/Resume Section**: Professional experience and skills showcase
- 🎨 **Modern Design**: Clean, responsive design with Tailwind CSS
- ⚡ **Static Export**: Generates static HTML files for fast loading
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML
- 📱 **Mobile Responsive**: Works perfectly on all devices
- ⚙️ **TypeScript**: Full type safety and better developer experience

## Project Structure

```
next-blog/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── blog/           # Blog pages
│   │   ├── cv/             # CV page
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript types
├── posts/                 # Markdown blog posts
├── public/               # Static assets
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

1. Create a new `.md` file in the `posts/` directory
2. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2024-06-09"
excerpt: "A brief description of your post"
tags: ["tag1", "tag2"]
---

# Your Post Content

Write your blog post content here using Markdown.
```

3. The post will automatically appear on the blog page

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
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Markdown**: Content management for blog posts
- **Gray Matter**: Frontmatter parsing
- **Remark**: Markdown processing
- **Lucide React**: Beautiful icons
- **Date-fns**: Date formatting

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production and export static files
- `npm run start` - Start production server (not needed for static export)
- `npm run lint` - Run ESLint

## License

This project is open source and available under the [MIT License](LICENSE).
