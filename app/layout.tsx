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

const satoshi = localFont({
  src: "../public/fonts/satoshi-variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
  style: "normal",
});

const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Bold.woff2",
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
      path: "../public/fonts/Manrope-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope-Bold.woff2",
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
      path: "../public/fonts/Caveat-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Caveat-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Caveat-Bold.woff2",
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
    icon: "https://res.cloudinary.com/drdl4pdnx/image/upload/v1790596040/simpluxe/favicon/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", satoshi.variable, inter.variable, manrope.variable, caveat.variable, "font-sans")}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Skip to main content for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:ring-2 focus:ring-primary focus:rounded-md focus:shadow-md"
        >
          {LAYOUT_COPY.skipToContent}</a>

        <MotionProvider>
          <LeadProvider>
            <MobileMenuProvider>
              <SiteNavbar />
              <CommandPalette />
              <main id="main" className="flex-1 flex flex-col w-full min-h-dvh pb-20 md:pb-0">
                {children}
              </main>

              <div className="fixed bottom-safe-actions md:bottom-8 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
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
