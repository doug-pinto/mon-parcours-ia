import { Resend } from "resend";

const DEFAULT_FROM = "Mon Parcours IA <onboarding@resend.dev>";

export const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

type SendArgs = { to: string; subject: string; html: string; replyTo?: string };

// Retourne false si la configuration est absente ou si l'envoi échoue (jamais de détail renvoyé au client).
export async function sendEmail({ to, subject, html, replyTo }: SendArgs): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquante");
    return false;
  }
  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: process.env.RESEND_FROM_EMAIL || DEFAULT_FROM,
      to,
      subject,
      html,
      replyTo,
    });
    if (error) console.error("Resend:", error.message);
    return !error;
  } catch (err) {
    console.error("Resend:", err);
    return false;
  }
}

export const teamEmail = () => process.env.CONTACT_EMAIL ?? "";
