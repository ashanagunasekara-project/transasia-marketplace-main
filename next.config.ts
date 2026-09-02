import path from "node:path";
import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});
const slimClientPolyfill = path.join(
  process.cwd(),
  "lib/next-client-polyfill-slim.js",
);

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "next/dist/build/polyfills/polyfill-module": slimClientPolyfill,
      "next/dist/build/polyfills/polyfill-module.js": slimClientPolyfill,
    },
  },
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /[\\/]next[\\/]dist[\\/]build[\\/]polyfills[\\/]polyfill-module\.js$/,
          slimClientPolyfill,
        ),
      );
    }
    return config;
  },
  experimental: {
    // Inlines route CSS to reduce render-blocking linked stylesheets (PageSpeed: Render blocking requests).
    inlineCss: true,
    // Optimize package imports for large icon/component libraries (reduces initial JS bundle).
    optimizePackageImports: ["swiper", "bootstrap", "lightgallery"],
  },
  // Image optimization: serve AVIF (smaller) then WebP, tuned device breakpoints.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 500],
    minimumCacheTTL: 31536000, // 1 year
  },
  // Enable gzip/brotli compression.
  compress: true,
  // Long-term cache headers for public static assets.
  async headers() {
    return [
      {
        source: "/assets/fonts/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/images/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
