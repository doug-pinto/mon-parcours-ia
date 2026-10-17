import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: false },
};

export default function Page() {
  return <LegalPage title="Politique de confidentialité" />;
}
