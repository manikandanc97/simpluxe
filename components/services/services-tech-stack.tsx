"use client";

import { CldImage } from "next-cloudinary";
import { type ServiceData } from "@/lib/content/services";
import { motion, AnimatePresence } from "motion/react";

interface ServicesTechStackProps {
  service: ServiceData;
}

const TECH_DETAILS: Record<string, { name: string; category: string; invertDark?: boolean }> = {
  // Core Frameworks & Languages
  nextjs: { name: "Next.js", category: "core", invertDark: true },
  react: { name: "React", category: "core" },
  typescript: { name: "TypeScript", category: "core" },
  tailwindcss: { name: "Tailwind CSS", category: "core" },
  reactnative: { name: "React Native", category: "core" },
  flutter: { name: "Flutter", category: "core" },
  expo: { name: "Expo", category: "core", invertDark: true },
  swift: { name: "Swift", category: "core" },
  kotlin: { name: "Kotlin", category: "core" },
  
  // Backend & Infrastructure
  supabase: { name: "Supabase", category: "infrastructure" },
  vercel: { name: "Vercel", category: "infrastructure", invertDark: true },
  cloudflare: { name: "Cloudflare", category: "infrastructure" },
  nodejs: { name: "Node.js", category: "infrastructure" },
  postgresql: { name: "PostgreSQL", category: "infrastructure" },
  prisma: { name: "Prisma", category: "infrastructure", invertDark: true },
  docker: { name: "Docker", category: "infrastructure" },
  stripe: { name: "Stripe", category: "infrastructure" },
  razorpay: { name: "Razorpay", category: "infrastructure" },
  redis: { name: "Redis", category: "infrastructure" },
  firebase: { name: "Firebase", category: "infrastructure" },
  python: { name: "Python", category: "infrastructure" },
  fastapi: { name: "FastAPI", category: "infrastructure" },
  aws: { name: "AWS", category: "infrastructure" },
  
  // AI & Machine Learning
  openai: { name: "OpenAI", category: "ai", invertDark: true },
  anthropic: { name: "Anthropic", category: "ai" },
  langchain: { name: "LangChain", category: "ai" },

  // Design & Prototyping
  figma: { name: "Figma", category: "design" },
  illustrator: { name: "Illustrator", category: "design" },
  photoshop: { name: "Photoshop", category: "design" },
  canva: { name: "Canva", category: "design" },
};

const CATEGORY_TITLES: Record<string, string> = {
  core: "Core Frameworks & Languages",
  infrastructure: "Backend & Infrastructure",
  ai: "AI & Machine Learning",
  design: "Design & Prototyping",
};

const ColorMap: Record<string, { text: string; bg: string; hoverBorder: string; hoverText: string }> = {
  websites: { text: "text-primary", bg: "bg-primary", hoverBorder: "hover:border-primary/30", hoverText: "group-hover:text-primary" },
  "web-apps": { text: "text-[var(--chart-2)]", bg: "bg-[var(--chart-2)]", hoverBorder: "hover:border-[var(--chart-2)]/30", hoverText: "group-hover:text-[var(--chart-2)]" },
  ecommerce: { text: "text-[var(--chart-3)]", bg: "bg-[var(--chart-3)]", hoverBorder: "hover:border-[var(--chart-3)]/30", hoverText: "group-hover:text-[var(--chart-3)]" },
  "mobile-apps": { text: "text-[var(--primary)]", bg: "bg-[var(--primary)]", hoverBorder: "hover:border-[var(--primary)]/30", hoverText: "group-hover:text-[var(--primary)]" },
  saas: { text: "text-[var(--chart-2)]", bg: "bg-[var(--chart-2)]", hoverBorder: "hover:border-[var(--chart-2)]/30", hoverText: "group-hover:text-[var(--chart-2)]" },
  branding: { text: "text-[var(--chart-4)]", bg: "bg-[var(--chart-4)]", hoverBorder: "hover:border-[var(--chart-4)]/30", hoverText: "group-hover:text-[var(--chart-4)]" },
  "ui-ux": { text: "text-[var(--chart-2)]", bg: "bg-[var(--chart-2)]", hoverBorder: "hover:border-[var(--chart-2)]/30", hoverText: "group-hover:text-[var(--chart-2)]" },
  automation: { text: "text-[var(--chart-5)]", bg: "bg-[var(--chart-5)]", hoverBorder: "hover:border-[var(--chart-5)]/30", hoverText: "group-hover:text-[var(--chart-5)]" },
  "custom-software": { text: "text-[var(--chart-1)]", bg: "bg-[var(--chart-1)]", hoverBorder: "hover:border-[var(--chart-1)]/30", hoverText: "group-hover:text-[var(--chart-1)]" },
};

export function ServicesTechStack({ service }: ServicesTechStackProps) {
  const colors = ColorMap[service.id] || ColorMap.websites;

  // Group technologies by category
  const categorizedTech = service.techStack.reduce((acc, slug) => {
    const tech = TECH_DETAILS[slug];
    if (tech) {
      if (!acc[tech.category]) acc[tech.category] = [];
      acc[tech.category].push({ slug, ...tech });
    }
    return acc;
  }, {} as Record<string, (typeof TECH_DETAILS[string] & { slug: string })[]>);

  // Define order of categories to display
  const categoryOrder = ["core", "infrastructure", "ai", "design"];

  return (
    <div className="w-full relative z-20">
      {/* ── Header ── */}
      <div className="flex flex-col gap-4 items-start text-left mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-border shadow-xs">
          <span className="w-2 h-2 rounded-full bg-primary inline-block" />
          <span className="type-label font-extrabold tracking-wide text-foreground/90 uppercase">
            Tech Stack
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight font-satoshi">
            Technology we use
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground font-normal">
            The right tools for the right solution, categorized by necessity.
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
          className="flex flex-col gap-8 sm:gap-10"
        >
          {categoryOrder.map((category) => {
            const techs = categorizedTech[category];
            if (!techs || techs.length === 0) return null;

            // First category gets fully opaque colors, subsequent ones get slightly muted styles
            const isFirst = category === categoryOrder.find((c) => categorizedTech[c]?.length > 0);

            return (
              <div key={category} className="flex flex-col gap-4">
                <h4 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${isFirst ? colors.bg : "bg-[var(--muted-foreground)]"} transition-colors duration-300`} />
                  {CATEGORY_TITLES[category]}
                </h4>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4.5">
                  {techs.map((tech) => (
                    <div
                      key={tech.slug}
                      className={`group flex items-center gap-2 px-4.5 sm:px-4 py-2 sm:py-2.5 rounded-full ${
                        isFirst ? "bg-white" : "bg-[var(--background)]/50"
                      } border border-[var(--surface-elevated)] ${colors.hoverBorder} shadow-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
                    >
                      <div className={`relative w-5 h-5 flex items-center justify-center shrink-0 ${!isFirst ? "opacity-80 group-hover:opacity-100" : ""} transition-opacity`}>
                        <CldImage
                          src={`simpluxe/tech/${tech.slug}`}
                          alt={tech.name}
                          width={20}
                          height={20}
                          className={`w-full h-full object-contain ${
                            !isFirst ? "grayscale group-hover:grayscale-0" : ""
                          } transition-all duration-300 ${tech.invertDark ? "dark:invert" : ""}`}
                        />
                      </div>
                      <span className={`text-xs sm:text-sm ${isFirst ? "font-bold text-foreground" : "font-semibold text-muted-foreground"} ${colors.hoverText} transition-colors duration-300`}>
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
