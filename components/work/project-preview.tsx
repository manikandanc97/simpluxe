import { cn } from "@/lib/utils";

interface ProjectPreviewProps {
  name: string;
  category: string;
  result: string;
  stack: readonly string[];
  compact?: boolean;
  className?: string;
}

export function ProjectPreview({
  name,
  category,
  result,
  stack,
  compact = false,
  className,
}: ProjectPreviewProps) {
  return (
    <div className={cn("relative flex h-full w-full overflow-hidden bg-slate-100", className)}>
      <div className="flex w-full flex-col gap-4 p-5 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-2xs font-bold uppercase tracking-widest text-primary">
            {category.split("·")[0].trim()}
          </span>
          <span className="size-2 rounded-full bg-emerald-500" />
        </div>

        <div className={cn("flex flex-1 flex-col justify-center gap-4", compact && "gap-3")}>
          <div className="flex max-w-xl flex-col gap-2">
            <span className="h-2 w-16 rounded-full bg-primary/25" />
            <strong className={cn("text-2xl font-black tracking-tight text-heading sm:text-4xl", compact && "text-xl sm:text-2xl")}>
              {name}
            </strong>
            <p className="text-sm font-semibold text-muted-foreground">{result}</p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {stack.slice(0, 3).map((technology, index) => (
              <span
                key={technology}
                className={cn(
                  "flex min-h-14 items-end rounded-lg border border-white bg-white p-3 text-2xs font-bold text-heading shadow-2xs",
                  index === 0 && "col-span-2"
                )}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-primary/10 blur-2xl" />
    </div>
  );
}
