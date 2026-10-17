"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

export type ModalName = "download" | "signup";

type ModalContextValue = {
  current: ModalName | null;
  open: (modal: ModalName) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState<ModalName | null>(null);
  const open = useCallback((modal: ModalName) => setCurrent(modal), []);
  const close = useCallback(() => setCurrent(null), []);
  const value = useMemo(() => ({ current, open, close }), [current, open, close]);
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal doit être utilisé dans <ModalProvider>");
  return ctx;
}
