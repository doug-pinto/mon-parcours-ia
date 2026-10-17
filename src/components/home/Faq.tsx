"use client";

import { useId, useState } from "react";
import { faq } from "@/data/faq";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <section id="faq" className="bg-surface-2 px-[clamp(20px,6vw,56px)] py-[clamp(50px,7vw,90px)]">
      <div className="mx-auto max-w-[780px]">
        <h2 className="mb-9 font-display text-[clamp(28px,3.4vw,40px)] font-extrabold tracking-[-0.02em]">Questions fréquentes</h2>
        {faq.map((f, i) => {
          const open = openIndex === i;
          return (
            <div key={f.q} className="border-b border-line-strong py-[18px]">
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`${baseId}-${i}`}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                >
                  <span className="font-display text-[16.5px] font-bold text-brand">{f.q}</span>
                  <span aria-hidden="true" className="shrink-0 text-xl font-extrabold text-accent">{open ? "−" : "+"}</span>
                </button>
              </h3>
              {open && (
                <div id={`${baseId}-${i}`} className="mt-3 max-w-[620px] text-[15px] leading-[1.6] text-muted">{f.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
