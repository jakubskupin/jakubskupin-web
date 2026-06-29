import type { Metadata } from "next";
import MaskHero from "./MaskHero";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import ClosingCTA from "@/components/home/ClosingCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Jakub Skupin — Vznikne to. A pak vynikne.",
  description:
    "Z vašich myšlenek udělám něco, co se dá ukázat, sdílet, prodat. Osobní značka, strategie, rešerše — rychle a do hloubky.",
};

export default function MaskPage() {
  return (
    <main className="relative bg-[var(--bg)]">
      {/* Logo — fixed, always visible */}
      <a
        href="/"
        className="fixed top-6 left-8 z-50 text-lg font-bold tracking-tight text-[#FAFAF8] font-heading hover:opacity-70 transition-opacity mix-blend-difference"
      >
        Jakub Skupin
      </a>

      {/* MaskHero contains both: sticky split doors (z-20) AND sticky homepage behind (z-10) */}
      <MaskHero>
        {/* This gets rendered as the background behind the split doors */}
        <div className="bg-[var(--bg)]">
          <Hero />
          <Process />
          <Services />
          <ClosingCTA />
          <Footer />
        </div>
      </MaskHero>
    </main>
  );
}
