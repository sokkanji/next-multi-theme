/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // 로컬은 http://localhost:3000/ 에서 연다.
  // 배포(next build)만 GitHub Pages 하위 경로를 붙인다.
  ...(isProd ? { basePath: '/tailwind-css-multiple-theme-dynamic' } : {}),
  output: 'export',

  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
