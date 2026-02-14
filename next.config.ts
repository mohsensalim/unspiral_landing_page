import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/unspiral_landing_page',  // Add this line
  output: 'export',  // Add this for static export
  images: {
    unoptimized: true,  // Required for static export
  },
};

export default nextConfig;