import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // サブパスで運用（/confidence-howto 配下で動かす）
  basePath: "/confidence-howto",

  // 画像最適化を使わない
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
