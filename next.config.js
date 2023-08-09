/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"], // Replace 'your-image-host.com' with your actual image host domain
  },
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },
};

module.exports = nextConfig;
