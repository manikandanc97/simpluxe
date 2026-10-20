"use client";

import { StaticIcon } from "@/components/ui/static-icon";
import { FOOTER_CTA_BUTTON_COPY } from "@/lib/content/layout";

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
      <StaticIcon name="arrow-up-right" size={16} className="text-primary-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Button>
  );
}
