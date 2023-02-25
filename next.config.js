/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    SERVER_ENVIRONMENT: process.env.SERVER_ENVIRONMENT,
  },
};

module.exports = nextConfig;
