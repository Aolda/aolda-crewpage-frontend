import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.aolda.io', // 에러 메시지에 표시된 호스트네임 등록
        port: '',
        pathname: '/**', // 해당 도메인의 모든 경로 허용
      },
    ],
  },
  compiler: {
    styledComponents: true, 
  },
};

export default nextConfig;
