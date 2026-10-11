"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import { DialogSkeleton } from "./dialog-skeleton";

const CommandPaletteModal = lazy(() => import("./command-palette-modal").then((mod) => ({ default: mod.CommandPaletteModal })));

interface CommandPaletteProps {
  onStartProject?: () => void;
}

export function CommandPalette({ onStartProject }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [hasEverOpened, setHasEverOpened] = useState(false);

  // Keyboard shortcut: Cmd/Ctrl + K only
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
        setHasEverOpened(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!hasEverOpened) return null;

  return (
    <Suspense fallback={<DialogSkeleton open={open} onOpenChange={setOpen} />}>
    <CommandPaletteModal
      open={open}
      onOpenChange={setOpen}
      onStartProject={onStartProject}
    />
    </Suspense>
  );
}
