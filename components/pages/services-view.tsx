import { Hero } from "@/components/services/hero";
import { Explorer } from "@/components/services/explorer";
import { SERVICES_LIST } from "@/lib/data/services";

export function ServicesView() {
  return (
    <>
      <Hero />
      <Explorer service={SERVICES_LIST[0]} showDetailLink />
    </>
  );
}
