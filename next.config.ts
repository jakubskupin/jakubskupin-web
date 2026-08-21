import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/le-premier", destination: "/le-premier/index.html" }];
  },
};

export default nextConfig;
