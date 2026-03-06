"use client";

import { motion, type Easing } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as Easing },
};

function stagger(index: number) {
  return {
    ...fadeUp,
    transition: { ...fadeUp.transition, delay: index * 0.1 },
  };
}

const steps = [
  {
    num: "01",
    title: "X-factor",
    description:
      "Pojmenuju, čím jseš výjimečný — to, co sám nevidíš, protože je to pro tebe samozřejmé.",
  },
  {
    num: "02",
    title: "Research a strategie",
    description:
      "Rešerše trhu, cílových skupin a tónu. AI analýza + lidský úsudek. Do 48 hodin máš jasno.",
  },
  {
    num: "03",
    title: "Brand a web",
    description:
      "Vizuální identita a web postavený kolem tvého x-faktoru. Ne šablona — systém, který dává smysl.",
  },
  {
    num: "04",
    title: "Obsahový systém",
    description:
      "LinkedIn strategie, formáty, první obsah. Víš co, kam a proč publikovat.",
  },
];

export default function XFactor() {
  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[140px]" id="proces">
      <motion.div className="mb-12" {...fadeUp}>
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Jak pracuji
        </div>
        <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em] max-w-[600px]">
          Každý má něco unikátního. Já to najdu a postavím na tom.
        </h2>
        <p className="max-w-[460px] text-base leading-[1.6] text-text-secondary">
          Nejdřív pojmenuju tvůj x-factor. Pak kolem něj postavím strategii,
          značku, web i obsah.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="rounded-2xl border border-border bg-card-bg px-6 py-7 transition-colors duration-250 hover:border-[#CDCBC5]"
            {...stagger(i)}
          >
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.08em] text-text-tertiary">
              {step.num}
            </div>
            <h3 className="mb-2 font-heading text-base font-bold tracking-[-0.01em]">
              {step.title}
            </h3>
            <p className="text-[13px] leading-[1.55] text-text-secondary">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
