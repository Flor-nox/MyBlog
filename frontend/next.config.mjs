/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/MyBlog',
  assetPrefix: '/MyBlog',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
