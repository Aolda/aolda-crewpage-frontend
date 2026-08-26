import type { NextConfig } from "next";

/**
 * The browser always calls the Next.js application on the same origin. This
 * avoids exposing an HTTP backend URL to pages served over HTTPS.
 */
const backendInternalUrl = (process.env.BACKEND_INTERNAL_URL ?? 'http://localhost:8001').replace(/\/$/, '');

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
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
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8001',
        pathname: '/assets/profile-images/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8001',
        pathname: '/assets/profile-images/**',
      },
    ],
  },
  compiler: {
    styledComponents: true, 
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${backendInternalUrl}/:path*`,
      },
      {
        source: '/assets/profile-images/:path*',
        destination: `${backendInternalUrl}/assets/profile-images/:path*`,
      },
    ];
  },
};

export default nextConfig;
