import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  env: {
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_API_KEY: process.env.CLOUD_API_KEY,
    CLOUD_API_SECRET: process.env.CLOUD_API_SECRET,
    MS_COMPUTER_VISION_SUBSCRIPTION_KEY: process.env.MS_COMPUTER_VISION_SUBSCRIPTION_KEY,
    MS_COMPUTER_VISION_ENDPOINT: process.env.MS_COMPUTER_VISION_ENDPOINT,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

const withMDX = createMDX({

})

export default withMDX(nextConfig);
