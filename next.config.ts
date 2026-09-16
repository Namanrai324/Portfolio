import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.86.76.208', '10.86.76.208:3000'],
  experimental: {
    serverActions: {
      allowedOrigins: ['10.86.76.208', '10.86.76.208:3000'],
    }
  }
};

export default nextConfig;
