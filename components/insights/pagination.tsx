import { StaticIcon } from "@/components/ui/static-icon";
import { INSIGHTS_PAGE_COPY } from "@/lib/data/insights";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
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
          onClick={() => onPageChange(1)}
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
              onClick={() => onPageChange(pageNum)}
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
          onClick={() => onPageChange(totalPages)}
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
  );
}
