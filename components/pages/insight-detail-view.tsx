import { InsightCard } from "@/components/insights/insight-card";
import { InsightCover } from "@/components/insights/insight-cover";
import { ArticleContents } from "@/components/insights/article-contents";
import { AccordionList } from "@/components/sections/faq/accordion-list";
import { buttonVariants } from "@/components/ui/button-variants";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { INSIGHTS, INSIGHTS_PAGE_COPY } from "@/lib/data/insights";
import { cn } from "@/lib/utils";
import type { InsightRichText, PublishedInsightPost } from "@/types/insight";
import { GlobeIcon } from "@animateicons/react/lucide/globe-icon";
import Link from "next/link";

function RichText({ content }: { content: InsightRichText }) {
  if (typeof content === "string") return content;

  return content.map((part, index) => {
    if (typeof part === "string") return part;
    if (part.type === "strong") return <strong key={index}>{part.text}</strong>;

    return (
      <Link key={index} href={part.href} className="font-semibold text-primary underline underline-offset-4">
        {part.text}
      </Link>
    );
  });
}

export function InsightDetailView({ post }: { post: PublishedInsightPost }) {
  const postIndex = INSIGHTS.findIndex((item) => item.slug === post.slug);
  const related = INSIGHTS.filter((item) => item.slug !== post.slug).slice(0, 3);
  const numberedSections = post.sections.filter((section) => /^\d+\./.test(section.heading));

  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/insights", label: INSIGHTS_PAGE_COPY.currentPage }]}
        currentPage={post.title}
        heading={post.title}
        description={post.excerpt}
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
            variant="hero"
            className="min-h-72 sm:min-h-96 lg:min-h-112"
          />

          <div className="grid min-w-0 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="order-2 flex flex-col gap-8 lg:order-1 lg:col-span-5 lg:sticky lg:top-24">
              {post.takeaways?.length ? (
                <div className="flex flex-col gap-6 rounded-3xl border border-primary-hover/50 bg-primary p-6 text-white shadow-luxury sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur-sm shadow-xs">
                      <AnimatedIcon name="lightbulb" size={20} />
                    </span>
                    <h2 className="text-xl font-bold text-white sm:text-2xl">
                      {INSIGHTS_PAGE_COPY.keyTakeaways}
                    </h2>
                  </div>
                  <ul className="flex flex-col gap-5">
                    {post.takeaways.map((takeaway) => (
                      <li key={takeaway} className="flex items-start gap-4 text-sm leading-relaxed text-white/90 sm:text-base">
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/20 font-mono text-xs font-bold text-white shadow-2xs">
                          <AnimatedIcon name="check" size={13} />
                        </span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <nav
                aria-label={INSIGHTS_PAGE_COPY.articleContents}
                className="flex flex-col gap-4 rounded-3xl border border-border bg-white p-4 shadow-card sm:p-5"
              >
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <AnimatedIcon name="list-checks" size={18} />
                  </span>
                  <span className="text-sm font-bold tracking-wider text-heading">
                    {INSIGHTS_PAGE_COPY.articleContents}
                  </span>
                </div>
                <ArticleContents
                  headings={numberedSections.map((section) => section.heading)}
                  showSectionLabels={post.showSectionLabels !== false}
                />
              </nav>
            </aside>

            <article className="order-1 flex min-w-0 flex-col gap-12 lg:order-2 lg:col-span-7">
              {post.introduction ? (
                <div className="flex flex-col gap-5 text-sm leading-loose text-muted-foreground sm:text-base">
                  {post.introduction.map((paragraph, index) => (
                    <p key={index}><RichText content={paragraph} /></p>
                  ))}
                </div>
              ) : null}

              {post.sections.map((section, index) => (
                <section
                  id={`insight-section-${index + 1}`}
                  key={section.heading}
                  className="flex min-w-0 scroll-mt-24 flex-col gap-6"
                >
                  <div className="flex items-start gap-4 border-b border-border pb-5">
                    {post.showSectionLabels !== false ? (
                      <span className="font-mono text-xs font-bold text-primary">
                        {INSIGHTS_PAGE_COPY.sectionLabel(index)}
                      </span>
                    ) : null}
                    <h2 className="type-h3 text-heading">{section.heading}</h2>
                  </div>

                  <div className="flex flex-col gap-5 text-sm leading-loose text-muted-foreground sm:text-base">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}><RichText content={paragraph} /></p>
                    ))}
                  </div>

                  {section.bullets ? (
                    <ul className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 text-sm leading-relaxed text-foreground shadow-card">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span aria-hidden="true" className="size-1.5 shrink-0 translate-y-2 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.subsections?.map((subsection) => (
                    <div key={subsection.heading} className="flex flex-col gap-4">
                      {subsection.heading ? (
                        <h3 className="text-xl font-bold text-heading">{subsection.heading}</h3>
                      ) : null}
                      {subsection.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="text-sm leading-loose text-muted-foreground sm:text-base">
                          <RichText content={paragraph} />
                        </p>
                      ))}
                      {subsection.bullets ? (
                        <ul className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 text-sm leading-relaxed text-foreground shadow-card">
                          {subsection.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                              <span aria-hidden="true" className="size-1.5 shrink-0 translate-y-2 rounded-full bg-primary" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}

                  {section.table ? (
                    <div className="table-scrollbar w-full max-w-full overflow-x-auto rounded-2xl border border-border shadow-card">
                      <table className="min-w-full border-collapse bg-white text-left text-sm">
                        <thead className="bg-surface text-heading">
                          <tr>
                            {section.table.headers.map((header) => (
                              <th key={header} scope="col" className="border-b border-border p-4 font-semibold">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          {section.table.rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="border-b border-border last:border-b-0">
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="p-4 align-top leading-relaxed">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}

                  {section.checklist ? (
                    <ul className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 text-sm leading-relaxed text-foreground shadow-card">
                      {section.checklist.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span aria-hidden="true" className="size-1.5 shrink-0 translate-y-2 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.faqs ? (
                    <AccordionList
                      defaultOpenId={`${post.slug}-faq-1`}
                      faqs={section.faqs.map((faq, faqIndex) => ({
                        id: `${post.slug}-faq-${faqIndex + 1}`,
                        num: String(faqIndex + 1).padStart(2, "0"),
                        category: post.category,
                        icon: GlobeIcon,
                        question: faq.question,
                        answer: faq.answer,
                      }))}
                    />
                  ) : null}

                  {section.closingParagraphs ? (
                    <div className="flex flex-col gap-5 text-sm leading-loose text-muted-foreground sm:text-base">
                      {section.closingParagraphs.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}><RichText content={paragraph} /></p>
                      ))}
                    </div>
                  ) : null}

                  {section.callout ? (
                    <blockquote className="flex gap-5 rounded-3xl bg-dark p-6 text-base font-semibold leading-relaxed text-white sm:p-8 sm:text-xl">
                      <span aria-hidden="true" className="text-3xl leading-none text-sky-300">“</span>
                      <p>{section.callout}</p>
                    </blockquote>
                  ) : null}
                </section>
              ))}

              <div className="flex flex-wrap items-end justify-between gap-4 border-t border-border pt-8">
                <div className="flex shrink-0 flex-col gap-1 text-sm">
                  <span className="font-semibold text-heading">{INSIGHTS_PAGE_COPY.writtenBy}</span>
                  <span className="text-muted-foreground">{post.author}</span>
                </div>
                <Link
                  href="/insights"
                  className={cn(buttonVariants({ variant: "outline" }), "shrink-0")}
                >
                  <AnimatedIcon name="arrow-left" size={15} />
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
