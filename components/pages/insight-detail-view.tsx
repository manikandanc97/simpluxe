import { InsightCard } from "@/components/insights/insight-card";
import { InsightCover } from "@/components/insights/insight-cover";
import { buttonVariants } from "@/components/ui/button-variants";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { StaticIcon } from "@/components/ui/static-icon";
import { INSIGHTS, INSIGHTS_PAGE_COPY } from "@/lib/data/insights";
import { cn } from "@/lib/utils";
import type { InsightPost } from "@/types/insight";
import Link from "next/link";

export function InsightDetailView({ post }: { post: InsightPost }) {
  const postIndex = INSIGHTS.findIndex((item) => item.slug === post.slug);
  const related = INSIGHTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/insights", label: INSIGHTS_PAGE_COPY.currentPage }]}
        currentPage={post.title}
        heading={post.title}
        description={post.excerpt}
        variant="article"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-white/75">
          <span>{post.publishedLabel}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime} {INSIGHTS_PAGE_COPY.minReadSuffix}</span>
          <span aria-hidden="true">·</span>
          <span>{post.author}</span>
        </div>
      </PageHero>

      <Section className="bg-background">
        <Container className="flex flex-col gap-12 lg:gap-16">
          <InsightCover
            index={postIndex}
            post={post}
            className="min-h-72 sm:min-h-96 lg:min-h-112"
          />

          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="order-2 flex flex-col gap-8 lg:order-1 lg:col-span-5 lg:sticky lg:top-24">
              <div className="flex flex-col gap-6 rounded-3xl border border-primary/15 bg-secondary p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white">
                    <StaticIcon name="lightbulb" size={20} />
                  </span>
                  <h2 className="text-xl font-bold text-heading">
                    {INSIGHTS_PAGE_COPY.keyTakeaways}
                  </h2>
                </div>
                <ul className="flex flex-col gap-5">
                  {post.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex items-start gap-4 text-base leading-relaxed text-muted-foreground">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white font-mono text-xs font-bold text-primary shadow-2xs">
                        ✓
                      </span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 border-l-2 border-primary/20 pl-5">
                <span className="text-xs font-bold tracking-widest text-primary">
                  {INSIGHTS_PAGE_COPY.articleContents}
                </span>
                <ol className="flex flex-col gap-3">
                  {post.sections.map((section, index) => (
                    <li key={section.heading} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="font-mono text-xs font-bold text-primary">
                        {INSIGHTS_PAGE_COPY.sectionLabel(index)}
                      </span>
                      <span>{section.heading}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <article className="order-1 flex flex-col gap-12 lg:order-2 lg:col-span-7">
              {post.sections.map((section, index) => (
                <section key={section.heading} className="flex flex-col gap-6">
                  <div className="flex items-start gap-4 border-b border-border pb-5">
                    <span className="font-mono text-xs font-bold text-primary">
                      {INSIGHTS_PAGE_COPY.sectionLabel(index)}
                    </span>
                    <h2 className="type-h3 text-heading">{section.heading}</h2>
                  </div>

                  <div className="flex flex-col gap-5 text-base leading-loose text-muted-foreground">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bullets ? (
                    <ul className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 text-sm leading-relaxed text-foreground shadow-card">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="text-primary">→</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.callout ? (
                    <blockquote className="flex gap-5 rounded-3xl bg-dark p-6 text-lg font-semibold leading-relaxed text-white sm:p-8 sm:text-xl">
                      <span aria-hidden="true" className="text-3xl leading-none text-sky-300">“</span>
                      <p>{section.callout}</p>
                    </blockquote>
                  ) : null}
                </section>
              ))}

              <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1 text-sm">
                  <span className="font-semibold text-heading">{INSIGHTS_PAGE_COPY.writtenBy}</span>
                  <span className="text-muted-foreground">{post.author}</span>
                </div>
                <Link
                  href="/insights"
                  className={cn(buttonVariants({ variant: "outline" }), "self-start")}
                >
                  <StaticIcon name="arrow-up" size={15} className="-rotate-90" />
                  {INSIGHTS_PAGE_COPY.backToInsights}
                </Link>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border bg-white">
        <Container className="flex flex-col gap-10 lg:gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-widest text-primary">
              {INSIGHTS_PAGE_COPY.relatedEyebrow}
            </span>
            <h2 className="type-h2 text-heading">{INSIGHTS_PAGE_COPY.relatedTitle}</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <InsightCard
                key={item.slug}
                post={item}
                index={INSIGHTS.findIndex((insight) => insight.slug === item.slug)}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
