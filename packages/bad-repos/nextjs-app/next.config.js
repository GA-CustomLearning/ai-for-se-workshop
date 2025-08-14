
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  // Security Improvement: Configure Webpack to disable eval-source-map in production.
  // This prevents exposure of internal file paths and source code in production builds.
  webpack: (config, { isServer }) => {
    if (!isServer && process.env.NODE_ENV === 'production') {
      // For client-side production builds, disable source maps entirely.
      // Alternatively, use 'hidden-source-map' or 'nosources-source-map' if some
      // form of source mapping is absolutely required for error tracking,
      // but ensure full paths are not exposed.
      config.devtool = false;
    }
    return config;
  },
};

module.exports = nextConfig;
