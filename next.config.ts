import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /fotky-v-pohybu bylo par hodin zive, at nikomu nespadne odkaz
      { source: "/fotky-v-pohybu", destination: "/auta", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/le-premier", destination: "/le-premier/index.html" },
      { source: "/equator", destination: "/equator/index.html" },
      { source: "/vizualy", destination: "/vizualy/index.html" },
      { source: "/prim", destination: "/prim/index.html" },
      { source: "/nanoo", destination: "/nanoo/index.html" },
      { source: "/auta", destination: "/auta/index.html" },
      { source: "/ranketta", destination: "/ranketta/index.html" },
    ];
  },
};

export default nextConfig;
