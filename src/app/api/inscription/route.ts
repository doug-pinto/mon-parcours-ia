import { handleForm } from "@/lib/form-handler";
import { escapeHtml, sendEmail, teamEmail } from "@/lib/resend";
import { parseSignup, situations } from "@/lib/validation";

export async function POST(req: Request) {
  return handleForm({
    req,
    parse: parseSignup,
    deliver: (d) => {
      const situation = situations.find((s) => s.value === d.situation)?.label ?? d.situation;
      return sendEmail({
        to: teamEmail(),
        replyTo: d.email,
        subject: `Nouvelle candidature — ${d.name}`,
        html: `<h2>Nouvelle candidature à la prochaine session</h2>
<p><strong>Nom :</strong> ${escapeHtml(d.name)}</p>
<p><strong>Email :</strong> ${escapeHtml(d.email)}</p>
<p><strong>Téléphone :</strong> ${escapeHtml(d.phone)}</p>
<p><strong>Entreprise :</strong> ${escapeHtml(d.company || "—")}</p>
<p><strong>Situation :</strong> ${escapeHtml(situation)}</p>
<p><strong>Objectif :</strong><br>${escapeHtml(d.goal).replace(/\n/g, "<br>")}</p>`,
      });
    },
  });
}
