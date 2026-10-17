import { siteConfig } from "@/config/site";
import { reviews } from "@/data/reviews";
import { ImageSlot } from "@/components/ui/ImageSlot";

const fade = "linear-gradient(to right, transparent, black 6%, black 94%, transparent)";

// Défilement continu : la liste est dupliquée, la seconde copie est masquée aux lecteurs d'écran.
export function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="w-full overflow-hidden bg-lavender py-[clamp(46px,6vw,70px)]">
      <h2 id="reviews-title" className="mb-9 text-center font-display text-[clamp(26px,3vw,36px)] font-extrabold tracking-[-0.02em]">
        {siteConfig.reviewsHeading}
      </h2>
      <div className="w-full overflow-hidden" style={{ WebkitMaskImage: fade, maskImage: fade }}>
        <div className="reviews-track flex w-max py-1">
          {[0, 1].flatMap((copy) =>
            reviews.map((r) => (
              <figure key={`${copy}-${r.name}`} aria-hidden={copy === 1} className="mr-5 flex w-[300px] shrink-0 flex-col rounded-[18px] bg-surface p-[26px]">
                <div className="mb-3.5 text-[15px] tracking-[2px] text-accent" aria-hidden="true">★★★★★</div>
                <div className="mb-2.5 font-display text-base font-bold">{r.title}</div>
                <blockquote className="mb-5 flex-1 text-sm leading-[1.55] text-muted">{r.quote}</blockquote>
                <figcaption className="flex items-center gap-2.5">
                  <ImageSlot image={{ src: r.photo, alt: "", placeholder: "photo" }} shape="circle" avatar className="h-9 w-9 shrink-0" sizes="36px" />
                  <div>
                    <div className="text-sm font-bold">{r.name}</div>
                    <div className="text-[12.5px] text-muted">{r.role}</div>
                  </div>
                </figcaption>
              </figure>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
