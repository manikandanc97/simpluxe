"use client";

import { FooterAnimatedBadge, type FooterIconName } from "./footer-animated-badge";
import { NAV_ITEMS } from "@/lib/data/layout";
import { FOOTER_DATA } from "@/lib/data/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FooterNav() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-4.5">
      {NAV_ITEMS.map((item) => {
        const iconName = (FOOTER_DATA.navIcons[item.route] || "home") as FooterIconName;
        const isActive = pathname === item.route || (item.route !== "/" && pathname?.startsWith(item.route));
        return (
          <li key={item.route}>
            <Link
              href={item.route}
              className={cn("group text-sm transition-colors inline-flex items-center gap-4", isActive ? "text-primary" : "text-muted-foreground hover:text-foreground")}
            >
              <FooterAnimatedBadge name={iconName} isActive={isActive} />
              <span className={cn("font-medium transition-colors group-hover:text-primary", isActive && "font-bold text-primary")}>
                {item.label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
