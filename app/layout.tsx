import { FloatingCallButton } from "@/components/layout/floating-call-button";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { MobileMenuProvider } from "@/components/layout/mobile-menu-context";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { LeadProvider } from "@/components/leads/lead-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { CommandPalette } from "@/components/ui/command-palette";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


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
    default: "Simpluxe — Keep It Simple. Make It Luxury.",
    template: "%s · Simpluxe",
  },
  description:
    "Simpluxe is a premium digital studio that engineers custom software, scalable web applications, mobile apps, SaaS platforms, and enterprise solutions.",
  openGraph: {
    title: "Simpluxe — Keep It Simple. Make It Luxury.",
    description:
      "Premium digital studio engineering custom software, scalable web applications, mobile apps, SaaS platforms, and enterprise solutions.",
    url: SITE.url,
    siteName: "Simpluxe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simpluxe — Keep It Simple. Make It Luxury.",
    description:
      "Premium digital studio engineering custom software, scalable web applications, mobile apps, SaaS platforms, and enterprise solutions.",
  },
  // Let Next.js handle app/icon.svg automatically
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html
      lang="en"
      className={cn("h-full antialiased scroll-smooth", inter.variable, manrope.variable, caveat.variable, "font-sans")}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preload" href="/fonts/satoshi-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        
      </head>
      <body className="min-h-full flex flex-col">
        {/* Skip to main content for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:ring-2 focus:ring-primary focus:rounded-md focus:shadow-md"
        >
          Skip to content
        </a>

        <MotionProvider>
          <LeadProvider>
            <MobileMenuProvider>
              <SiteNavbar />
              <CommandPalette />


              <main id="main" className="flex-1 flex flex-col w-full pb-20 md:pb-0">
                {children}
              </main>

              <div className="fixed bottom-[96px] sm:bottom-8 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
                <FloatingCallButton />
                <ScrollToTop />
              </div>
              <MobileBottomNav />
              <SiteFooter />
            </MobileMenuProvider>
          </LeadProvider>
        </MotionProvider>
        
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
