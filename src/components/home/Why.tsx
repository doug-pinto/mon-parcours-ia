import { audiences } from "@/data/audiences";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Why() {
  return (
    <Container className="px-[clamp(20px,6vw,56px)] py-[clamp(50px,7vw,90px)]">
      <section id="pourquoi">
        <div className="mb-11 max-w-[700px]">
          <SectionHeading className="mb-[18px]">Pourquoi se former à l&apos;IA maintenant</SectionHeading>
          <p className="text-[17px] leading-[1.65] text-muted">
            L&apos;IA générative transforme déjà la façon dont on travaille, cherche un emploi ou développe son activité. Rester à l&apos;écart, c&apos;est prendre le risque de se laisser distancer. Mon Parcours IA a été pensé pour vous permettre de reprendre la main, quel que soit votre point de départ.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-5">
          {audiences.map((a) => (
            <div key={a.tag} className="rounded-[18px] border border-line bg-surface p-[26px]">
              <div className="mb-2.5 text-xs font-extrabold uppercase tracking-[0.08em] text-accent">{a.tag}</div>
              <h3 className="mb-2 font-display text-[17px] font-bold">{a.title}</h3>
              <p className="text-[14.5px] leading-[1.55] text-muted">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
