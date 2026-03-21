import type { Metadata } from "next";
import MaskHero from "@/components/home/MaskHero";

export const metadata: Metadata = {
  title: "Jakub Skupin",
  description: "Vznikne to. A pak vynikne.",
};

export default function MaskPage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Logo — top left */}
      <a
        href="/"
        className="absolute top-6 left-8 z-50 text-lg font-bold tracking-tight text-[#FAFAF8] font-heading hover:opacity-70 transition-opacity"
      >
        Jakub Skupin
      </a>

      {/* Mask reveal hero */}
      <MaskHero />
    </main>
  );
}
