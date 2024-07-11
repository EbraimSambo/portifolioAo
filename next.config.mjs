/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.jsdelivr.net',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname:'images.pexels.com',
            port: '',
            pathname: '/**',
          }
        ],
      },
};

export default nextConfig;
