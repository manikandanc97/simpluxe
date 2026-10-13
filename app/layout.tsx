import { LAYOUT_COPY } from "@/lib/content/metadata";
import { MobileMenuProvider } from "@/components/layout/mobile-menu-context";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { LeadProvider } from "@/components/leads/lead-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { ScrollRestorationProvider } from "@/components/providers/scroll-restoration-provider";

import dynamic from "next/dynamic";

import { SITE } from "@/lib/content/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const FloatingCallButton = dynamic(() => import("@/components/layout/floating-call-button").then((mod) => mod.FloatingCallButton));
const MobileBottomNav = dynamic(() => import("@/components/layout/mobile-bottom-nav").then((mod) => mod.MobileBottomNav));
const CommandPalette = dynamic(() => import("@/components/ui/command-palette").then((mod) => mod.CommandPalette));
const ScrollToTop = dynamic(() => import("@/components/ui/scroll-to-top").then((mod) => mod.ScrollToTop));

const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const manrope = localFont({
  src: [
    {
      path: "../public/fonts/manrope-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/manrope-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/manrope-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const caveat = localFont({
  src: [
    {
      path: "../public/fonts/caveat-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/caveat-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/caveat-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: LAYOUT_COPY.title,
    template: LAYOUT_COPY.titleTemplate,
  },
  description:
    LAYOUT_COPY.description,
  openGraph: {
    title: LAYOUT_COPY.title,
    description:
      LAYOUT_COPY.socialDescription,
    url: SITE.url,
    siteName: LAYOUT_COPY.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: LAYOUT_COPY.title,
    description:
      LAYOUT_COPY.socialDescription,
  },
  icons: {
    icon: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1791901666/simpluxe/favicon/Bright_Blue_S_Monogram_Logo_spudvz.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", inter.variable, manrope.variable, caveat.variable, "font-sans")}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      </head>
      <body className="flex flex-col min-h-full">
        {/* Skip to main content for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:top-4 focus:left-4 focus:z-50 focus:fixed focus:bg-background focus:shadow-md focus:px-4 focus:py-2 focus:rounded-md focus:ring-2 focus:ring-primary focus:text-foreground"
        >
          {LAYOUT_COPY.skipToContent}</a>

        <MotionProvider>
          <LeadProvider>
            <MobileMenuProvider>
              <SiteNavbar />
              <CommandPalette />
              <main id="main" className="flex flex-col flex-1 pb-20 md:pb-0 w-full min-h-dvh">
                {children}
              </main>

              <div className="right-4 sm:right-6 bottom-safe-actions md:bottom-8 z-50 fixed flex flex-col items-end gap-3">
                <FloatingCallButton />
                <ScrollToTop />
              </div>
              <MobileBottomNav />
              <SiteFooter />
              <ScrollRestorationProvider />
            </MobileMenuProvider>
          </LeadProvider>
        </MotionProvider>
        
        {process.env.NODE_ENV === "production" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
