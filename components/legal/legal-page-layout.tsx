import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { LEGAL_LAYOUT_COPY } from "@/lib/data/legal";
import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  children: ReactNode;
  lastUpdated: string;
  title: string;
}

export function LegalPageLayout({ children, lastUpdated, title }: LegalPageLayoutProps) {
  return (
    <>
      <PageHero
        homeLabel={LEGAL_LAYOUT_COPY.home}
        currentPage={title}
        heading={title}
        description={lastUpdated}
      />

      <Container size="content" className="py-12 flex flex-col gap-8 md:py-16 lg:py-20">
        <div className="flex flex-col gap-8 text-muted-foreground text-sm leading-relaxed md:text-base">
          {children}
        </div>
      </Container>
    </>
  );
}
