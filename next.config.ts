import type { NextConfig } from 'next';

const repoName = 'website_igor_ferrao_product_designer';
const isGithubPagesBuild = process.env.NODE_ENV === 'production';
const basePath = isGithubPagesBuild ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
