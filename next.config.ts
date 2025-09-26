import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // 테스트 파일들을 빌드에서 제외
    config.module.rules.push({
      test: /\.(test|spec)\.(ts|tsx|js|jsx)$/,
      loader: "ignore-loader",
    });
    return config;
  },
};

export default nextConfig;
