import { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.138"],
  transpilePackages: ["@typescript-eslint"],
  
  compress: true, 
 
  sassOptions: {
    silenceDeprecations: ["import", "legacy-js-api"],
  },

  logging: {
    fetches: {
      fullUrl: false,
    },
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      if (config.optimization) {
        config.optimization.splitChunks = {
          cacheGroups: {
            default: false,
            styles: {
              name: 'styles',
              type: 'css/mini-extract',
              chunks: 'all',
              enforce: true,
            },
          },
        };
      }
    }
    return config;
  },

  turbopack: {},
};

export default nextConfig;