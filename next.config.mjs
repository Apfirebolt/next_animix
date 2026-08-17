/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/**',
      },
      // Keep any existing domains you use (like Unsplash or 4kwallpapers)
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '4kwallpapers.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.kitsu.app',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;
