import { siteConfig } from "@/config/site";
import { images } from "@/data/images";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { ModalButton } from "@/components/ui/ModalButton";

const collage = [
  { image: images.heroMain, radius: 20, pos: "left-[21%] top-[6%] h-[64%] w-[48%]", sizes: "(min-width: 768px) 240px, 50vw" },
  { image: images.heroTopLeft, radius: 16, pos: "left-0 top-0 h-[21%] w-[19%]", sizes: "100px" },
  { image: images.heroBottomLeft, radius: 16, pos: "left-0 top-[44%] h-[30%] w-[19%]", sizes: "100px" },
  { image: images.heroTopRight, radius: 16, pos: "right-0 top-[3%] h-[36%] w-1/4", sizes: "125px" },
  { image: images.heroBottomRight, radius: 16, pos: "right-[2%] top-[52%] h-[28%] w-[21%]", sizes: "105px" },
];

export function Hero() {
  return (
    <section id="hero" className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-12 px-[clamp(20px,6vw,56px)] pb-[clamp(30px,5vw,56px)] pt-[clamp(40px,8vw,80px)]">
      <div className="min-w-[min(300px,100%)] flex-[1_1_460px]">
        <div className="mb-[26px] inline-flex items-center gap-2.5 rounded-full bg-brand py-[7px] pl-4 pr-2">
          <span className="text-[13px] font-bold text-white">Finançable via votre CPF</span>
          <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[13px] text-white">→</span>
        </div>
        <div className="mb-5 flex flex-wrap items-center gap-3.5">
          <div className="flex items-center gap-1.5 rounded-[10px] border border-line bg-surface px-3.5 py-2 text-sm font-extrabold">
            {siteConfig.rating.score} <span className="tracking-[-1px] text-accent" aria-hidden="true">★★★★★</span>
          </div>
          <div className="-ml-1.5 flex">
            {images.heroAvatars.map((avatar, i) => (
              <ImageSlot key={i} image={avatar} shape="circle" avatar className="-ml-2 h-8 w-8 border-2 border-bg" sizes="32px" />
            ))}
          </div>
          <span className="text-sm font-semibold text-muted">({siteConfig.rating.reviewsLabel})</span>
        </div>
        <h1 className="mb-[22px] font-display text-[clamp(38px,5vw,64px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
          Faites de l&apos;IA une compétence qui vous appartient.
        </h1>
        <p className="mb-[30px] max-w-[480px] text-lg leading-[1.6] text-muted">
          Mon Parcours IA vous accompagne, module par module, de la découverte à l&apos;usage professionnel concret de l&apos;IA — sans prérequis technique.
        </p>
        <div className="mb-5 flex flex-wrap gap-3.5">
          <ModalButton modal="signup" variant="primary" className="flex items-center gap-2">
            Je m&apos;inscris à la prochaine session <span aria-hidden="true">→</span>
          </ModalButton>
          <ModalButton modal="download" variant="outline">Télécharger le programme</ModalButton>
        </div>
        <div className="text-sm text-muted">
          Nouvelle session chaque mois — prochaine session : <strong className="text-brand">{siteConfig.nextSession.label}</strong>
        </div>
      </div>

      <div className="mx-auto w-full min-w-[min(300px,100%)] max-w-[480px] flex-[1_1_420px]">
        <div className="relative w-full" style={{ aspectRatio: "4 / 3.6" }}>
          {collage.map((c, i) => (
            <ImageSlot key={i} image={c.image} radius={c.radius} sizes={c.sizes} className={`absolute ${c.pos}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
