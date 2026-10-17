"use client";

import { useEffect, useId, useRef } from "react";

type Props = { title: string; onClose: () => void; maxWidth: string; children: React.ReactNode };

export function Modal({ title, onClose, maxWidth, children }: Props) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[oklch(0.16_0_0/0.55)] p-5"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full overflow-y-auto rounded-[20px] bg-surface p-9 outline-none"
        style={{ maxWidth }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-4 top-4 cursor-pointer text-xl text-muted"
        >
          ✕
        </button>
        <span id={titleId} className="sr-only">{title}</span>
        {children}
      </div>
    </div>
  );
}
