import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";
import { navLinks } from "./nav";

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  { href: "/cgv", label: "CGV" },
];

const headingClass = "mb-5 font-display text-base font-bold text-ink";
const linkClass = "text-[15px] text-muted hover:text-accent";

export function Footer() {
  const { contact } = siteConfig;
  return (
    <footer className="border-t border-line bg-surface px-[clamp(20px,6vw,56px)] pb-8 pt-14">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-[280px] text-[15px] leading-[1.8] text-muted">
              Une formation pratique pour faire de l&apos;IA une compétence professionnelle.
            </p>
          </div>

          <nav aria-label="Navigation du pied de page">
            <h2 className={headingClass}>Navigation</h2>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Informations légales">
            <h2 className={headingClass}>Informations légales</h2>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <h2 className={headingClass}>Contact</h2>
            <ul className="space-y-3 text-[15px] text-muted">
              <li><a href={`mailto:${contact.email}`} className={linkClass}>{contact.email}</a></li>
              <li><a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={linkClass}>{contact.phone}</a></li>
              <li>{contact.address}</li>
            </ul>
          </address>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-line pt-8">
          <a
            href={siteConfig.cpf.monCompteFormationUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consulter Mon Compte Formation (nouvel onglet)"
            className="shrink-0"
          >
            <Image src="/images/logo-mon-compte-formation.jpg" alt="Mon Compte Formation" width={512} height={240} className="h-auto w-[150px]" />
          </a>
          <a href={siteConfig.cpf.monCompteFormationUrl} target="_blank" rel="noopener noreferrer" className="text-[13px] text-muted hover:text-accent">
            Consulter Mon Compte Formation
          </a>
        </div>

        <div className="mt-6 border-t border-line pt-6 text-[13px] leading-relaxed text-muted">
          <p>
            © {new Date().getFullYear()} {siteConfig.trainingOrganization.legalName} — {siteConfig.name}. {contact.address}.
          </p>
          <p className="mt-1">
            Mon Parcours IA ne réalise aucun démarchage téléphonique ou SMS non sollicité. Vous êtes toujours à l&apos;initiative du contact.
          </p>
        </div>
      </div>
    </footer>
  );
}
