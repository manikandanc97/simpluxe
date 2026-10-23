import { ServicesExplorer } from "@/components/services/services-explorer";
import { PageHero } from "@/components/ui/page-hero";
import { COMMON } from "@/lib/data/common";
import {
  SERVICE_DETAIL_PAGE_COPY,
  type ServiceViewData,
} from "@/lib/data/services";

export function ServiceDetailView({ service }: { service: ServiceViewData }) {
  return (
    <>
      <PageHero
        homeLabel={COMMON.pages.home}
        currentPage={`${COMMON.pages.services} / ${service.tabLabel}`}
        heading={
          <>
            {service.name}.{" "}
            <span className="text-white/80">
              {SERVICE_DETAIL_PAGE_COPY.craftsmanship}
            </span>
          </>
        }
        description={service.shortTagline}
      />
      <ServicesExplorer service={service} />
    </>
  );
}
