import { Explorer } from "@/components/services/explorer";
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
        breadcrumbs={[{ href: "/expertise", label: COMMON.pages.expertise }]}
        currentPage={service.name}
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
      <Explorer service={service} />
    </>
  );
}
