/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["http2.mlstatic.com"],
  },
};

module.exports = nextConfig;
