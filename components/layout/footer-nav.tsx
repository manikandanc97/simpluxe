"use client";

import { House, Briefcase, Layers, Info, Mail, Sparkles } from "lucide-react";
import { NAV_ITEMS } from "@/lib/content/navigation";
import { FOOTER_DATA } from "@/lib/content/footer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LUCIDE_ICON_MAP: Record<string, React.ElementType> = {
  home: House,
  briefcase: Briefcase,
  layers: Layers,
  info: Info,
  mail: Mail,
  sparkles: Sparkles,
};

export function FooterNav() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-4.5">
      {NAV_ITEMS.map((item) => {
        const iconName = FOOTER_DATA.navIcons[item.route] || "sparkles";
        const Icon = LUCIDE_ICON_MAP[iconName] || Sparkles;
        const isActive = pathname === item.route || (item.route !== "/" && pathname?.startsWith(item.route));
        return (
          <li key={item.route}>
            <Link
              href={item.route}
              className={cn("group text-sm transition-colors inline-flex items-center gap-4", isActive ? "text-primary" : "text-muted-foreground hover:text-foreground")}
            >
              <span className={cn("w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors", isActive ? "bg-primary text-white shadow-sm" : "bg-primary/10 text-primary group-hover:bg-primary/20")}>
                <Icon
                  size={13}
                  className="text-current transition-transform group-hover:scale-110"
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
