"use client";

import { AnimatedIcon, type AnimatedIconName } from "@/components/ui/animated-icon";
import { NAV_ITEMS } from "@/lib/content/navigation";
import { FOOTER_DATA } from "@/lib/content/footer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FooterNav() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-4.5">
      {NAV_ITEMS.map((item) => {
        const iconName = (FOOTER_DATA.navIcons[item.route] || "sparkles") as AnimatedIconName;
        const isActive = pathname === item.route || (item.route !== "/" && pathname?.startsWith(item.route));
        return (
          <li key={item.route}>
            <Link
              href={item.route}
              className={cn("group text-sm transition-colors inline-flex items-center gap-4", isActive ? "text-primary" : "text-muted-foreground hover:text-foreground")}
            >
              <span className={cn("w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors", isActive ? "bg-primary text-white shadow-sm" : "bg-primary/10 text-primary group-hover:bg-primary/20")}>
                <AnimatedIcon
                  name={iconName}
                  size={13}
                  className="currentColor"
                />
              </span>
              <span className={cn("font-medium", isActive && "font-bold")}>{item.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
