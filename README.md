# Personal Blog & CV - Next.js Static Site

Built with Next.js, TypeScript, and Tailwind CSS.

## Screenshots

![Blog Listing Page](public/Screenshot%202025-10-18%20at%2018.31.27.png)
*Blog listing page showing travel adventures and tech articles*

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
