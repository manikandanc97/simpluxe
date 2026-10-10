"use client";

import { LEAD_DIALOG_COPY } from "@/lib/content/leads";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { type LeadInput } from "@/lib/leads/schema";
import { LeadForm } from "./lead-form";

interface LeadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prefill?: Partial<LeadInput>;
}

export function LeadDialog({ open, onOpenChange, prefill }: LeadDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl md:max-w-2xl lg:max-w-3xl w-full max-h-dialog overflow-y-auto overflow-x-hidden p-6 flex flex-col gap-4">
        <DialogHeader className="text-left flex flex-col gap-2">
          <DialogTitle className="text-2xl font-bold tracking-tight">
            {LEAD_DIALOG_COPY.startAProject}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {LEAD_DIALOG_COPY.tellUsWhatYouWantTo}</DialogDescription>
        </DialogHeader>

        <LeadForm prefill={prefill} />
      </DialogContent>
    </Dialog>
  );
}
