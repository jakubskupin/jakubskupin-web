import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import ClosingCTA from "@/components/home/ClosingCTA";

export const metadata: Metadata = {
  title: "Jakub Skupin — Vznikne to. A pak vynikne.",
  description:
    "Z vašich myšlenek udělám něco, co se dá ukázat, sdílet, prodat. Osobní značka, strategie, rešerše — rychle a do hloubky.",
};

export default function HomePage() {
  return (
    <main id="main" className="flex flex-col">
      <Hero />
      <Process />
      <Services />
      <ClosingCTA />
    </main>
  );
}
