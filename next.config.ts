import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['img.shields.io'],
  },
  webpack: (config) => {
    // Create an alias so that "tsparticles/Enums" maps to the main tsparticles module.
    config.resolve.alias['tsparticles/Enums'] = require.resolve('tsparticles')
    return config
  },
}

export default nextConfig
