import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove basePath and assetPrefix for GitHub Pages root deployment
  // basePath: process.env.NODE_ENV === 'production' ? '/next-blog' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/next-blog/' : '',
};

export default nextConfig;
