import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  alternates: { canonical: "/cgv" },
  robots: { index: false },
};

export default function Page() {
  return <LegalPage title="Conditions générales de vente" />;
}
