
const {
  API_URL: _API_URL,
  NODE_ENV,
  VERCEL_GIT_COMMIT_SHA: COMMIT_SHA,
  VERCEL_GIT_COMMIT_REF,
  ASSET_PREFIX_CREHANA,
} = process.env;

const API_URL = _API_URL || '';

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: '/docs',
  trailingSlash: true,
  assetPrefix: '',
  // images: {
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  // },
  env: {
    API_URL,
    NEXT_PUBLIC_COMMIT_SHA: COMMIT_SHA,
  },
}
