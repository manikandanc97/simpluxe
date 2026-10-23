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

  return (
    <article className="group flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-white p-6 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-xl sm:p-7">
      <div className="flex flex-col gap-5">
        <Link href={INSIGHTS_PAGE_COPY.articlePath(post.slug)} tabIndex={-1}>
          <InsightCover
            index={index}
            post={post}
            className="min-h-52 rounded-2xl transition-transform duration-300 group-hover:-translate-y-1 sm:min-h-56"
          />
        </Link>
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center justify-between gap-2 text-xs font-semibold text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-primary">
              <StaticIcon name={post.icon} size={13} />
              {post.category}
            </span>
            <span>{post.readingTime} {INSIGHTS_PAGE_COPY.minReadSuffix}</span>
          </div>
          <div className="flex flex-col gap-2.5">
            <h2 className="text-xl font-bold leading-tight text-heading transition-colors group-hover:text-primary sm:text-2xl">
              <Link href={INSIGHTS_PAGE_COPY.articlePath(post.slug)}>{post.title}</Link>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </div>
          {primaryTakeaway ? (
            <div className="flex items-start gap-2 rounded-xl border border-primary/10 bg-secondary/50 p-3 text-xs leading-relaxed text-foreground/85">
              <span className="font-bold text-primary">“</span>
              <span className="italic">{primaryTakeaway}</span>
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-border/60 pt-4">
        <span className="text-xs font-medium text-muted-foreground">{post.author}</span>
        <Link
          href={INSIGHTS_PAGE_COPY.articlePath(post.slug)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary-hover"
        >
          {INSIGHTS_PAGE_COPY.readArticle}
          <StaticIcon name="arrow-up-right" size={15} />
        </Link>
      </div>
    </article>
  );
}

