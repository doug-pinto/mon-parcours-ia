"use client";

import { FormError, Honeypot, PrivacyNote, SuccessMessage, fieldClass } from "./FormParts";
import { useFormSubmit } from "./useFormSubmit";

export function DownloadForm() {
  const { status, error, onSubmit } = useFormSubmit("/api/download-program");

  if (status === "done") {
    return <SuccessMessage title="Merci !" text="Le programme complet arrive dans votre boîte mail." />;
  }

  return (
    <div>
      <div className="mb-2 font-display text-[22px] font-extrabold">Recevez le programme complet</div>
      <div className="mb-[22px] text-[14.5px] text-muted">Quelques informations pour recevoir le PDF du programme par email.</div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Nom complet" aria-label="Nom complet" required maxLength={120} autoComplete="name" className={`${fieldClass} mb-3`} />
        <input type="email" name="email" placeholder="Adresse email" aria-label="Adresse email" required maxLength={200} autoComplete="email" className={`${fieldClass} mb-3`} />
        <input type="tel" name="phone" placeholder="Numéro de téléphone" aria-label="Numéro de téléphone" required maxLength={25} autoComplete="tel" className={`${fieldClass} mb-3`} />
        <input type="text" name="company" placeholder="Nom de l'entreprise (si applicable)" aria-label="Nom de l'entreprise" maxLength={120} autoComplete="organization" className={`${fieldClass} mb-[18px]`} />
        <Honeypot />
        <FormError message={error} />
        <button type="submit" disabled={status === "sending"} className="w-full cursor-pointer rounded-[10px] bg-brand py-3.5 text-[15px] font-bold text-white hover:bg-brand-hover disabled:opacity-60">
          {status === "sending" ? "Envoi…" : "Télécharger le PDF"}
        </button>
      </form>
      <PrivacyNote>Vos données servent uniquement à vous envoyer le programme et ne sont jamais utilisées sans votre consentement.</PrivacyNote>
    </div>
  );
}
