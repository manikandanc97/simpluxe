import Image from "next/image";
import { AnimatedIcon } from "@/components/ui/animated-icon";
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
  variant?: "card" | "hero";
}

export function InsightCover({
  className,
  index,
  post,
  priority,
  variant = "card",
}: InsightCoverProps) {
  if (variant === "hero") {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "relative flex min-h-64 overflow-hidden rounded-3xl p-6 sm:min-h-96 sm:p-8",
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
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              priority={priority ?? true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/30 to-dark/40" />
          </>
        ) : (
          <>
            <div className="absolute -right-16 -top-16 size-64 rounded-full border border-current opacity-10" />
            <div className="absolute -bottom-20 -left-20 size-72 rounded-full border border-current opacity-10" />
            <div className="absolute inset-x-6 top-1/2 h-px bg-current opacity-10 sm:inset-x-8" />
          </>
        )}

        <div className="relative flex w-full flex-col justify-between gap-12">
          <div className="flex items-center justify-end">
            <span className="flex size-10 items-center justify-center rounded-2xl border border-white/20 bg-dark/60 text-white backdrop-blur-md">
              <AnimatedIcon name={post.icon} size={18} />
            </span>
          </div>

          <div className="flex items-end justify-start">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-dark/60 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
              {post.category}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-2xl bg-surface",
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
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 384px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority={priority ?? index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent opacity-60" />
        </>
      ) : (
        <>
          <div className="absolute -right-12 -top-12 size-48 rounded-full border border-current opacity-10" />
          <div className="absolute -bottom-16 -left-16 size-56 rounded-full border border-current opacity-10" />
        </>
      )}

      {/* Floating interactive action indicator */}
      <div className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full border border-white/30 bg-white/90 text-foreground shadow-md backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-white">
        <AnimatedIcon
          name="arrow-up-right"
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </div>
  );
}
