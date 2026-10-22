import { CustomSoftwareHero } from "@/components/services/custom-software/custom-software-hero";
import { CustomSoftwareProblems } from "@/components/services/custom-software/custom-software-problems";
import { CustomSoftwareCapabilities } from "@/components/services/custom-software/custom-software-capabilities";
import { CustomSoftwareProcess } from "@/components/services/custom-software/custom-software-process";
import { CustomSoftwareWork } from "@/components/services/custom-software/custom-software-work";
import { CustomSoftwareTech } from "@/components/services/custom-software/custom-software-tech";
import { CustomSoftwareFaq } from "@/components/services/custom-software/custom-software-faq";
import { CustomSoftwareCta } from "@/components/services/custom-software/custom-software-cta";

export function CustomSoftwareView() {
  return (
    <>
      <CustomSoftwareHero />
      <CustomSoftwareProblems />
      <CustomSoftwareCapabilities />
      <CustomSoftwareProcess />
      <CustomSoftwareWork />
      <CustomSoftwareTech />
      <CustomSoftwareFaq />
      <CustomSoftwareCta />
    </>
  );
}
