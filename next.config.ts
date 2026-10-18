import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Browsers loading the app via http://127.0.0.1:<port> send Origin: 127.0.0.1.
  // Next only allows localhost by default, which blocks /_next/hmr WebSockets and
  // prevents client hydration (menu Add, filters, mock forms never become interactive).
  allowedDevOrigins: ["127.0.0.1"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
