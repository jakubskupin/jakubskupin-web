import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/le-premier", destination: "/le-premier/index.html" },
      { source: "/equator", destination: "/equator/index.html" },
      { source: "/vizualy", destination: "/vizualy/index.html" },
      { source: "/prim", destination: "/prim/index.html" },
      { source: "/nanoo", destination: "/nanoo/index.html" },
    ];
  },
};

export default nextConfig;
