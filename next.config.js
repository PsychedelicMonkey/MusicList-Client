/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    API_URI: process.env.API_URI,
    COOKIE_PASSWORD: process.env.COOKIE_PASSWORD,
  },
};

module.exports = nextConfig;
