import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightDetailView } from "@/components/pages/insight-detail-view";
import { JsonLd } from "@/components/shared/json-ld";
import { COMMON } from "@/lib/data/common";
import {
  getInsight,
  INSIGHTS,
  INSIGHTS_PAGE_COPY,
  isPublishedInsight,
} from "@/lib/data/insights";
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
  if (!isPublishedInsight(post)) {
    return {
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const metadata = createPageMetadata({
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    path: INSIGHTS_PAGE_COPY.articlePath(post.slug),
  });

  if (!post.image || !post.imageAlt) {
    return post.seoTitle
      ? { ...metadata, title: { absolute: post.seoTitle } }
      : metadata;
  }

  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `${SITE.url}${post.image}`;

  const articleMetadata: Metadata = {
    ...metadata,
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      url: INSIGHTS_PAGE_COPY.articlePath(post.slug),
      siteName: SITE.name,
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt,
      authors: [post.author],
      images: [{ url: imageUrl, alt: post.imageAlt, type: "image/webp" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      images: [imageUrl],
    },
  };

  return post.seoTitle
    ? { ...articleMetadata, title: { absolute: post.seoTitle } }
    : articleMetadata;
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const post = getInsight(slug);

  if (!post || !isPublishedInsight(post)) notFound();

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
            description: post.seoDescription ?? post.excerpt,
            datePublished: post.publishedAt,
            dateModified: post.modifiedAt,
            author: { "@type": "Organization", name: post.author },
            publisher: { "@id": `${SITE.url}/#organization` },
            mainEntityOfPage: `${SITE.url}${path}`,
            ...(post.image && post.imageAlt
              ? {
                  image: post.image.startsWith("http")
                    ? post.image
                    : `${SITE.url}${post.image}`,
                }
              : {}),
            ...(post.wordCount
              ? { wordCount: post.wordCount, inLanguage: "en-US" }
              : {}),
          },
        ]}
      />
      <InsightDetailView post={post} />
    </>
  );
}
