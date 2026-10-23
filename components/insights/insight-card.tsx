import { InsightCover } from "@/components/insights/insight-cover";
import { StaticIcon } from "@/components/ui/static-icon";
import { INSIGHTS_PAGE_COPY } from "@/lib/data/insights";
import type { InsightPost } from "@/types/insight";
import Link from "next/link";

interface InsightCardProps {
  index: number;
  post: InsightPost;
}

export function InsightCard({ index, post }: InsightCardProps) {
  const primaryTakeaway = post.takeaways?.[0];
  const articleHref = INSIGHTS_PAGE_COPY.articlePath(post.slug);

  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/70 bg-white p-5 shadow-xs transition-all duration-300 hover:border-primary/30 hover:shadow-luxury sm:p-6">
      {/* Full card clickable overlay */}
      <Link
        href={articleHref}
        className="absolute inset-0 z-10 rounded-3xl"
        aria-label={post.title}
      />

      <div className="flex flex-col gap-4">
        {/* Clean Luxury Cover Artwork */}
        <InsightCover
          index={index}
          post={post}
          variant="card"
        />

        {/* Card Editorial Content */}
        <div className="flex flex-col gap-3">
          {/* Metadata: Category & Reading Time */}
          <div className="flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
              <StaticIcon name={post.icon} size={14} />
              {post.category}
            </span>
            <span className="font-mono text-2xs uppercase tracking-wider text-muted-foreground">
              {post.readingTime} {INSIGHTS_PAGE_COPY.minReadSuffix}
            </span>
          </div>

          {/* Title & Excerpt */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold leading-snug text-heading transition-colors duration-200 group-hover:text-primary sm:text-xl">
              {post.title}
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2 sm:text-sm">
              {post.excerpt}
            </p>
          </div>

          {/* Luxury Editorial Quote */}
          {primaryTakeaway ? (
            <div className="border-l-2 border-primary/35 pl-3 py-0.5">
              <p className="text-xs italic leading-relaxed text-foreground/75">
                “{primaryTakeaway}”
              </p>
            </div>
          ) : null}
        </div>
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between border-t border-border/50 pt-4">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-full border border-border/60 bg-surface-elevated font-mono text-2xs font-bold text-muted-foreground">
            {post.author.slice(0, 1)}
          </span>
          <span className="text-xs font-medium text-muted-foreground">{post.author}</span>
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors duration-200 group-hover:text-primary-hover">
          <span>{INSIGHTS_PAGE_COPY.readArticle}</span>
          <StaticIcon
            name="arrow-up-right"
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </article>
  );
}

