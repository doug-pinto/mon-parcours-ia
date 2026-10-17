"use client";

import { scrollToHash } from "@/lib/scroll";

type Props = React.ComponentProps<"a"> & { href: `#${string}` };

export function AnchorLink({ href, onClick, children, ...rest }: Props) {
  return (
    <a
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
        if (!document.querySelector(href)) return;
        e.preventDefault();
        // Laisse React appliquer onClick (ex. fermeture du menu mobile) avant de mesurer la position cible.
        requestAnimationFrame(() => requestAnimationFrame(() => scrollToHash(href)));
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
