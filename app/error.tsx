"use client";

import { StaticIcon } from "@/components/ui/static-icon";
import { ERROR_COPY } from "@/lib/data/ui";

import { Button } from "@/components/ui/button";
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
      <div className="flex flex-col gap-2">
        <h1 className="type-h1">{ERROR_COPY.somethingWent}<span className="text-primary">{ERROR_COPY.wrong}</span></h1>
        <p className="max-w-md self-center text-lg text-muted-foreground">
          {ERROR_COPY.weEncounteredAnUnexpectedError}</p>
      </div>
      <Button onClick={() => reset()} className="gap-2">
        <StaticIcon name="refresh" size={16} />
        <span>{ERROR_COPY.tryAgain}</span>
      </Button>
    </div>
  );
}
