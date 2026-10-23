import Image from "next/image";
import { StaticIcon } from "@/components/ui/static-icon";
import { INSIGHTS_PAGE_COPY } from "@/lib/data/insights";
import { cn } from "@/lib/utils";
import type { InsightPost } from "@/types/insight";

const TONE_STYLES: Record<InsightPost["tone"], string> = {
  ocean: "bg-dark text-white",
  sky: "bg-primary text-white",
  slate: "bg-slate-200 text-heading",
  cyan: "bg-sky-100 text-primary-hover",
};

interface InsightCoverProps {
  className?: string;
  index: number;
  post: InsightPost;
  priority?: boolean;
}

export function InsightCover({ className, index, post, priority }: InsightCoverProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex min-h-64 overflow-hidden rounded-3xl p-5 sm:min-h-72 sm:p-6",
        post.image ? "bg-dark text-white" : TONE_STYLES[post.tone],
        className
      )}
    >
      {post.image ? (
        <>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority={priority ?? index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-dark/40" />
        </>
      ) : (
        <>
          <div className="absolute -right-16 -top-16 size-64 rounded-full border border-current opacity-10" />
          <div className="absolute -bottom-20 -left-20 size-72 rounded-full border border-current opacity-10" />
          <div className="absolute inset-x-6 top-1/2 h-px bg-current opacity-10 sm:inset-x-8" />
        </>
      )}

      <div className="relative flex w-full flex-col justify-between gap-12">
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center rounded-xl border border-white/20 bg-dark/60 px-3 py-1 font-mono text-xs font-bold tracking-wider text-white backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex size-10 items-center justify-center rounded-2xl border border-white/20 bg-dark/60 text-white backdrop-blur-md">
            <StaticIcon name={post.icon} size={18} />
          </span>
        </div>

        <div className="flex items-end justify-between gap-6">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-dark/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
            {post.category}
          </span>
          <span className="font-mono text-2xl font-black text-white/50 sm:text-3xl">
            {INSIGHTS_PAGE_COPY.coverCode(index)}
          </span>
        </div>
      </div>
    </div>
  );
}
