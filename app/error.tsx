"use client";

import { Button } from "@/components/ui/button";
import { RefreshCwIcon } from "@animateicons/react/lucide";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Something went <span className="text-primary">wrong</span></h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          We encountered an unexpected error.
        </p>
      </div>
      <Button onClick={() => reset()} className="gap-2">
        <RefreshCwIcon size={16} />
        <span>Try again</span>
      </Button>
    </div>
  );
}
