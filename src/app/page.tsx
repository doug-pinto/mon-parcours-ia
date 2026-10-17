import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Cpf } from "@/components/home/Cpf";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { Program } from "@/components/home/Program";
import { Reviews } from "@/components/home/Reviews";
import { Sessions } from "@/components/home/Sessions";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { Why } from "@/components/home/Why";
import { ModalDialogs } from "@/components/modals/ModalDialogs";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-bg text-ink">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Reviews />
        <Why />
        <Cpf />
        <Program />
        <Sessions />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <ModalDialogs />
    </div>
  );
}
