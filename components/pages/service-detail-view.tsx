import { Explorer } from "@/components/services/explorer";
import { ServiceFaq } from "@/components/services/service-faq";
import { PageHero } from "@/components/ui/page-hero";
import { COMMON } from "@/lib/data/common";
import {
  SERVICE_DETAIL_PAGE_COPY,
  getRelatedServices,
  type ServiceSeoData,
  type ServiceViewData,
} from "@/lib/data/services";

export function ServiceDetailView({
  service,
  seo,
}: {
  service: ServiceViewData;
  seo: ServiceSeoData;
}) {
  const relatedServices = getRelatedServices(service.id);

  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/expertise", label: COMMON.pages.expertise }]}
        currentPage={service.name}
        heading={
          <>
            {seo.heading}.{" "}
            <span className="text-white/80">
              {SERVICE_DETAIL_PAGE_COPY.craftsmanship}
            </span>
          </>
        }
        description={service.shortTagline}
      />
      <Explorer service={service} />
      <ServiceFaq faqs={service.faqs} relatedServices={relatedServices} />
    </>
  );
}
