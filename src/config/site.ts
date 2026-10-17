// Source unique des informations du site. Les valeurs marquées TODO sont à compléter
// avant la mise en production (éléments réglementaires, contact, chiffres réels).
export const siteConfig = {
  name: "Mon Parcours IA",
  brandOwner: "Darwell",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Mon Parcours IA : une formation pratique à l'intelligence artificielle, finançable via votre CPF, pour en faire une compétence professionnelle.",
  locale: "fr_FR",

  // TODO : coordonnées publiques
  contact: {
    email: "support@monparcoursia.fr",
    phone: "+33 6 29 55 34 32",
    address: "41 rue Jacquemars Giélée, 59800 Lille",
  },

  // TODO : informations réglementaires de l'organisme de formation (ne rien inventer)
  trainingOrganization: {
    legalName: "Orwell",
    activityDeclarationNumber: "",
    qualiopi: "",
    certification: "",
  },

  social: {} as Record<string, string>,

  cpf: {
    monCompteFormationUrl: "https://www.moncompteformation.gouv.fr",
  },

  // Prochaine session affichée dans le hero, le CTA final et la modale d'inscription
  nextSession: {
    label: "février 2027",
    labelCapitalized: "Février 2027",
  },

  // TODO : chiffres provisoires issus de la maquette, à remplacer par les données réelles
  rating: { score: "4,8/5", reviewsLabel: "320+ avis" },
  reviewsHeading: "320+ parcours transformés",

  // Chemin dans /public du programme PDF, ex. "/documents/programme.pdf" (null tant qu'il n'existe pas)
  programPdf: null as string | null,
} as const;
