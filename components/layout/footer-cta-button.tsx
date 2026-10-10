"use client";

import { FOOTER_CTA_BUTTON_COPY } from "@/lib/content/layout";

import { useLead } from "@/components/leads/lead-provider";
import { ArrowRightIcon } from "@animateicons/react/lucide/arrow-right-icon";
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
      <ArrowRightIcon size={16} className="text-primary-foreground group-hover:translate-x-1 transition-transform" />
    </Button>
  );
}
