import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GrainOverlay from "@/components/motion/GrainOverlay";

export const metadata: Metadata = {
  title: "Knowledge Athlete — Jakub Skupin",
  description:
    "Tým doménových expertů, kteří pomáhají doručit lepší výsledky pro klienty.",
};

export default function KnowledgeAthletePage() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <main className="mx-auto max-w-[960px] px-6 pb-[120px] pt-[100px]">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary transition-colors hover:text-text"
        >
          ← Zpět
        </Link>

        <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Knowledge Athlete
        </div>
        <h1 className="mb-6 font-heading text-[clamp(36px,5.5vw,52px)] font-bold leading-[1.12] tracking-[-0.03em]">
          Na hraně znalostí
        </h1>
        <p className="mb-12 max-w-[520px] text-lg leading-[1.65] text-text-secondary">
          Síť doménových expertů a specialistů, kteří pomáhají doručit lepší
          výsledky pro klienty. Záznamy z akcí a profily členů brzy.
        </p>

        <div className="rounded-2xl border border-border bg-card-bg px-8 py-10 text-center">
          <div className="mb-2 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
            Připravujeme
          </div>
          <p className="text-base leading-[1.6] text-text-secondary">
            Tato stránka se plní obsahem. Záznamy z prvních setkání a profily
            expertů přibudou brzy.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
