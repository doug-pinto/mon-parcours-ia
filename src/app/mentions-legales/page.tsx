import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false },
};

export default function Page() {
  return <LegalPage title="Mentions légales" />;
}
