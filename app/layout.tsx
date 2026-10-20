import { LAYOUT_COPY } from "@/lib/content/metadata";
import { MobileMenuProvider } from "@/components/layout/mobile-menu-context";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { FooterBrandText } from "@/components/layout/footer-brand-text";
import { LeadProvider } from "@/components/leads/lead-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { ScrollRestorationProvider } from "@/components/providers/scroll-restoration-provider";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { CommandPalette } from "@/components/ui/command-palette";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollHud } from "@/components/ui/scroll-hud";

import { SITE } from "@/lib/content/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Primary typeface — Geist variable font, self-hosted by Next.js (no external network request).
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

// Caveat is kept only for decorative handwriting accents in illustrations.
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
      className={cn("h-full antialiased", geist.variable, caveat.variable, "font-sans")}
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
          <ScrollProgress />
          <LeadProvider>
            <MobileMenuProvider>
              <SiteNavbar />
              <CommandPalette />
              <main id="main" className="flex flex-col flex-1 pt-16 pb-20 md:pb-0 w-full min-h-dvh">
                {children}
              </main>

              <MobileBottomNav />
              <ScrollHud />
              <SiteFooter />
              <FooterBrandText />
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
