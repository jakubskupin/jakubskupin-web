"use client";

import { motion, type Easing } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as Easing },
};

const sections = [
  {
    label: "S čím se trápíte",
    items: [
      "Lidé vás doporučují — ale web tomu neodpovídá",
      "Nemáte čas řešit marketing a nechcete",
      "Nevíte, kde začít a co je důležité",
    ],
  },
  {
    label: "Co potřebujete",
    items: [
      "Online přítomnost, která pracuje i když vy ne",
      "Jasný positioning — proč zrovna vy",
      "Případovky a ukázky, které mluví za vás",
    ],
  },
  {
    label: "Co udělám",
    items: [
      "Pojmenuju váš x-factor a postavím kolem něj web",
      "Připravím strukturu, messaging a první obsah",
      "Vy dodáte minimum — zbytek vyřeším já",
    ],
  },
];

export default function ForWho() {
  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[140px]">
      <motion.div className="mb-10" {...fadeUp}>
        <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Pro koho
        </div>
        <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em] max-w-[600px]">
          Roky to odkládáte
        </h2>
        <p className="max-w-[520px] text-base leading-[1.6] text-text-secondary">
          Poznáváte se? Doba se ale změnila{" "}
          <strong className="font-bold text-text">a teď se to stane.</strong>
        </p>
      </motion.div>

      <motion.div
        className="rounded-2xl border border-border bg-card-bg px-6 py-7 md:px-8 md:py-9"
        {...fadeUp}
      >
        <h3 className="mb-6 font-heading text-[17px] font-bold leading-[1.35] tracking-[-0.01em]">
          Máte co nabídnout, ale online to není vidět
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {sections.map((s) => (
            <div key={s.label}>
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.06em] text-text-tertiary">
                {s.label}
              </div>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-text-secondary"
                  >
                    <span className="mt-[6px] block h-1.5 w-1.5 shrink-0 rounded-full bg-text-tertiary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
