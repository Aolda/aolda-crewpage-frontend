import type { NextConfig } from "next";

const backendBaseUrl = (process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:8001').replace(/\/$/, '');
const backendImagePattern = (() => {
  try {
    const url = new URL(backendBaseUrl);
    return {
      protocol: url.protocol.replace(':', '') as 'http' | 'https',
      hostname: url.hostname,
      port: url.port,
      pathname: '/assets/profile-images/**',
    };
  } catch {
    return null;
  }
})();

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
      ...(backendImagePattern ? [backendImagePattern] : []),
    ],
  },
  compiler: {
    styledComponents: true, 
  },
  async rewrites() {
    return [
      {
        source: '/assets/profile-images/:path*',
        destination: `${backendBaseUrl}/assets/profile-images/:path*`,
      },
    ];
  },
};

export default nextConfig;
