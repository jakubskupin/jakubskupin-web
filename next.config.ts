import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/le-premier", destination: "/le-premier/index.html" },
      { source: "/equator", destination: "/equator/index.html" },
    ];
  },
};

export default nextConfig;
