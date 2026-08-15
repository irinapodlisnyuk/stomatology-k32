import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: process.env.NODE_ENV === "development",
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
};

export default nextConfig;