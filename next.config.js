/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './cloudflare-loader.ts',
  },
  compress: true,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  poweredByHeader: false,
  // Minificação e otimização de build
  swcMinify: true,
}

module.exports = nextConfig;
