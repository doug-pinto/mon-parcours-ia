import Image from "next/image";
import type { ImageSpec } from "@/data/images";

type Props = {
  image: Pick<ImageSpec, "src" | "alt" | "placeholder">;
  shape?: "circle" | "rounded";
  radius?: number;
  className?: string;
  sizes?: string;
  avatar?: boolean;
};

// Affiche l'image si `src` est renseigné, sinon un emplacement vide facilement remplaçable.
export function ImageSlot({ image, shape = "rounded", radius = 16, className = "", sizes = "(min-width: 768px) 25vw, 50vw", avatar = false }: Props) {
  const rounding = shape === "circle" ? { borderRadius: "9999px" } : { borderRadius: radius };
  return (
    <div
      className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden ${avatar ? "bg-avatar" : "border border-dashed border-line-btn bg-surface-2"} ${className}`}
      style={rounding}
    >
      {image.src ? (
        <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover" />
      ) : avatar ? null : (
        <span className="absolute inset-0 flex items-center justify-center p-2 text-center text-xs font-semibold text-faint">
          {image.placeholder}
        </span>
      )}
    </div>
  );
}
