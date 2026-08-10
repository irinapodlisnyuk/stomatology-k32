import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["192.168.0.138"],
  transpilePackages: ["@typescript-eslint"],

 
  experimental: {
    inlineCss: true,
  },

  sassOptions: {
    silenceDeprecations: ["import", "legacy-js-api"],
  },
  logging: {
    fetches: {
      fullUrl: false,
    },
  },

  turbopack: {
    resolveAlias: {
      "next/dist/compiled/next-polyfill-module": "./empty.js",
    },
  },
};

export default nextConfig;