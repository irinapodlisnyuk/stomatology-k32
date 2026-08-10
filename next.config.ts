import { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,
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

  turbopack: {
    resolveAlias: {
      "next/dist/compiled/next-polyfill-module": "./empty.js",
    },
  },
};

export default nextConfig;
