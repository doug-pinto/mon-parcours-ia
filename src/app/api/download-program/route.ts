import { siteConfig } from "@/config/site";
import { handleForm } from "@/lib/form-handler";
import { escapeHtml, sendEmail, teamEmail } from "@/lib/resend";
import { parseDownload } from "@/lib/validation";

export async function POST(req: Request) {
  return handleForm({
    req,
    parse: parseDownload,
    deliver: async (d) => {
      const notified = await sendEmail({
        to: teamEmail(),
        replyTo: d.email,
        subject: `Demande du programme — ${d.name}`,
        html: `<h2>Demande de téléchargement du programme</h2>
<p><strong>Nom :</strong> ${escapeHtml(d.name)}</p>
<p><strong>Email :</strong> ${escapeHtml(d.email)}</p>
<p><strong>Téléphone :</strong> ${escapeHtml(d.phone)}</p>
<p><strong>Entreprise :</strong> ${escapeHtml(d.company || "—")}</p>`,
      });
      if (!notified) return false;

      const link = siteConfig.programPdf ? `${siteConfig.url}${siteConfig.programPdf}` : null;
      // Email au stagiaire : un échec ici ne bloque pas la demande, l'équipe a déjà la notification.
      await sendEmail({
        to: d.email,
        subject: "Votre programme Mon Parcours IA",
        html: `<p>Bonjour ${escapeHtml(d.name)},</p>
<p>Merci de votre intérêt pour Mon Parcours IA.</p>
${link ? `<p><a href="${link}">Télécharger le programme complet (PDF)</a></p>` : "<p>Nous vous envoyons le programme complet très prochainement.</p>"}
<p>L'équipe Mon Parcours IA</p>`,
      });
      return true;
    },
  });
}
