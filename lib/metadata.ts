import type { Metadata } from "next";
import { CLOUDINARY_BRAND_MARK, cloudinaryImageUrl } from "@/lib/cloudinary";
import { LAYOUT_COPY } from "@/lib/data/metadata";
import { SITE } from "@/lib/data/site";

export const DEFAULT_OG_IMAGE = {
  url: cloudinaryImageUrl(CLOUDINARY_BRAND_MARK, { width: 800, format: "png" }),
  width: 800,
  height: 800,
  alt: LAYOUT_COPY.title,
  type: "image/png",
} as const;

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = title.includes(SITE.name) ? title : `${title} · ${SITE.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: LAYOUT_COPY.siteName,
      locale: "en_US",
      type: "website",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
