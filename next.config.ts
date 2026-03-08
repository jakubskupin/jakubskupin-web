import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/brand", destination: "/brand/index.html" },
    ];
  },
};

export default nextConfig;
