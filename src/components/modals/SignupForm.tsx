"use client";

import { siteConfig } from "@/config/site";
import { situations } from "@/lib/validation";
import { FormError, Honeypot, PrivacyNote, SuccessMessage, fieldClass } from "./FormParts";
import { useFormSubmit } from "./useFormSubmit";

export function SignupForm() {
  const { status, error, onSubmit } = useFormSubmit("/api/inscription");

  if (status === "done") {
    return <SuccessMessage title="Candidature envoyée" text="Nous revenons vers vous rapidement pour confirmer votre place sur la prochaine session." />;
  }

  return (
    <div>
      <div className="mb-2 font-display text-[22px] font-extrabold">Candidature à la prochaine session</div>
      <div className="mb-[22px] text-[14.5px] text-muted">
        Démarrage : {siteConfig.nextSession.label}. Quelques informations pour préparer votre entretien.
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Nom complet" aria-label="Nom complet" required maxLength={120} autoComplete="name" className={`${fieldClass} mb-3`} />
        <input type="email" name="email" placeholder="Adresse email" aria-label="Adresse email" required maxLength={200} autoComplete="email" className={`${fieldClass} mb-3`} />
        <input type="tel" name="phone" placeholder="Numéro de téléphone" aria-label="Numéro de téléphone" required maxLength={25} autoComplete="tel" className={`${fieldClass} mb-3`} />
        <input type="text" name="company" placeholder="Nom de l'entreprise (si applicable)" aria-label="Nom de l'entreprise" maxLength={120} autoComplete="organization" className={`${fieldClass} mb-3`} />
        <select name="situation" aria-label="Votre situation actuelle" required defaultValue="" className={`${fieldClass} mb-3 text-muted`}>
          <option value="">Votre situation actuelle</option>
          {situations.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
        <textarea name="goal" placeholder="Votre objectif principal en suivant cette formation" aria-label="Votre objectif principal" required maxLength={2000} className={`${fieldClass} mb-[18px] min-h-20 resize-y`} />
        <Honeypot />
        <FormError message={error} />
        <button type="submit" disabled={status === "sending"} className="w-full cursor-pointer rounded-[10px] bg-brand py-3.5 text-[15px] font-bold text-white hover:bg-brand-hover disabled:opacity-60">
          {status === "sending" ? "Envoi…" : "Envoyer ma candidature"}
        </button>
      </form>
      <PrivacyNote>Aucun démarchage : nous vous recontactons uniquement suite à votre demande.</PrivacyNote>
    </div>
  );
}
