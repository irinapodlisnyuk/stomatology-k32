import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["192.168.0.138"],
  sassOptions: {
    silenceDeprecations: ["import", "legacy-js-api"],
  },
};

export default nextConfig;
