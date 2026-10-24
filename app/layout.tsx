import { LAYOUT_COPY } from "@/lib/data/metadata";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { FooterBrandText } from "@/components/layout/footer-brand-text";
import { LeadProvider } from "@/components/leads/lead-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { ScrollRestorationProvider } from "@/components/providers/scroll-restoration-provider";
import { CommandPalette } from "@/components/ui/command-palette";
import { ScrollProgress } from "@/components/ui/scroll-progress";

import { SITE } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { DEFAULT_OG_IMAGE } from "@/lib/metadata";
import "./globals.css";

// Primary typeface — Geist variable font, self-hosted by Next.js (no external network request).
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "/",
  },
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
    locale: "en_US",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary",
    title: LAYOUT_COPY.title,
    description:
      LAYOUT_COPY.socialDescription,
    images: [DEFAULT_OG_IMAGE.url],
  },
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
      sizes: "96x96",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", geist.variable, "font-sans")}
      suppressHydrationWarning
    >
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
            <SiteNavbar />
            <CommandPalette />
            <main id="main" className="flex w-full flex-1 flex-col pt-16">
              {children}
            </main>

            <SiteFooter />
            <FooterBrandText />
            <ScrollRestorationProvider />
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
