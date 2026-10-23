import { StaticIcon } from "@/components/ui/static-icon";
import { NOT_FOUND_COPY } from "@/lib/data/ui";
import { buttonVariants } from "@/components/ui/button-variants";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex w-full justify-center px-4 py-12 sm:py-16">
      <div className="flex w-full max-w-xl flex-col items-center gap-6 rounded-3xl border border-primary/15 bg-white p-8 text-center shadow-card sm:p-10">
        <div className="flex flex-col items-center gap-4">
          <span className="rounded-full bg-secondary px-4 py-1.5 font-mono text-xs font-bold tracking-widest text-primary">
            {NOT_FOUND_COPY.errorCode}
          </span>
          <div className="flex flex-col items-center gap-2">
            <h1 className="type-h2 text-heading">
              {NOT_FOUND_COPY.pageNot} <span className="text-primary">{NOT_FOUND_COPY.found}</span>
            </h1>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
              {NOT_FOUND_COPY.theRequestedPageDoesnTExist}
            </p>
          </div>
        </div>
        <Link href="/" className={buttonVariants({ variant: "default", className: "gap-2" })}>
          <StaticIcon name="home" size={15} />
          <span>{NOT_FOUND_COPY.backToHome}</span>
        </Link>
      </div>
    </section>
  );
}
