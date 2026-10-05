"use client";

import { useState, useEffect } from "react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { AnimatedX } from "@/components/ui/animated-icons/convenience-icons";
import { ExternalLinkIcon } from "@animateicons/react/lucide/external-link-icon";
import { type Project } from "@/types/project";
import { ImageIcon as ImageIcon } from "@animateicons/react/lucide";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface WorkFullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export function WorkFullscreenModal({ isOpen, onClose, project }: WorkFullscreenModalProps) {
  if (!isOpen || !project) return null;

  const isWebsite = project.serviceType === "Websites" && Boolean(project.url);
  const [modalMode, setModalMode] = useState<"live" | "screenshot">(isWebsite ? "live" : "screenshot");

  useEffect(() => {
    setModalMode(isWebsite ? "live" : "screenshot");
  }, [project.id, isWebsite]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/85 backdrop-blur-md p-2 sm:p-6 animate-in fade-in duration-200">
      <div className="flex-1 w-full bg-[var(--foreground)] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/10">
        {/* Fullscreen Header */}
        <div className="h-12 bg-[var(--foreground)] border-b border-white/10 px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Traffic Dots + Project Info */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
              <div className="w-3 h-3 rounded-full bg-[var(--chart-5)]" />
            </div>
            <span className="text-xs font-bold text-white truncate ml-1">
              {project.name}
            </span>
            <span className="text-xs font-mono text-muted-foreground hidden md:inline truncate">
              ({project.domain || project.serviceType})
            </span>
          </div>

          {/* Center Mode Switch for Websites */}
          {isWebsite && (
            <div className="hidden sm:flex items-center bg-black/40 border border-white/10 p-0.5 rounded-full text-xs font-bold">
              <button
                type="button"
                onClick={() => setModalMode("live")}
                className={cn(
                  "px-4 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5",
                  modalMode === "live"
                    ? "bg-white text-emerald-800 shadow-sm"
                    : "text-muted-foreground hover:text-white"
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Site</span>
              </button>
              <button
                type="button"
                onClick={() => setModalMode("screenshot")}
                className={cn(
                  "px-4 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5",
                  modalMode === "screenshot"
                    ? "bg-white text-primary shadow-sm"
                    : "text-muted-foreground hover:text-white"
                )}
              >
                <ImageIcon size={11} />
                <span>Screenshot</span>
              </button>
            </div>
          )}

          {/* Right Actions: External Link & Close */}
          <div className="flex items-center gap-2 shrink-0">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors"
                title="Open in new window"
              >
                <span className="hidden xs:inline">Open New Tab</span>
                <AnimatedIcon icon={ExternalLinkIcon} size={11} />
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <AnimatedX size={16} />
            </button>
          </div>
        </div>

        {/* Viewport: Live Iframe or High-Res Screenshot */}
        <div className="flex-1 w-full bg-[var(--foreground)] relative overflow-auto flex items-center justify-center">
          {modalMode === "live" && isWebsite ? (
            <iframe
              src={project.url}
              className="w-full h-full border-none bg-white"
              title={`${project.name} Fullscreen Live Preview`}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              loading="lazy"
            />
          ) : (project.desktopImage || project.mobileImage) ? (
            <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-6 overflow-auto">
              {/* Ambient Glow */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 blur-3xl scale-110 pointer-events-none"
                style={{ backgroundImage: `url(${project.desktopImage || project.mobileImage})` }}
              />
              <Image
                src={(project.desktopImage || project.mobileImage)!}
                alt={`${project.name} High Resolution Preview`}
                fill
                sizes="(max-width: 1200px) 100vw, 80vw"
                className="relative z-10 object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
              <ImageIcon size={36} className="mb-2 opacity-50" />
              <p className="text-sm font-medium">No preview image available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
