import { cn } from "@/lib/utils";
import { LOADING_COPY } from "@/lib/data/ui";
import type { HTMLAttributes, ReactNode } from "react";

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div aria-hidden="true" {...props} className={cn("rounded-xl bg-surface-elevated motion-safe:animate-pulse", className)} />;
}

function LoadingRegion({ children, className }: { children: ReactNode; className?: string }) {
  return <div role="status" aria-busy="true" className={className}><span className="sr-only">{LOADING_COPY.loading}</span><div aria-hidden="true">{children}</div></div>;
}

export function MockupSkeleton() {
  return <LoadingRegion className="w-full max-w-72"><Skeleton className="h-62.5 rounded-3xl" /></LoadingRegion>;
}

export function ShowcaseSkeleton() {
  return (
    <LoadingRegion className="w-full">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-3">{Array.from({ length: 4 }, (_, i) => <Skeleton key={i} className="h-10 w-28 rounded-full" />)}</div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5 flex flex-col gap-4">{Array.from({ length: 4 }, (_, i) => <Skeleton key={i} className="h-24 w-full" />)}</div>
          <Skeleton className="lg:col-span-7 lg:h-150 h-96 w-full rounded-3xl" />
        </div>
      </div>
    </LoadingRegion>
  );
}

export function ProcessSkeleton() {
  return <LoadingRegion className="w-full"><div className="grid grid-cols-1 gap-8 lg:grid-cols-2"><div className="flex flex-col gap-4"><Skeleton className="h-12 w-3/4" /><Skeleton className="h-24 w-full" /><Skeleton className="h-48 w-full" /></div><Skeleton className="h-96 w-full rounded-3xl" /></div></LoadingRegion>;
}

export function TechStackSkeleton() {
  return <LoadingRegion className="w-full"><div className="flex flex-col gap-8"><Skeleton className="h-12 w-full max-w-2xl self-center rounded-full" /><div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">{Array.from({ length: 8 }, (_, i) => <Skeleton key={i} className="h-44" />)}</div></div></LoadingRegion>;
}

export function PageSkeleton() {
  return <LoadingRegion className="container w-full px-6 pt-32 pb-16"><div className="flex flex-col gap-16"><div className="flex flex-col gap-6"><Skeleton className="h-5 w-32" /><Skeleton className="h-16 w-full max-w-2xl" /><Skeleton className="h-6 w-full max-w-xl" /><Skeleton className="h-12 w-40 rounded-full" /></div><ProcessSkeleton /></div></LoadingRegion>;
}
