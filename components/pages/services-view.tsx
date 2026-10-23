import { ServicesHero } from "@/components/services/services-hero";
import { ServicesExplorer } from "@/components/services/services-explorer";
import { SERVICES_LIST } from "@/lib/data/services";

export function ServicesView() {
  return (
    <>
      <ServicesHero />
      <ServicesExplorer service={SERVICES_LIST[0]} showDetailLink />
    </>
  );
}
