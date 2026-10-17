import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import { ModalProvider } from "@/components/modals/ModalProvider";
import { siteConfig } from "@/config/site";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["500", "700", "800", "900"], variable: "--font-archivo", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Formation IA finançable CPF — Mon Parcours IA", template: "%s — Mon Parcours IA" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: "Formation IA finançable CPF — Mon Parcours IA",
    description: siteConfig.description,
    url: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${archivo.variable} ${manrope.variable}`}>
      <body>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
