import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/services/:slug',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/industries',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/research',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
