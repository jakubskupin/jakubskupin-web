"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { LINKEDIN_URL } from "@/lib/data";

const deliverables = [
  "Focused strategická analýza cílená na vaši otázku",
  "Vizualizace klíčových vhledů a patternů",
  "Konkrétní závěry a doporučení pro rozhodování",
  "Benchmark dat a tržních signálů",
  "Dodání do 1–2 pracovních dní",
];

const howItWorks = [
  {
    num: "01",
    title: "Zadání",
    desc: "Krátký call nebo brief. Řeknete mi, co potřebujete vědět.",
  },
  {
    num: "02",
    title: "Hloubková rešerše",
    desc: "AI analýza + 15 let zkušeností v B2B marketingu + Second Brain se stovkami zdrojů.",
  },
  {
    num: "03",
    title: "Výstup",
    desc: "Strukturovaný dokument s vhledy, vizualizacemi a konkrétními doporučeními.",
  },
];

export default function ResearchSprintLP() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-[720px]">
          <motion.div {...fadeUp}>
            <span className="mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.1em] text-text-tertiary">
              AI Research Sprint
            </span>
            <h1 className="font-heading text-[clamp(30px,5vw,46px)] font-bold leading-[1.1] tracking-[-0.03em]">
              Hloubková rešerše. Za dny, ne týdny.
            </h1>
            <p className="mt-5 max-w-[520px] text-lg leading-relaxed text-text-secondary">
              Potřebujete rozhodnutí teď, ne za měsíc. Doručím strategickou
              analýzu, která vám ušetří týdny hledání a hádání.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Co doručuji */}
      <section className="border-t border-border px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[720px]">
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <span className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-text-tertiary">
              Co dostanete
            </span>
            <h2 className="font-heading text-[clamp(22px,3.5vw,30px)] font-bold leading-tight tracking-[-0.02em]">
              Výstupy, ne prezentace
            </h2>
          </motion.div>
          <ul className="mt-8 space-y-4">
            {deliverables.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-text-secondary"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: stagger(i + 1).transition.delay }}
              >
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-text-tertiary" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Jak to funguje */}
      <section className="border-t border-border px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[720px]">
          <motion.div {...fadeUp}>
            <span className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-text-tertiary">
              Jak to funguje
            </span>
            <h2 className="font-heading text-[clamp(22px,3.5vw,30px)] font-bold leading-tight tracking-[-0.02em]">
              3 kroky k výsledku
            </h2>
          </motion.div>
          <div className="mt-10 space-y-8">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex gap-5"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: stagger(i + 1).transition.delay }}
              >
                <span className="mt-0.5 text-[13px] font-bold text-text-tertiary">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-heading text-[17px] font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cena + CTA */}
      <section className="border-t border-border px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[720px]">
          <motion.div
            className="rounded-2xl border border-border bg-card-bg p-8 md:p-10"
            {...fadeUp}
          >
            <span className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-text-tertiary">
              Cena
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-heading text-[36px] font-bold tracking-[-0.03em]">
                od 8 000
              </span>
              <span className="text-sm font-medium text-text-tertiary">Kč</span>
            </div>
            <p className="mt-3 text-sm text-text-secondary">
              Rozsah řešíme na krátkém callu. Cena závisí na hloubce a šíři
              analýzy.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-text px-7 py-3 text-sm font-semibold text-bg transition-opacity duration-200 hover:opacity-90"
            >
              Napsat na LinkedIn ↗
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
