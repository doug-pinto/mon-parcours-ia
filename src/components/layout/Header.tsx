"use client";

import { useState } from "react";
import { ModalButton } from "@/components/ui/ModalButton";
import { useModal } from "@/components/modals/ModalProvider";
import { AnchorLink } from "./AnchorLink";
import { Logo } from "./Logo";
import { navLinks } from "./nav";

const linkClass = "whitespace-nowrap text-[14.5px] font-semibold text-brand";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useModal();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-6 px-[clamp(20px,4vw,56px)] py-[18px]">
        <AnchorLink href="#hero" aria-label="Mon Parcours IA — accueil" className="text-ink hover:text-ink">
          <Logo />
        </AnchorLink>
        <nav aria-label="Navigation principale" className="hidden flex-1 items-center justify-center gap-[clamp(10px,2vw,28px)] lg:flex">
          {navLinks.map((l) => (
            <AnchorLink key={l.href} href={l.href as `#${string}`} className={linkClass}>{l.label}</AnchorLink>
          ))}
        </nav>
        <div className="flex shrink-0 gap-2.5">
          <ModalButton modal="download" variant="outline" size="sm" className="hidden sm:block">Télécharger</ModalButton>
          <ModalButton modal="signup" variant="primary" size="sm">S&apos;inscrire</ModalButton>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] border-[1.5px] border-line-strong text-brand lg:hidden"
          >
            <span aria-hidden="true" className="text-xl leading-none">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Menu mobile" className="flex flex-col gap-1 border-t border-line px-[clamp(20px,4vw,56px)] py-3 lg:hidden">
          {navLinks.map((l) => (
            <AnchorLink key={l.href} href={l.href as `#${string}`} onClick={() => setMenuOpen(false)} className={`${linkClass} py-2.5`}>{l.label}</AnchorLink>
          ))}
          <button
            type="button"
            onClick={() => { setMenuOpen(false); open("download"); }}
            className={`${linkClass} cursor-pointer py-2.5 text-left sm:hidden`}
          >
            Télécharger le programme
          </button>
        </nav>
      )}
    </header>
  );
}
