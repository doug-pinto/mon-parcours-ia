import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <Container className="px-[clamp(20px,6vw,56px)] py-[clamp(50px,7vw,90px)]">
      <section id="avis">
        <SectionHeading className="mb-10">Ce qu&apos;en disent nos apprenants</SectionHeading>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-5">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-[18px] border border-line bg-surface p-[26px]">
              <blockquote className="mb-5 text-[15px] leading-[1.6] text-[oklch(0.35_0_0)]">{t.quote}</blockquote>
              <figcaption className="flex items-center gap-3">
                <ImageSlot image={{ src: t.photo, alt: "", placeholder: "photo" }} shape="circle" avatar className="h-11 w-11 shrink-0" sizes="44px" />
                <div>
                  <div className="font-display text-sm font-bold">{t.name}</div>
                  <div className="text-[12.5px] font-bold text-accent">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Container>
  );
}
