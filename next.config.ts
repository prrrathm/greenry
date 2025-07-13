import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      // https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com
      {
        protocol: "https",
        hostname: "v2-statics.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      }
      ]
    }
};

export default nextConfig;
