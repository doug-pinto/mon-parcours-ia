import { images } from "@/data/images";
import { sessions } from "@/data/sessions";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { ModalButton } from "@/components/ui/ModalButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Sessions() {
  return (
    <section id="sessions" className="bg-surface-2 px-[clamp(20px,6vw,56px)] py-[clamp(50px,7vw,90px)]">
      <Container className="flex flex-wrap items-center gap-12">
        <div className="min-w-[min(280px,100%)] flex-[1_1_420px]">
          <SectionHeading className="mb-[18px]">Une nouvelle session chaque mois</SectionHeading>
          <p className="mb-8 text-[16.5px] leading-[1.65] text-muted">
            Pas besoin d&apos;attendre la rentrée : Mon Parcours IA démarre un nouveau groupe chaque mois. Format hybride, 6 semaines, environ 3 heures par semaine — compatible avec une activité professionnelle à temps plein.
          </p>
          <ul className="mb-8 flex flex-wrap gap-3.5">
            {sessions.map((s) => (
              <li key={s.month} className={`min-w-[140px] rounded-xl border border-line px-[22px] py-3.5 ${s.highlighted ? "bg-highlight" : "bg-surface"}`}>
                <div className="mb-[3px] text-xs font-semibold text-muted">{s.label}</div>
                <div className="font-display text-base font-extrabold">{s.month}</div>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3.5">
            <ModalButton modal="signup" variant="primary">Je m&apos;inscris à la prochaine session</ModalButton>
            <ModalButton modal="download" variant="outlineOnLight">Télécharger le programme</ModalButton>
          </div>
        </div>
        <div className="min-w-[min(260px,100%)] max-w-[380px] flex-[1_1_300px]">
          <ImageSlot image={images.sessions} radius={20} sizes="380px" className="h-[340px] w-full" />
        </div>
      </Container>
    </section>
  );
}
