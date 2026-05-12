import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.aolda.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dummy.aolda.local',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    styledComponents: true, 
  },
};

export default nextConfig;
