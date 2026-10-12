import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://challenges.cloudflare.com;
    frame-src https://challenges.cloudflare.com https://www.google.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://res.cloudinary.com https://images.unsplash.com https://www.google.com https://t2.gstatic.com;
    media-src 'self' https://res.cloudinary.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/s2/favicons/**",
      },
      {
        protocol: "https",
        hostname: "t2.gstatic.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverActions: { bodySizeLimit: "64kb" },
    inlineCss: true,
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
