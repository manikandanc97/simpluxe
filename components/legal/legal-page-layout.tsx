import { Container } from "@/components/ui/container";
import { LEGAL_LAYOUT_COPY } from "@/lib/content/legal";
import Link from "next/link";
import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  children: ReactNode;
  lastUpdated: string;
  title: string;
}

export function LegalPageLayout({ children, lastUpdated, title }: LegalPageLayoutProps) {
  return (
    <>
      <section className="w-full bg-luxury-banner text-white border-b border-primary-hover/30">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col items-center text-center gap-6 sm:gap-7">
            <nav aria-label={LEGAL_LAYOUT_COPY.breadcrumb} className="flex items-center gap-2 text-xs font-medium text-white/75">
              <Link href="/" className="hover:text-white transition-colors">
                {LEGAL_LAYOUT_COPY.home}
              </Link>
              <span aria-hidden="true" className="text-white/40">/</span>
              <span aria-current="page" className="text-white font-semibold">{title}</span>
            </nav>

            <h1 className="text-3xl font-bold tracking-tight text-white max-w-3xl leading-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="text-sm text-white/80 max-w-2xl leading-relaxed sm:text-base">
              {lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      <Container size="content" className="py-12 flex flex-col gap-8 md:py-16 lg:py-20">
        <div className="flex flex-col gap-8 text-muted-foreground text-sm leading-relaxed md:text-base">
          {children}
        </div>
      </Container>
    </>
  );
}
