import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

const developmentEvalSource = process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : "";
const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME?.trim() || "drdl4pdnx";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline'${developmentEvalSource} https://va.vercel-scripts.com https://challenges.cloudflare.com;
    connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com;
    frame-src https://challenges.cloudflare.com https://www.google.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://res.cloudinary.com;
    media-src 'self';
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./lib/cloudinary-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: `/${cloudinaryCloudName}/image/upload/**`,
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/inside",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/connect",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/creations",
        permanent: true,
      },
      {
        source: "/services/:slug",
        destination: "/expertise/:slug",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/expertise",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ];
  },
  experimental: {
    serverActions: { bodySizeLimit: "64kb" },
    optimizePackageImports: ["@animateicons/react", "@animateicons/react/lucide", "motion", "motion/react"],
  },
};

import withBundleAnalyzer from "@next/bundle-analyzer";

const analyze = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default function config(phase: string) {
  // Prevent a production deployment whose lead form cannot save submissions.
  if (phase === PHASE_PRODUCTION_BUILD && process.env.VERCEL_ENV === "production") {
    const missing = [
      !(process.env.SUPABASE_URL?.trim() || process.env.NEXT_PUBLIC_SUPABASE_URL?.trim())
        && "SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL",
      !(process.env.SUPABASE_SECRET_KEY?.trim() || process.env.SUPABASE_SERVICE_ROLE_KEY?.trim())
        && "SUPABASE_SECRET_KEY or SUPABASE_SERVICE_ROLE_KEY",
      !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() && "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
      !process.env.TURNSTILE_SECRET_KEY?.trim() && "TURNSTILE_SECRET_KEY",
    ].filter(Boolean);

    if (missing.length) {
      throw new Error(
        `Lead capture requires ${missing.join(", ")}. Add these to Vercel's Production environment and redeploy. See README.md for Supabase setup.`
      );
    }
  }

  return analyze(nextConfig);
}
