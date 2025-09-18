/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir is now the default in Next.js 14, so we don't need to specify it
  webpack: (config) => {
    // Support importing video files (e.g., .mp4) in components
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    })

    return config
  }
}

module.exports = nextConfig
