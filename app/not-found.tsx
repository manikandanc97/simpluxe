import { StaticIcon } from "@/components/ui/static-icon";
import { NOT_FOUND_COPY } from "@/lib/data/ui";
import { buttonVariants } from "@/components/ui/button-variants";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-status gap-6 text-center px-4">
      <div className="space-y-2">
        <h1 className="type-h1">{NOT_FOUND_COPY.text404PageNot}<span className="text-primary">{NOT_FOUND_COPY.found}</span></h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          {NOT_FOUND_COPY.theRequestedPageDoesnTExist}</p>
      </div>
      <Link href="/" className={buttonVariants({ variant: "default", size: "lg", className: "gap-2" })}>
        <StaticIcon name="home" size={16} />
        <span>{NOT_FOUND_COPY.backToHome}</span>
      </Link>
    </div>
  );
}
