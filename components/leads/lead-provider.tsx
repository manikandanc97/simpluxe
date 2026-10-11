"use client";

import { type LeadInput } from "@/lib/leads/schema";
import { createContext, lazy, Suspense, useContext, useState, type ReactNode } from "react";
import { DialogSkeleton } from "@/components/ui/dialog-skeleton";

const LeadDialog = lazy(() => import("./lead-dialog").then((mod) => ({ default: mod.LeadDialog })));

interface LeadContextType {
  openLead: (prefill?: Partial<LeadInput>) => void;
  closeLead: () => void;
  isOpen: boolean;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [prefill, setPrefill] = useState<Partial<LeadInput> | undefined>(undefined);

  const openLead = (data?: Partial<LeadInput>) => {
    setPrefill(data);
    setHasOpened(true);
    setOpen(true);
  };

  const closeLead = () => {
    setOpen(false);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) setHasOpened(true);
    setOpen(nextOpen);
  };

  return (
    <LeadContext.Provider value={{ openLead, closeLead, isOpen: open }}>
      {children}
      {hasOpened && (
        <Suspense fallback={<DialogSkeleton open={open} onOpenChange={handleOpenChange} />}>
          <LeadDialog open={open} onOpenChange={handleOpenChange} prefill={prefill} />
        </Suspense>
      )}
    </LeadContext.Provider>
  );
}

export function useLead() {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error("useLead must be used within a LeadProvider");
  }
  return context;
}
