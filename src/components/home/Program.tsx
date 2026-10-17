import { program } from "@/data/program";
import { Container } from "@/components/ui/Container";
import { ModalButton } from "@/components/ui/ModalButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Program() {
  return (
    <Container className="px-[clamp(20px,6vw,56px)] py-[clamp(50px,7vw,90px)]">
      <section id="programme">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <SectionHeading>Votre programme de formation</SectionHeading>
          <ModalButton modal="download" variant="outline" size="sm" className="border-0 !p-0 !text-[15px] !text-accent hover:!bg-transparent hover:!text-accent-hover">
            Voir le programme complet →
          </ModalButton>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-5">
          {program.map((p) => (
            <div key={p.n} className="rounded-[18px] border border-line bg-surface p-[26px]">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-[10px] bg-surface-2 text-sm font-extrabold text-brand">{p.n}</div>
              <h3 className="mb-1.5 font-display text-[16.5px] font-bold">{p.title}</h3>
              <div className="mb-2.5 text-[13px] font-extrabold text-accent">{p.duration}</div>
              <p className="text-[14.5px] leading-[1.55] text-muted">{p.goal}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
