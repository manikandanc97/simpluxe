"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { InsightCard } from "@/components/insights/insight-card";
import { Controls, type SortOption } from "@/components/insights/controls";
import { Pagination } from "@/components/insights/pagination";
import { buttonVariants } from "@/components/ui/button-variants";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { StaticIcon } from "@/components/ui/static-icon";
import { INSIGHTS, INSIGHTS_PAGE_COPY } from "@/lib/data/insights";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 6;

export function InsightsView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<SortOption>("latest");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const gridSectionRef = useRef<HTMLDivElement>(null);

  const filteredAndSortedInsights = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const matching = INSIGHTS.filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.category === activeCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.takeaways.some((t) => t.toLowerCase().includes(query))
      );
    });

    return matching.sort((a, b) => {
      if (sortOption === "name") {
        return a.title.localeCompare(b.title);
      }
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      if (sortOption === "oldest") {
        return dateA - dateB;
      }
      return dateB - dateA;
    });
  }, [activeCategory, searchQuery, sortOption]);

  const totalPages = Math.ceil(filteredAndSortedInsights.length / PAGE_SIZE);
  const paginatedInsights = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredAndSortedInsights.slice(start, start + PAGE_SIZE);
  }, [currentPage, filteredAndSortedInsights]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    gridSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleResetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <>
      <PageHero
        currentPage={INSIGHTS_PAGE_COPY.currentPage}
        heading={
          <>
            {INSIGHTS_PAGE_COPY.heroTitle}{" "}
            <span className="text-sky-200">{INSIGHTS_PAGE_COPY.heroHighlight}</span>
          </>
        }
        description={INSIGHTS_PAGE_COPY.heroDescription}
      />

      <Section className="overflow-hidden bg-background">
        <Container className="flex flex-col gap-12 lg:gap-16">
          <Controls
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            sortOption={sortOption}
            onSortChange={handleSortChange}
          />

          {/* ── Article Display Area ── */}
          <div ref={gridSectionRef} className="flex flex-col gap-10 lg:gap-12">
            {paginatedInsights.length > 0 ? (
              <>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {paginatedInsights.map((post) => {
                    const overallIndex = INSIGHTS.findIndex((item) => item.slug === post.slug);
                    return (
                      <InsightCard key={post.slug} post={post} index={overallIndex} />
                    );
                  })}
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-border bg-white py-16 text-center">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <StaticIcon name="info" size={24} />
                </div>
                <div className="flex max-w-md flex-col gap-1">
                  <h3 className="text-lg font-bold text-heading">
                    {INSIGHTS_PAGE_COPY.noMatchesTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {INSIGHTS_PAGE_COPY.noMatchesDescription}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className={cn(buttonVariants({ variant: "outline" }), "text-xs cursor-pointer")}
                >
                  {INSIGHTS_PAGE_COPY.resetFilters}
                </button>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* ── High-Impact CTA Banner ── */}
      <Section className="bg-primary text-primary-foreground" padding="tight">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex max-w-2xl flex-col gap-2">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              {INSIGHTS_PAGE_COPY.contactTitle}
            </h2>
            <p className="text-sm leading-relaxed text-sky-100/90">
              {INSIGHTS_PAGE_COPY.contactDescription}
            </p>
          </div>
          <Link
            href="/connect"
            className={cn(
              buttonVariants(),
              "bg-white text-primary shadow-sm hover:bg-white/90"
            )}
          >
            {INSIGHTS_PAGE_COPY.contactAction}
            <StaticIcon name="arrow-up-right" size={16} />
          </Link>
        </Container>
      </Section>
    </>
  );
}

