import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightDetailView } from "@/components/pages/insight-detail-view";
import { JsonLd } from "@/components/shared/json-ld";
import { COMMON } from "@/lib/data/common";
import { getInsight, INSIGHTS, INSIGHTS_PAGE_COPY } from "@/lib/data/insights";
import { SITE } from "@/lib/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return INSIGHTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);

  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: INSIGHTS_PAGE_COPY.articlePath(post.slug),
  });
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const post = getInsight(slug);

  if (!post) notFound();

  const path = INSIGHTS_PAGE_COPY.articlePath(post.slug);

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: COMMON.pages.home, path: "/" },
            { name: INSIGHTS_PAGE_COPY.currentPage, path: "/insights" },
            { name: post.title, path },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            author: { "@type": "Organization", name: SITE.name },
            publisher: { "@id": `${SITE.url}/#organization` },
            mainEntityOfPage: `${SITE.url}${path}`,
          },
        ]}
      />
      <InsightDetailView post={post} />
    </>
  );
}
