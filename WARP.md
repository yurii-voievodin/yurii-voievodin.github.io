# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Snapshot

This is a personal blog and CV website built with Next.js 15 using the App Router, configured for static export and deployment to GitHub Pages. The site uses a dark theme with Tailwind CSS 4 and serves as both a blog and professional portfolio.

### Key Technologies and Versions
- **Next.js**: 15.3.3 (App Router, static export enabled)
- **React**: 19
- **TypeScript**: 5
- **Tailwind CSS**: 4 with @tailwindcss/typography for blog content
- **Node.js**: 20 (CI/CD requirement)
- **Static Export**: Enabled via `output: 'export'` in `next.config.ts`
- **Hosting**: GitHub Pages (root domain deployment)
- **Dev Server**: `next dev --turbopack` on http://localhost:3000

### Configuration Files
- `next.config.ts`: Static export config with GitHub Pages optimizations
- `.github/workflows/deploy.yml`: Automated deployment to GitHub Pages
- `src/lib/config.ts`: Site-wide metadata, navigation, and social links

## Essential Development Commands

| Command | Purpose | Output/Notes |
|---------|---------|-------------|
| `npm run dev` | Start development server | Turbopack dev server at http://localhost:3000 |
| `npm run build` | Build static site | Generates `./out` directory for hosting |
| `npm run build:static` | Explicit static export | `next build && next export` (redundant but explicit) |
| `npm run lint` | Run ESLint | Uses ESLint 9 with eslint-config-next |
| `npm run start` | Start production server | Not needed for static export |

**Notes**: 
- CI uses `npm ci` for reproducible installs
- Ensure Node 20 locally for CI parity
- Static export means no server-side runtime

## High-Level Architecture and Code Structure

### App Router and Layout
- `src/app/layout.tsx` sets global metadata from `src/lib/config.ts`, applies Geist fonts via `next/font`, and forces dark theme
- Navigation and Footer rendered globally; main content in centered container
- Metadata includes OpenGraph and Twitter card optimization

### Static Export Configuration  
- `next.config.ts`: `output: 'export'` generates `./out`, `trailingSlash: true` for GitHub Pages compatibility, `images.unoptimized: true` disables Next.js image optimization
- `basePath`/`assetPrefix` commented out for root domain deployment (uncomment for project pages)

### Site Configuration
- `src/lib/config.ts`: Central hub for site identity, navigation, author info, and social links
- Consumed by layout for metadata and navigation components

### Blog Data Pipeline (Build-Time)
- `src/lib/blog.ts` reads Markdown from `posts/` directory using Node.js `fs` (build-time only)
- Uses `gray-matter` for frontmatter parsing, `remark + remark-html` for HTML conversion
- **Key Functions**:
  - `getSortedPostsData()`: Returns posts sorted by date (descending), content remains raw Markdown
  - `getPostData(slug)`: Returns single post with HTML content, calculates read time (~200 WPM)
  - `getAllPostSlugs()`: Helper for static path generation

### Types and Styling
- `src/types/blog.ts`: TypeScript interfaces for Post, CVSection, CVItem
- Tailwind CSS v4 with `@tailwindcss/typography` for blog content styling
- Global styles in `src/app/globals.css`

## Blog Post Management Workflow

### Creating New Posts
1. **Create Markdown file**: `posts/your-post-slug.md` (slug becomes URL path)
2. **Add frontmatter**:
   ```markdown
   ---
   title: "Your Post Title"
   date: "2024-12-26"
   excerpt: "Brief description for listings and SEO"
   tags: ["tag1", "tag2"]
   ---
   ```
3. **Write content** in Markdown below frontmatter
4. **Images**: Place in `public/images/` and reference as `/images/filename.jpg`
5. **Date sorting**: Use ISO format `YYYY-MM-DD` for proper chronological sorting

### Function Behavior
- **Listing pages** (`getSortedPostsData()`): Content is raw Markdown
- **Detail pages** (`getPostData(slug)`): Content is converted to HTML
- **Read time**: Auto-calculated based on word count ÷ 200 WPM

### Local Development and Deployment
- `npm run dev` for live preview with hot reload
- `npm run build` to test static generation locally
- Push to `main` branch triggers automatic GitHub Pages deployment

## CV Customization Guidance

The CV system uses two approaches for different content types:

### Structured CV Data (`src/lib/cv-data.ts`)
- `cvData: CVSection[]` for education, skills, and simple structured content  
- Type-safe with `CVSection`/`CVItem` interfaces
- Good for lists, dates, and simple text content

### Rich HTML Experience Section
- `experienceHTML` string contains styled HTML with Tailwind classes
- Used for complex formatting (links, code snippets, bullet points)
- **Caution**: Raw HTML rendering - keep content trusted

### Editing Steps
1. Update job roles/timelines in `experienceHTML` (maintain template literal backticks)
2. Modify education/skills in `cvData` array (maintain type compatibility)
3. Preview changes with `npm run dev`
4. Update site metadata in `src/lib/config.ts` if needed

## Deployment to GitHub Pages

Automated via `.github/workflows/deploy.yml`:

### Workflow Triggers
- Push to `main` branch
- Manual `workflow_dispatch`

### Deployment Process
1. **Enable Pages**: `actions/configure-pages@v4`
2. **Build**: Node 20, `npm ci`, `npm run build` → `./out`
3. **Deploy**: Upload artifact and deploy to GitHub Pages environment

### Configuration Notes  
- `siteConfig.url`: Set to `https://yurii-voievodin.github.io` (root domain)
- `trailingSlash: true` ensures GitHub Pages URL compatibility
- Repository Settings → Pages → Source must be "GitHub Actions"
- For project pages, uncomment `basePath`/`assetPrefix` in `next.config.ts`

## File System Structure

```
next-blog/
├── src/
│   ├── app/
│   │   ├── blog/            # Blog routes (listing and [slug] pages)
│   │   ├── cv/              # CV route
│   │   ├── timeline/        # Timeline route (referenced in navigation)
│   │   └── layout.tsx       # Root layout + metadata
│   ├── components/
│   │   ├── Navigation.tsx   # Header navigation
│   │   ├── Footer.tsx       # Site footer
│   │   └── PostCard.tsx     # Blog post preview cards
│   ├── lib/
│   │   ├── blog.ts          # Markdown processing and data fetching
│   │   ├── config.ts        # Site configuration and metadata
│   │   └── cv-data.ts       # CV content (structured + HTML)
│   ├── types/
│   │   └── blog.ts          # TypeScript type definitions
│   └── app/globals.css      # Tailwind CSS and global styles
├── posts/                   # Markdown blog posts with frontmatter
├── public/                  # Static assets (images, documents, icons)
├── next.config.ts           # Next.js configuration for static export
├── package.json             # Dependencies and npm scripts
├── .github/workflows/deploy.yml  # GitHub Pages deployment
└── README.md                # Project documentation
```

## Unique Decisions and Gotchas

### Static Export Only
- No server-side runtime; all data must be available at build time
- File system operations (`fs`) only work during build, not in browser

### GitHub Pages Optimizations
- `trailingSlash: true` prevents 404s on directory-style URLs
- `images.unoptimized: true` disables Next.js image optimization (not compatible with static hosting)
- Use standard `<img>` tags or Markdown images instead of `next/image`

### Blog Content Nuances  
- `getSortedPostsData()` returns raw Markdown content (for post listings)
- `getPostData()` returns HTML content (for individual post pages)
- Read time calculation is approximate: word count ÷ 200 WPM

### CV Experience Section
- Contains raw HTML - ensure content is trusted
- Tailwind classes embedded in HTML strings
- No automatic escaping applied

### Root vs Project Page Deployment
- Current setup targets root domain (`username.github.io`)
- For project pages (`username.github.io/repo`), adjust `basePath`/`assetPrefix` and `siteConfig.url`

## Common Tasks and Recipes

### Add a New Blog Post
```bash
# Create new post
touch posts/my-new-post.md
# Add frontmatter and content, then:
npm run dev  # Preview locally
git add posts/my-new-post.md
git commit -m "Add new blog post"
git push origin main  # Triggers deployment
```

### Add a New Page Route
```typescript
// Create src/app/my-page/page.tsx
export default function MyPage() {
  return <div>My new page content</div>;
}
```
```typescript
// Add to src/lib/config.ts navigation array
{ name: "My Page", href: "/my-page" }
```

### Update Site Metadata/SEO
```typescript
// Edit src/lib/config.ts
export const siteConfig = {
  title: "New Site Title",
  description: "Updated description",
  // ... other fields
};
```

### Use Lucide React Icons
```typescript
import { IconName } from "lucide-react";

<IconName className="w-5 h-5" />
```

### Add Images to Posts
```markdown
<!-- Place image in public/images/ -->
![Alt text](/images/my-image.jpg)
```

### Format Dates with date-fns
```typescript
import { format } from "date-fns";
const formattedDate = format(new Date(post.date), "LLL d, yyyy");
```

## Troubleshooting Checklist

### Build Issues
- **No `./out` directory**: Verify `output: 'export'` in `next.config.ts`
- **Build fails**: Check for server-side code in components, ensure all data is available at build time

### GitHub Pages Issues  
- **404 errors**: Confirm `trailingSlash: true`, check Pages is enabled in repo settings
- **Assets not loading**: Use absolute paths `/images/...`, ensure files exist in `public/`
- **Deployment failed**: Check GitHub Actions logs, verify workflow permissions

### Blog Post Issues
- **Post not appearing**: Verify filename and frontmatter format, restart dev server
- **Date sorting wrong**: Use ISO format `YYYY-MM-DD` in frontmatter
- **Images broken**: Check paths start with `/`, verify files are in `public/`

### Navigation Issues
- **Timeline link 404**: Either create `src/app/timeline/page.tsx` or remove from `src/lib/config.ts`

### Project vs Root Page Confusion
- **Assets 404 on project page**: Enable `basePath`/`assetPrefix` in `next.config.ts`
- **Wrong URLs generated**: Update `siteConfig.url` to match deployment target
