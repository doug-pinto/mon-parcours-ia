export const situations = [
  { value: "salarie", label: "Salarié en reconversion" },
  { value: "independant", label: "Indépendant" },
  { value: "demandeur", label: "Demandeur d'emploi" },
  { value: "dirigeant", label: "Dirigeant de TPE" },
  { value: "autre", label: "Autre" },
] as const;

export type DownloadInput = { name: string; email: string; phone: string; company: string };
export type SignupInput = DownloadInput & { situation: string; goal: string };
export type Result<T> = { ok: true; data: T } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s().-]{8,25}$/;

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// Champ piège : un robot le remplit, un humain ne le voit pas.
export function isSpam(body: unknown): boolean {
  return typeof body === "object" && body !== null && text((body as Record<string, unknown>).website, 200) !== "";
}

function parseContact(body: unknown): Result<DownloadInput> {
  const raw = (typeof body === "object" && body !== null ? body : {}) as Record<string, unknown>;
  const name = text(raw.name, 120);
  const email = text(raw.email, 200).toLowerCase();
  if (name.length < 2) return { ok: false, error: "Merci d'indiquer votre nom." };
  if (!EMAIL_RE.test(email)) return { ok: false, error: "Merci d'indiquer une adresse email valide." };
  const phone = text(raw.phone, 25);
  if (!PHONE_RE.test(phone) || phone.replace(/\D/g, "").length < 9) {
    return { ok: false, error: "Merci d'indiquer un numéro de téléphone valide." };
  }
  const company = text(raw.company, 120);
  return { ok: true, data: { name, email, phone, company } };
}

export function parseDownload(body: unknown): Result<DownloadInput> {
  return parseContact(body);
}

export function parseSignup(body: unknown): Result<SignupInput> {
  const contact = parseContact(body);
  if (!contact.ok) return contact;
  const raw = body as Record<string, unknown>;
  const situation = text(raw.situation, 40);
  const goal = text(raw.goal, 2000);
  if (!situations.some((s) => s.value === situation)) return { ok: false, error: "Merci de choisir votre situation." };
  if (goal.length < 3) return { ok: false, error: "Merci de décrire votre objectif." };
  return { ok: true, data: { ...contact.data, situation, goal } };
}
