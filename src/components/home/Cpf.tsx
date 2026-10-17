import { siteConfig } from "@/config/site";
import { cpfSteps } from "@/data/cpf";
import { Container } from "@/components/ui/Container";

export function Cpf() {
  return (
    <section id="financement" className="bg-brand px-[clamp(20px,6vw,56px)] py-[clamp(50px,7vw,90px)] text-white">
      <Container className="flex flex-wrap gap-12">
        <div className="min-w-[min(280px,100%)] flex-[1_1_380px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5">
            <span className="text-[12.5px] font-extrabold">FINANCEMENT</span>
          </div>
          <h2 className="mb-[18px] font-display text-[clamp(26px,3.2vw,36px)] font-extrabold tracking-[-0.02em]">Financez votre formation avec votre CPF</h2>
          <p className="mb-4 text-[16.5px] leading-[1.65] text-on-dark">
            Mon Parcours IA est finançable via votre Compte Personnel de Formation. Concrètement, vous n&apos;avancez pas les frais : votre CPF prend en charge tout ou partie du coût de la formation, directement depuis votre espace Mon Compte Formation.
          </p>
          <p className="mb-6 text-[16.5px] leading-[1.65] text-on-dark">
            La démarche prend quelques minutes et vous restez seul décisionnaire du financement de votre formation, à votre initiative.
          </p>
          <a href={siteConfig.cpf.monCompteFormationUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] font-bold text-white underline hover:text-white">
            Accéder à Mon Compte Formation →
          </a>
        </div>
        <ol className="min-w-[min(280px,100%)] flex-[1_1_380px]">
          {cpfSteps.map((s) => (
            <li key={s.n} className="mb-6 flex gap-[18px]">
              <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] bg-brand-hover text-sm font-extrabold">{s.n}</div>
              <div>
                <h3 className="mb-1 font-display text-base font-bold">{s.title}</h3>
                <p className="text-[14.5px] leading-[1.55] text-on-dark">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
