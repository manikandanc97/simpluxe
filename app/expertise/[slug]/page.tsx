import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/shared/json-ld";
import { ServiceDetailView } from "@/components/pages/service-detail-view";
import { COMMON } from "@/lib/data/common";
import {
  getServiceBySlug,
  getServicePath,
  getServiceSlug,
  SERVICE_DETAIL_PAGE_COPY,
  SERVICES_LIST,
} from "@/lib/data/services";
import { CUSTOM_SOFTWARE_PAGE_COPY } from "@/lib/data/metadata";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";

type ExpertisePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({ slug: getServiceSlug(service.id) }));
}

export async function generateMetadata({ params }: ExpertisePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const isCustomSoftware = service.id === "custom-software";
  return createPageMetadata({
    title: isCustomSoftware
      ? CUSTOM_SOFTWARE_PAGE_COPY.title
      : SERVICE_DETAIL_PAGE_COPY.metadataTitle(service.name),
    description: isCustomSoftware
      ? CUSTOM_SOFTWARE_PAGE_COPY.description
      : service.description,
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
        ]}
      />
      <ServiceDetailView service={viewService} />
    </>
  );
}
