import { siteConfig } from "@/config/site";
import { ModalButton } from "@/components/ui/ModalButton";

export function FinalCta() {
  return (
    <section className="bg-brand px-[clamp(20px,6vw,56px)] py-[clamp(56px,8vw,100px)] text-center text-white">
      <div className="mx-auto max-w-[620px]">
        <h2 className="mb-[18px] font-display text-[clamp(30px,4vw,46px)] font-extrabold tracking-[-0.02em]">
          Votre montée en compétences commence ici.
        </h2>
        <p className="mb-3.5 text-[16.5px] leading-[1.6] text-on-dark">
          Nouvelle session chaque mois — prochaine session : {siteConfig.nextSession.label}.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <ModalButton modal="download" variant="outlineOnDark">Télécharger le programme</ModalButton>
          <ModalButton modal="signup" variant="accent">Je m&apos;inscris à la prochaine session</ModalButton>
        </div>
      </div>
    </section>
  );
}
