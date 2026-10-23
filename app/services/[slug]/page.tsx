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
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES_LIST.filter((service) => service.id !== "custom-software").map(
    (service) => ({ slug: getServiceSlug(service.id) })
  );
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || service.id === "custom-software") return {};

  return createPageMetadata({
    title: SERVICE_DETAIL_PAGE_COPY.metadataTitle(service.name),
    description: service.description,
    path: getServicePath(service.id),
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || service.id === "custom-software") notFound();

  const { icon, ...viewService } = service;
  void icon;
  const path = getServicePath(service.id);

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: COMMON.pages.home, path: "/" },
            { name: COMMON.pages.services, path: "/services" },
            { name: service.name, path },
          ]),
          getServiceSchema(service),
        ]}
      />
      <ServiceDetailView service={viewService} />
    </>
  );
}
