export type Session = { label: string; month: string; highlighted?: boolean };

// `highlighted` : la session mise en avant (fond orangé dans la maquette).
export const sessions: Session[] = [
  { label: "Session en cours", month: "Janvier 2027" },
  { label: "Prochaine session", month: "Février 2027", highlighted: true },
  { label: "Ensuite", month: "Mars 2027" },
];
