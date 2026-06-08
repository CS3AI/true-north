/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/true-north',
  assetPrefix: '/true-north',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;