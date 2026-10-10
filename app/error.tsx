"use client";

import { ERROR_COPY } from "@/lib/content/ui";

import { Button } from "@/components/ui/button";
import { RefreshCwIcon } from "@animateicons/react/lucide/refresh-cw-icon";
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
    <div className="flex flex-col items-center justify-center min-h-status gap-6 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{ERROR_COPY.somethingWent}<span className="text-primary">{ERROR_COPY.wrong}</span></h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          {ERROR_COPY.weEncounteredAnUnexpectedError}</p>
      </div>
      <Button onClick={() => reset()} className="gap-2">
        <RefreshCwIcon size={16} />
        <span>{ERROR_COPY.tryAgain}</span>
      </Button>
    </div>
  );
}
