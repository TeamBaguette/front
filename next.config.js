/** @type {import('next').NextConfig} */

const { NEXT_PUBLIC_ENV_VARIABLE, NEXT_PUBLIC_IMG_URL } = process.env;
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //process.env로 불러올 환경변수 세팅
  env: {
    NEXT_PUBLIC_ENV_VARIABLE,
    NEXT_PUBLIC_IMG_URL,
  },
  //이미지 도메인 세팅
  images: {
    domains: ['baguette-s3.s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
