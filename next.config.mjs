/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  images: {
    domains: ['gamehunt-data.s3.amazonaws.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.modules.push(path.resolve(process.cwd(), "src"));
    }
    return config;
  },
  eslint: {
    dirs: ["src"],
  },
};

export default nextConfig;
