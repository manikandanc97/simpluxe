"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CommandPaletteModal = dynamic(
  () => import("./command-palette-modal").then((mod) => mod.CommandPaletteModal),
  { ssr: false }
);

interface CommandPaletteProps {
  onStartProject?: () => void;
}

export function CommandPalette({ onStartProject }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
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

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted || !hasEverOpened) return null;

  return (
    <CommandPaletteModal
      open={open}
      onOpenChange={setOpen}
      onStartProject={onStartProject}
    />
  );
}
