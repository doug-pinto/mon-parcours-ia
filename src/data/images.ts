// Emplacements photo du site. Renseignez `src` (fichier dans /public/images) pour remplacer le placeholder.
export type ImageSpec = { src?: string; alt: string; placeholder: string };

export const images = {
  heroMain: { alt: "Apprenants en formation", placeholder: "photo — apprenants en formation" },
  heroTopLeft: { alt: "Atelier de formation", placeholder: "photo — atelier" },
  heroBottomLeft: { alt: "Apprenant en formation", placeholder: "photo — apprenant" },
  heroTopRight: { alt: "Session de formation en cours", placeholder: "photo — session en cours" },
  heroBottomRight: { alt: "Échange entre apprenants", placeholder: "photo — échange entre apprenants" },
  sessions: { alt: "Apprenant en session", placeholder: "photo — apprenant en session" },
  heroAvatars: [
    { alt: "", placeholder: "photo" },
    { alt: "", placeholder: "photo" },
    { alt: "", placeholder: "photo" },
  ],
} satisfies Record<string, ImageSpec | ImageSpec[]>;
