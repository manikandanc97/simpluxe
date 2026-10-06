import { type Project } from "@/types/project";
import { TrendingUpIcon } from "@animateicons/react/lucide/trending-up-icon";
import { ShoppingCartIcon } from "@animateicons/react/lucide/shopping-cart-icon";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import type { ReactNode } from "react";

function GoogleIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  );
}

interface ProjectBadgeInfo {
  bg: string;
  text: string;
  icon: ReactNode;
  label: string;
}

export function getProjectBadge(project: Project): ProjectBadgeInfo {
  if (project.id === "proj-valparai") {
    return {
      bg: "bg-rose-50 border border-rose-100 shadow-sm",
      text: "text-rose-700",
      icon: <AnimatedIcon icon={TrendingUpIcon} size={12} className="text-rose-600" />,
      label: "3.5x Bookings Growth",
    };
  }
  if (project.id === "proj-grn") {
    return {
      bg: "bg-indigo-50 border border-indigo-100 shadow-sm",
      text: "text-indigo-700",
      icon: <GoogleIcon />,
      label: "5x Organic Traffic Growth",
    };
  }
  if (project.id === "proj-viha") {
    return {
      bg: "bg-violet-50 border border-violet-100 shadow-sm",
      text: "text-violet-700",
      icon: <AnimatedIcon icon={ShoppingCartIcon} size={11} className="text-violet-600" />,
      label: "10k+ Monthly Orders",
    };
  }
  if (project.id === "proj-clixprocrm") {
    return {
      bg: "bg-blue-50 border border-blue-100 shadow-sm",
      text: "text-blue-700",
      icon: <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />,
      label: "Work In Progress",
    };
  }
  if (project.id === "proj-grn-app") {
    return {
      bg: "bg-purple-50 border border-purple-100 shadow-sm",
      text: "text-purple-700",
      icon: <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />,
      label: "Coming Soon",
    };
  }
  return {
    bg: "bg-slate-50 border border-slate-200 shadow-sm",
    text: "text-slate-700",
    icon: null,
    label: project.result,
  };
}
