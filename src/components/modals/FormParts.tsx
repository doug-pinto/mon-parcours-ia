import Link from "next/link";

export const fieldClass =
  "w-full rounded-[10px] border-[1.5px] border-line-strong bg-surface px-4 py-[13px] text-[15px] font-sans";

export function SuccessMessage({ title, text }: { title: string; text: string }) {
  return (
    <div className="py-5 text-center" role="status">
      <div className="mx-auto mb-[18px] flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 text-[22px] text-accent">✓</div>
      <div className="mb-2 font-display text-xl font-extrabold">{title}</div>
      <div className="text-[14.5px] text-muted">{text}</div>
    </div>
  );
}

// Champ piège anti-spam : invisible pour les humains, rempli par les robots.
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Ne pas remplir
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export function PrivacyNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-3 text-[12.5px] text-faint">
      {children}{" "}
      <Link href="/politique-confidentialite" className="underline">
        Politique de confidentialité
      </Link>
    </div>
  );
}

export function FormError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p role="alert" className="mb-3 text-sm font-semibold text-red-700">
      {message}
    </p>
  );
}
