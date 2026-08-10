import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["192.168.0.138"],
  transpilePackages: ["@typescript-eslint"],

  experimental: {
    inlineCss: true,
    cssChunking: true,
  },

  sassOptions: {
    silenceDeprecations: ["import", "legacy-js-api"],
  },
  logging: {
    fetches: {
      fullUrl: false,
    },
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};
