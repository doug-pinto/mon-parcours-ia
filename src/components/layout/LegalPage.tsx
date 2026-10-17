import Link from "next/link";

type Props = { title: string; children?: React.ReactNode };

// Gabarit des pages légales. Le contenu juridique doit être fourni par l'organisme de formation.
export function LegalPage({ title, children }: Props) {
  return (
    <main className="mx-auto max-w-[780px] px-[clamp(20px,6vw,56px)] py-[clamp(50px,7vw,90px)]">
      <Link href="/" className="text-sm font-bold">← Retour à l&apos;accueil</Link>
      <h1 className="mb-6 mt-6 font-display text-[clamp(30px,4vw,44px)] font-extrabold tracking-[-0.02em]">{title}</h1>
      {children ?? <p className="text-muted">Contenu à compléter par l&apos;organisme de formation.</p>}
    </main>
  );
}
