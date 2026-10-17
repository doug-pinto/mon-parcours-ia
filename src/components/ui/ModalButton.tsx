"use client";

import { useModal, type ModalName } from "@/components/modals/ModalProvider";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-hover",
  accent: "bg-accent text-white hover:bg-accent-hover",
  outline: "border-[1.5px] border-line-btn bg-transparent text-brand hover:bg-surface-2",
  outlineOnLight: "border-[1.5px] border-line-btn bg-transparent text-brand hover:bg-surface",
  outlineOnDark: "border-[1.5px] border-[oklch(0.4_0_0)] bg-transparent text-white hover:bg-brand-deep",
} as const;

const sizes = {
  lg: "rounded-xl px-[26px] py-4 text-[15.5px]",
  sm: "rounded-[10px] px-5 py-2.5 text-sm",
} as const;

type Props = {
  modal: ModalName;
  variant: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

export function ModalButton({ modal, variant, size = "lg", className = "", children }: Props) {
  const { open } = useModal();
  return (
    <button
      type="button"
      onClick={() => open(modal)}
      className={`cursor-pointer font-bold ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
