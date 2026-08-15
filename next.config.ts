import { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.138"],
  transpilePackages: ["@typescript-eslint"],

  sassOptions: {
    silenceDeprecations: ["import", "legacy-js-api"],
  },

  logging: {
    fetches: {
      fullUrl: false,
    },
  },

  turbopack: {},
};

export default nextConfig;