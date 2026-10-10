import { NOT_FOUND_COPY } from "@/lib/content/ui";
import { buttonVariants } from "@/components/ui/button-variants";
import Link from "next/link";
import { HouseIcon } from "@animateicons/react/lucide/house-icon";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-status gap-6 text-center px-4">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{NOT_FOUND_COPY.text404PageNot}<span className="text-primary">{NOT_FOUND_COPY.found}</span></h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          {NOT_FOUND_COPY.theRequestedPageDoesnTExist}</p>
      </div>
      <Link href="/" className={buttonVariants({ variant: "default", size: "lg", className: "gap-2" })}>
        <HouseIcon size={16} />
        <span>{NOT_FOUND_COPY.backToHome}</span>
      </Link>
    </div>
  );
}
