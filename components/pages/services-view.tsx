import { ServicesHero } from "@/components/services/services-hero";
import { ServicesExplorer } from "@/components/services/services-explorer";
import { SERVICES_LIST } from "@/lib/data/services";

export function ServicesView() {
  const services = SERVICES_LIST.map(({ icon, ...service }) => {
    void icon;
    return service;
  });

  return (
    <>
      <ServicesHero />
      <ServicesExplorer services={services} />
    </>
  );
}
