"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { FOOTER_CTA_BUTTON_COPY } from "@/lib/content/layout";

import { useLead } from "@/components/leads/lead-provider";
import { ArrowUpRightIcon } from "@animateicons/react/lucide/arrow-up-right-icon";
import { Button } from "@/components/ui/button";

interface FooterCtaButtonProps {
  onStartProject?: () => void;
}

export function FooterCtaButton({ onStartProject }: FooterCtaButtonProps) {
  const { openLead } = useLead();

  const handleStart = () => {
    if (onStartProject) onStartProject();
    else openLead({ source: "footer" });
  };

  return (
    <Button size="lg" onClick={handleStart} className="w-full group">
      <span>{FOOTER_CTA_BUTTON_COPY.startAProject}</span>
      <AnimatedIcon icon={ArrowUpRightIcon} size={16} className="text-primary-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Button>
  );
}
