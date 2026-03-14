"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { LINKEDIN_URL } from "@/lib/data";

const basePackage = [
  "2 sparring sessions měsíčně (45 min) + async komunikace",
  "LinkedIn posty ve vaší tonalitě",
  "Feedback na koncepty a drafty",
  "Strategický přehled: co funguje, co ne, kam dál",
];

const extensions = [
  "Podcast → obsah (reely, citáty, posty)",
  "Případovky z klientových dat",
  "AI rešerše cílené na klientův positioning",
  "Micro-experimenty (landing page + kampaň)",
  "Prospecting (Sales Navigator + AI)",
];

export default function ContentPartnerLP() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-[720px]">
          <motion.div {...fadeUp}>
            <span className="mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.1em] text-text-tertiary">
              Content Partner
            </span>
            <h1 className="font-heading text-[clamp(30px,5vw,46px)] font-bold leading-[1.1] tracking-[-0.03em]">
              Máte co říct, ale nestíháte to tvořit
            </h1>
            <p className="mt-5 max-w-[520px] text-lg leading-relaxed text-text-secondary">
              Znám váš brand, cílovku i tonalitu. Vy dodáte minimum — já se
              postarám o zbytek.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Základní balíček */}
      <section className="border-t border-border px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[720px]">
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <span className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-text-tertiary">
              Základní balíček
            </span>
            <h2 className="font-heading text-[clamp(22px,3.5vw,30px)] font-bold leading-tight tracking-[-0.02em]">
              Co dostáváte každý měsíc
            </h2>
          </motion.div>
          <ul className="mt-8 space-y-4">
            {basePackage.map((item, i) => (
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

      {/* Rozšíření */}
      <section className="border-t border-border px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[720px]">
          <motion.div {...fadeUp}>
            <span className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-text-tertiary">
              Volitelná rozšíření
            </span>
            <h2 className="font-heading text-[clamp(22px,3.5vw,30px)] font-bold leading-tight tracking-[-0.02em]">
              Přidejte, co potřebujete
            </h2>
            <p className="mt-3 text-sm text-text-secondary">
              Řešíme individuálně.
            </p>
          </motion.div>
          <ul className="mt-8 space-y-4">
            {extensions.map((item, i) => (
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
                od 35 000
              </span>
              <span className="text-sm font-medium text-text-tertiary">
                Kč / měsíc
              </span>
            </div>
            <p className="mt-3 text-sm text-text-secondary">
              Vy dodáte minimum — já se postarám o zbytek.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-text px-7 py-3 text-sm font-semibold text-bg transition-opacity duration-200 hover:opacity-90"
              >
                Napsat na LinkedIn ↗
              </a>
              <Link
                href="/personal-brand"
                className="text-sm font-medium text-text-tertiary transition-colors duration-200 hover:text-text"
              >
                Ideální start je X-Factor Sprint →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
