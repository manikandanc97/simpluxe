"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { InsightCard } from "@/components/insights/insight-card";
import { InsightCover } from "@/components/insights/insight-cover";
import { buttonVariants } from "@/components/ui/button-variants";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SearchInput } from "@/components/ui/search-input";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { StaticIcon } from "@/components/ui/static-icon";
import { INSIGHTS, INSIGHTS_PAGE_COPY } from "@/lib/data/insights";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 3;

export function InsightsView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const latestSectionRef = useRef<HTMLDivElement>(null);
  const filteredSectionRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(
    () => Array.from(new Set(INSIGHTS.map((item) => item.category))),
    []
  );

  const filteredInsights = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return INSIGHTS.filter((post) => {
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
  }, [activeCategory, searchQuery]);

  const isDefaultView = activeCategory === "all" && !searchQuery.trim();
  const [featured, ...latest] = INSIGHTS;

  const totalPages = Math.ceil(latest.length / PAGE_SIZE);
  const paginatedLatest = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return latest.slice(start, start + PAGE_SIZE);
  }, [currentPage, latest]);

  const totalFilteredPages = Math.ceil(filteredInsights.length / PAGE_SIZE);
  const paginatedFiltered = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredInsights.slice(start, start + PAGE_SIZE);
  }, [currentPage, filteredInsights]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    latestSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFilteredPageChange = (page: number) => {
    setCurrentPage(page);
    filteredSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
          {/* ── 1. Editorial Curator Controls: Categories & Search ── */}
          <div className="flex flex-col justify-between gap-4 border-b border-border/70 pb-6 lg:flex-row lg:items-center sm:pb-8">
            <div className="grid w-full grid-cols-2 items-center gap-2 sm:flex sm:w-auto sm:flex-wrap">
              <button
                type="button"
                onClick={() => handleCategoryChange("all")}
                className={cn(
                  "group relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 sm:w-auto sm:justify-start sm:px-4 sm:text-sm",
                  activeCategory === "all"
                    ? "bg-primary text-white shadow-sm"
                    : "border border-border/60 bg-white/80 text-muted-foreground shadow-2xs hover:border-primary/25 hover:bg-white hover:text-foreground hover:shadow-card"
                )}
              >
                <span>{INSIGHTS_PAGE_COPY.allTopics}</span>
                <span
                  className={cn(
                    "rounded-md px-1.5 py-0.5 text-2xs font-mono font-bold leading-none",
                    activeCategory === "all"
                      ? "bg-white/20 text-white"
                      : "bg-surface-elevated text-muted-foreground"
                  )}
                >
                  {INSIGHTS.length}
                </span>
              </button>
              {categories.map((category) => {
                const count = INSIGHTS.filter((p) => p.category === category).length;
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={cn(
                      "group relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 sm:w-auto sm:justify-start sm:px-4 sm:text-sm",
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "border border-border/60 bg-white/80 text-muted-foreground shadow-2xs hover:border-primary/25 hover:bg-white hover:text-foreground hover:shadow-card"
                    )}
                  >
                    <span>{category}</span>
                    <span
                      className={cn(
                        "rounded-md px-1.5 py-0.5 text-2xs font-mono font-bold leading-none",
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-surface-elevated text-muted-foreground"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <SearchInput
              value={searchQuery}
              onValueChange={handleSearchChange}
              placeholder={INSIGHTS_PAGE_COPY.searchPlaceholder}
              ariaLabel={INSIGHTS_PAGE_COPY.searchAriaLabel}
              clearLabel={INSIGHTS_PAGE_COPY.clearSearch}
              className="sm:w-56"
            />
          </div>

          {/* ── 2. Article Display Area ── */}
          {isDefaultView ? (
            <div className="flex flex-col gap-16 lg:gap-20">
              {/* Lead Feature Piece */}
              <article className="group grid items-stretch gap-8 rounded-3xl border border-border/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl lg:grid-cols-12 lg:gap-10 lg:p-8">
                <div className="flex flex-col justify-between gap-6 lg:col-span-7">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <StaticIcon name={featured.icon} size={14} />
                        {featured.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-2.5 py-0.5 text-2xs font-bold uppercase tracking-wider text-emerald-700">
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {INSIGHTS_PAGE_COPY.leadPerspectiveBadge}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {featured.readingTime} {INSIGHTS_PAGE_COPY.minReadSuffix}
                      </span>
                    </div>

                    <h2 className="text-2xl font-black leading-tight text-heading transition-colors group-hover:text-primary sm:text-3xl lg:text-4xl">
                      <Link href={INSIGHTS_PAGE_COPY.articlePath(featured.slug)}>
                        {featured.title}
                      </Link>
                    </h2>

                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {featured.excerpt}
                    </p>

                    {/* Bento Key Takeaways Box */}
                    <div className="flex flex-col gap-2.5 rounded-2xl border border-primary/15 bg-secondary/60 p-4 sm:p-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                        <StaticIcon name="lightbulb" size={14} />
                        <span>{INSIGHTS_PAGE_COPY.keyTakeaways}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {featured.takeaways.map((takeaway) => (
                          <div key={takeaway} className="flex items-start gap-2.5 text-xs text-foreground/90 sm:text-sm">
                            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-2xs font-bold">
                              →
                            </span>
                            <span className="leading-snug">{takeaway}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-5">
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-muted-foreground">
                      <span>{featured.author}</span>
                      <span aria-hidden="true">·</span>
                      <span>{featured.publishedLabel}</span>
                    </div>

                    <Link
                      href={INSIGHTS_PAGE_COPY.articlePath(featured.slug)}
                      className={cn(buttonVariants({ variant: "default" }), "self-start")}
                    >
                      {INSIGHTS_PAGE_COPY.readArticle}
                      <StaticIcon name="arrow-up-right" size={16} />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <Link
                    href={INSIGHTS_PAGE_COPY.articlePath(featured.slug)}
                    tabIndex={-1}
                    className="block h-full"
                  >
                    <InsightCover
                      index={0}
                      post={featured}
                      className="h-full min-h-80 transition-transform duration-500 group-hover:scale-102 lg:min-h-full"
                    />
                  </Link>
                </div>
              </article>

              {/* Curated Secondary Perspectives (3 per page with Pagination) */}
              <div ref={latestSectionRef} className="flex flex-col gap-10 lg:gap-12">
                <SectionHeader
                  eyebrow={INSIGHTS_PAGE_COPY.latestEyebrow}
                  title={INSIGHTS_PAGE_COPY.latestTitle}
                  description={INSIGHTS_PAGE_COPY.latestDescription}
                />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {paginatedLatest.map((post) => {
                    const overallIndex = INSIGHTS.findIndex((item) => item.slug === post.slug);
                    return (
                      <InsightCard key={post.slug} post={post} index={overallIndex} />
                    );
                  })}
                </div>

                {/* ── Luxury Pagination Controls ── */}
                {totalPages > 1 && (
                  <nav
                    aria-label={INSIGHTS_PAGE_COPY.paginationAriaLabel}
                    className="flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-8 sm:flex-row sm:pt-10"
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      {INSIGHTS_PAGE_COPY.pageIndicator(currentPage, totalPages)}
                    </span>

                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <button
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(1)}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-3.5 py-2 text-xs font-semibold text-foreground shadow-2xs transition-all",
                          "hover:border-primary/40 hover:bg-secondary disabled:pointer-events-none disabled:opacity-35 cursor-pointer"
                        )}
                        aria-label={INSIGHTS_PAGE_COPY.firstPage}
                      >
                        <StaticIcon name="arrow-up" size={13} className="-rotate-90" />
                        <span className="hidden sm:inline">{INSIGHTS_PAGE_COPY.firstPage}</span>
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                        const isActive = currentPage === pageNum;
                        return (
                          <button
                            key={pageNum}
                            type="button"
                            onClick={() => handlePageChange(pageNum)}
                            className={cn(
                              "flex size-9 sm:size-10 items-center justify-center rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer",
                              isActive
                                ? "bg-primary text-white shadow-sm"
                                : "border border-border bg-white text-muted-foreground hover:border-primary/40 hover:bg-secondary hover:text-foreground"
                            )}
                            aria-current={isActive ? "page" : undefined}
                          >
                            {pageNum}
                          </button>
                        );
                      })}

                      <button
                        type="button"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(totalPages)}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-3.5 py-2 text-xs font-semibold text-foreground shadow-2xs transition-all",
                          "hover:border-primary/40 hover:bg-secondary disabled:pointer-events-none disabled:opacity-35 cursor-pointer"
                        )}
                        aria-label={INSIGHTS_PAGE_COPY.lastPage}
                      >
                        <span className="hidden sm:inline">{INSIGHTS_PAGE_COPY.lastPage}</span>
                        <StaticIcon name="arrow-up" size={13} className="rotate-90" />
                      </button>
                    </div>
                  </nav>
                )}
              </div>
            </div>
          ) : (
            <div ref={filteredSectionRef} className="flex flex-col gap-8">
              <span className="text-xs font-semibold text-muted-foreground">
                {INSIGHTS_PAGE_COPY.showingCount(filteredInsights.length, INSIGHTS.length)}
              </span>

              {filteredInsights.length > 0 ? (
                <>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {paginatedFiltered.map((post) => (
                      <InsightCard
                        key={post.slug}
                        post={post}
                        index={INSIGHTS.findIndex((item) => item.slug === post.slug)}
                      />
                    ))}
                  </div>

                  {totalFilteredPages > 1 && (
                    <nav
                      aria-label={INSIGHTS_PAGE_COPY.paginationAriaLabel}
                      className="flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-8 sm:flex-row sm:pt-10"
                    >
                      <span className="text-xs font-medium text-muted-foreground">
                        {INSIGHTS_PAGE_COPY.pageIndicator(currentPage, totalFilteredPages)}
                      </span>

                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <button
                          type="button"
                          disabled={currentPage === 1}
                          onClick={() => handleFilteredPageChange(1)}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-3.5 py-2 text-xs font-semibold text-foreground shadow-2xs transition-all",
                            "hover:border-primary/40 hover:bg-secondary disabled:pointer-events-none disabled:opacity-35 cursor-pointer"
                          )}
                          aria-label={INSIGHTS_PAGE_COPY.firstPage}
                        >
                          <StaticIcon name="arrow-up" size={13} className="-rotate-90" />
                          <span className="hidden sm:inline">{INSIGHTS_PAGE_COPY.firstPage}</span>
                        </button>

                        {Array.from({ length: totalFilteredPages }, (_, i) => i + 1).map((pageNum) => {
                          const isActive = currentPage === pageNum;
                          return (
                            <button
                              key={pageNum}
                              type="button"
                              onClick={() => handleFilteredPageChange(pageNum)}
                              className={cn(
                                "flex size-9 sm:size-10 items-center justify-center rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer",
                                isActive
                                  ? "bg-primary text-white shadow-sm"
                                  : "border border-border bg-white text-muted-foreground hover:border-primary/40 hover:bg-secondary hover:text-foreground"
                              )}
                              aria-current={isActive ? "page" : undefined}
                            >
                              {pageNum}
                            </button>
                          );
                        })}

                        <button
                          type="button"
                          disabled={currentPage === totalFilteredPages}
                          onClick={() => handleFilteredPageChange(totalFilteredPages)}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-3.5 py-2 text-xs font-semibold text-foreground shadow-2xs transition-all",
                            "hover:border-primary/40 hover:bg-secondary disabled:pointer-events-none disabled:opacity-35 cursor-pointer"
                          )}
                          aria-label={INSIGHTS_PAGE_COPY.lastPage}
                        >
                          <span className="hidden sm:inline">{INSIGHTS_PAGE_COPY.lastPage}</span>
                          <StaticIcon name="arrow-up" size={13} className="rotate-90" />
                        </button>
                      </div>
                    </nav>
                  )}
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
                    onClick={() => {
                      setActiveCategory("all");
                      setSearchQuery("");
                      setCurrentPage(1);
                    }}
                    className={cn(buttonVariants({ variant: "outline" }), "text-xs cursor-pointer")}
                  >
                    {INSIGHTS_PAGE_COPY.resetFilters}
                  </button>
                </div>
              )}
            </div>
          )}
        </Container>
      </Section>

      {/* ── 3. High-Impact CTA Banner ── */}
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
