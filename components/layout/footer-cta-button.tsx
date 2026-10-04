"use client";

import { useLead } from "@/components/leads/lead-provider";
import { ArrowRight } from "lucide-react";
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
    <Button onClick={handleStart} className="w-full h-12 group">
      <span>Start a project</span>
      <ArrowRight size={16} className="text-primary-foreground group-hover:translate-x-1 transition-transform" />
    </Button>
  );
}
