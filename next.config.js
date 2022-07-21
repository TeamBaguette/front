/** @type {import('next').NextConfig} */

const {NEXT_PUBLIC_TEST_IMG_URL, NEXT_PUBLIC_ENV_VARIABLE} = process.env
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //process.env로 불러올 환경변수 세팅
  env: {
    NEXT_PUBLIC_TEST_IMG_URL,
    NEXT_PUBLIC_ENV_VARIABLE
  },
  //이미지 도메인 세팅
  images:{
    domains: ['picsum.photos']
  }
}

module.exports = nextConfig
