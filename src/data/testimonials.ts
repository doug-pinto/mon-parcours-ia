export type Testimonial = { quote: string; name: string; role: string; photo?: string };

// TODO : remplacer par de vrais témoignages d'apprenants après les premières sessions.
const placeholder =
  "Espace réservé à un témoignage réel d'apprenant — nom, rôle et citation à intégrer après les premières sessions.";

export const testimonials: Testimonial[] = [
  { quote: placeholder, name: "Nom du témoin", role: "Rôle / profil" },
  { quote: placeholder, name: "Nom du témoin", role: "Rôle / profil" },
  { quote: placeholder, name: "Nom du témoin", role: "Rôle / profil" },
];
