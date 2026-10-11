"use client";

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./dialog";
import { Skeleton } from "./skeleton";
import { LOADING_COPY } from "@/lib/content/ui";

export function DialogSkeleton({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl p-6">
        <DialogTitle className="sr-only">{LOADING_COPY.loading}</DialogTitle>
        <DialogDescription className="sr-only">{LOADING_COPY.loading}</DialogDescription>
        <div role="status" aria-busy="true" className="flex flex-col gap-5">
          <span className="sr-only">{LOADING_COPY.loading}</span>
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-12 w-36 rounded-full" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
