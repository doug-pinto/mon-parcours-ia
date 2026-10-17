// TODO : avis provisoires issus de la maquette, à remplacer par de vrais témoignages.
// `photo` : chemin d'image dans /public (ex. "/images/avis/karim.jpg"), optionnel.
export type Review = {
  title: string;
  quote: string;
  name: string;
  role: string;
  photo?: string;
};

export const reviews: Review[] = [
  { title: "L'équivalent de 5 ans d'expérience en 6 semaines", quote: "Un immense merci pour cette formation. J'ai littéralement l'impression d'avoir pris de l'avance sur mon secteur d'activité.", name: "Karim Soudani", role: "Chargé de clientèle" },
  { title: "Un investissement indispensable", quote: "La formation a servi de véritable porte d'entrée à l'IA, rendue accessible grâce aux cas pratiques. L'impact est énorme.", name: "Jordan Scornet", role: "Indépendant, graphiste" },
  { title: "Je retrouve un vrai plaisir à travailler", quote: "Six semaines incroyables, la découverte d'une nouvelle manière de penser mon métier. Une motivation que je n'avais plus depuis longtemps.", name: "Caroline Tricart", role: "Assistante de direction" },
  { title: "J'ai adoré ce parcours", quote: "J'ai pu gagner un temps précieux, structurer mes idées et surtout sortir de l'inaction. Un vrai élan pour la suite.", name: "Béatrice Moulin", role: "En reconversion" },
  { title: "Enfin une formation concrète", quote: "Pas de théorie inutile : chaque séance repartait d'un cas réel de mon activité. J'utilise les outils tous les jours depuis.", name: "Mehdi Benali", role: "Gérant de TPE, BTP" },
  { title: "Un vrai plus sur mon CV", quote: "En recherche d'emploi, j'ai pu mettre en avant une compétence que les recruteurs remarquent. Deux entretiens décrochés depuis.", name: "Sophie Laurent", role: "Demandeuse d'emploi" },
  { title: "Accessible sans être technicien", quote: "J'avais peur de ne rien comprendre. Le rythme et les formateurs m'ont mise en confiance dès la première semaine.", name: "Nathalie Rousseau", role: "Comptable" },
  { title: "Le financement CPF a tout simplifié", quote: "L'inscription s'est faite en quelques minutes depuis mon compte, sans rien avancer. Je n'aurais pas franchi le pas sinon.", name: "Thomas Girard", role: "Commercial" },
];
