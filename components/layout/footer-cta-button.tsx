"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { FOOTER_CTA_BUTTON_COPY } from "@/lib/data/layout";

import { useLead } from "@/components/leads/lead-provider";
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
      <AnimatedIcon name="arrow-up-right" size={16} className="text-primary-foreground" />
    </Button>
  );
}
