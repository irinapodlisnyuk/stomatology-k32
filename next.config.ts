import { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.138"],
  transpilePackages: ["@typescript-eslint"],

  compress: true,
  generateEtags: true,

  sassOptions: {
    silenceDeprecations: ["import", "legacy-js-api"],
  },

  logging: {
    fetches: {
      fullUrl: false,
    },
  },

  experimental: {
    turbopackUseBuiltinSass: true,
  },
};

export default nextConfig;
