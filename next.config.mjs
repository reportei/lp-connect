/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Served at reportei.com/connect; worker/index.js strips the prefix before reading the files in out/.
  basePath: '/connect',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
