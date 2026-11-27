import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/shared/json-ld";
import { ServiceDetailView } from "@/components/pages/service-detail-view";
import { COMMON } from "@/lib/data/common";
import {
  getServiceBySlug,
  getServicePath,
  getServiceSeo,
  getServiceSlug,
  SERVICES_LIST,
} from "@/lib/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getFaqPageSchema, getServiceSchema } from "@/lib/schema";

type ExpertisePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({ slug: getServiceSlug(service.id) }));
}

export async function generateMetadata({ params }: ExpertisePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const seo = getServiceSeo(service.id);
  if (!seo) return {};

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    path: getServicePath(service.id),
  });
}

export default async function ExpertiseDetailPage({ params }: ExpertisePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const { icon, ...viewService } = service;
  void icon;
  const path = getServicePath(service.id);
  const seo = getServiceSeo(service.id);
  if (!seo) notFound();

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: COMMON.pages.home, path: "/" },
            { name: COMMON.pages.expertise, path: "/expertise" },
            { name: service.name, path },
          ]),
          getServiceSchema(service),
          getFaqPageSchema(service.faqs),
        ]}
      />
      <ServiceDetailView service={viewService} seo={seo} />
    </>
  );
}
