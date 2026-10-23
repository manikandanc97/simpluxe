"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@animateicons/react/lucide/chevron-down-icon";
import { InsightCard } from "@/components/insights/insight-card";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { buttonVariants } from "@/components/ui/button-variants";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SearchInput } from "@/components/ui/search-input";
import { Section } from "@/components/ui/section";
import { StaticIcon } from "@/components/ui/static-icon";
import { INSIGHTS, INSIGHTS_PAGE_COPY } from "@/lib/data/insights";
import { cn } from "@/lib/utils";

type SortOption = "latest" | "oldest" | "name";

const PAGE_SIZE = 6;

export function InsightsView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<SortOption>("latest");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const sortMenuRef = useRef<HTMLDivElement>(null);
  const categoryMenuRef = useRef<HTMLDivElement>(null);
  const gridSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isSortOpen && !isCategoryOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (isSortOpen && !sortMenuRef.current?.contains(target)) {
        setIsSortOpen(false);
      }
      if (isCategoryOpen && !categoryMenuRef.current?.contains(target)) {
        setIsCategoryOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSortOpen(false);
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSortOpen, isCategoryOpen]);

  const categories = useMemo(
    () => Array.from(new Set(INSIGHTS.map((item) => item.category))),
    []
  );

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
    setIsCategoryOpen(false);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
    setCurrentPage(1);
    setIsSortOpen(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    gridSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
          {/* ── Editorial Controls: Category Dropdown, Search & Sort ── */}
          <div className="flex flex-col justify-between gap-4 border-b border-border/70 pb-6 sm:flex-row sm:items-center sm:pb-8">
            {/* Category Dropdown Filter */}
            <div ref={categoryMenuRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsCategoryOpen((prev) => !prev);
                  setIsSortOpen(false);
                }}
                aria-expanded={isCategoryOpen}
                aria-haspopup="menu"
                className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-surface-elevated bg-white px-3.5 py-2 text-xs font-medium text-foreground shadow-sm transition-all sm:w-auto sm:px-4 sm:text-sm hover:bg-background group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Topic:</span>
                  <span className="font-semibold text-foreground">
                    {activeCategory === "all" ? INSIGHTS_PAGE_COPY.allTopics : activeCategory}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "rounded-md px-1.5 py-0.5 text-2xs font-mono font-bold leading-none",
                      activeCategory === "all"
                        ? "bg-surface-elevated text-muted-foreground"
                        : "bg-primary text-white"
                    )}
                  >
                    {activeCategory === "all"
                      ? INSIGHTS.length
                      : INSIGHTS.filter((p) => p.category === activeCategory).length}
                  </span>
                  <AnimatedIcon
                    icon={ChevronDownIcon}
                    size={14}
                    className={cn(
                      "text-muted-foreground transition-transform duration-200",
                      isCategoryOpen && "rotate-180"
                    )}
                  />
                </div>
              </button>

              {isCategoryOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full translate-y-2 z-30 w-64 max-w-xs rounded-xl border border-surface-elevated bg-white py-1.5 shadow-xl animate-in fade-in zoom-in-95 duration-150"
                >
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleCategoryChange("all")}
                    className={cn(
                      "flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-2.5 text-xs font-medium transition-colors hover:bg-background sm:text-sm",
                      activeCategory === "all" ? "bg-primary/5 font-bold text-primary" : "text-foreground"
                    )}
                  >
                    <span>{INSIGHTS_PAGE_COPY.allTopics}</span>
                    <span
                      className={cn(
                        "rounded-md px-1.5 py-0.5 text-2xs font-mono font-bold leading-none",
                        activeCategory === "all"
                          ? "bg-primary text-white"
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
                        role="menuitem"
                        onClick={() => handleCategoryChange(category)}
                        className={cn(
                          "flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-2.5 text-xs font-medium transition-colors hover:bg-background sm:text-sm",
                          isActive ? "bg-primary/5 font-bold text-primary" : "text-foreground"
                        )}
                      >
                        <span>{category}</span>
                        <span
                          className={cn(
                            "rounded-md px-1.5 py-0.5 text-2xs font-mono font-bold leading-none",
                            isActive
                              ? "bg-primary text-white"
                              : "bg-surface-elevated text-muted-foreground"
                          )}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <SearchInput
                value={searchQuery}
                onValueChange={handleSearchChange}
                placeholder={INSIGHTS_PAGE_COPY.searchPlaceholder}
                ariaLabel={INSIGHTS_PAGE_COPY.searchAriaLabel}
                clearLabel={INSIGHTS_PAGE_COPY.clearSearch}
                className="flex-1 sm:w-56 sm:flex-none"
              />

              {/* Sort Pill Dropdown */}
              <div ref={sortMenuRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsSortOpen((prev) => !prev);
                    setIsCategoryOpen(false);
                  }}
                  aria-expanded={isSortOpen}
                  aria-haspopup="menu"
                  className="bg-white border border-surface-elevated rounded-xl px-3.5 py-2 text-xs font-medium text-foreground flex items-center gap-2 cursor-pointer shadow-sm transition-all sm:px-4 sm:text-sm hover:bg-background group"
                >
                  <span>
                    {sortOption === "latest"
                      ? INSIGHTS_PAGE_COPY.latestFirst
                      : sortOption === "oldest"
                      ? INSIGHTS_PAGE_COPY.oldestFirst
                      : INSIGHTS_PAGE_COPY.alphabetical}
                  </span>
                  <AnimatedIcon
                    icon={ChevronDownIcon}
                    size={14}
                    className={cn(
                      "text-muted-foreground transition-transform duration-200",
                      isSortOpen && "rotate-180"
                    )}
                  />
                </button>

                {isSortOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 top-full translate-y-2 w-40 bg-white rounded-xl shadow-xl border border-surface-elevated py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150"
                  >
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => handleSortChange("latest")}
                      className={cn(
                        "w-full text-left px-4 py-2 text-xs sm:text-sm font-medium hover:bg-background transition-colors cursor-pointer",
                        sortOption === "latest" ? "text-primary font-bold" : "text-muted-foreground"
                      )}
                    >
                      {INSIGHTS_PAGE_COPY.latestFirst}
                    </button>
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => handleSortChange("oldest")}
                      className={cn(
                        "w-full text-left px-4 py-2 text-xs sm:text-sm font-medium hover:bg-background transition-colors cursor-pointer",
                        sortOption === "oldest" ? "text-primary font-bold" : "text-muted-foreground"
                      )}
                    >
                      {INSIGHTS_PAGE_COPY.oldestFirst}
                    </button>
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => handleSortChange("name")}
                      className={cn(
                        "w-full text-left px-4 py-2 text-xs sm:text-sm font-medium hover:bg-background transition-colors cursor-pointer",
                        sortOption === "name" ? "text-primary font-bold" : "text-muted-foreground"
                      )}
                    >
                      {INSIGHTS_PAGE_COPY.alphabetical}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

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
