import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    "*": [
      "node_modules/next/dist/compiled/@vercel/og/**",
      "./**/*.js.map",
      "./**/*.mjs.map",
      "./**/*.cjs.map"
    ],
  },
};

export default nextConfig;