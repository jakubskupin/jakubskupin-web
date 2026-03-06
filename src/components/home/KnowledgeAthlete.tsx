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

const pillars = [
  {
    title: "Záměrný trénink",
    description:
      "Každý den se ponořím do nových oborů, nástrojů a dat. Ne proto, že musím — proto, že mě to baví a klientům to dává náskok.",
  },
  {
    title: "AI jako doping",
    description:
      "AI tools, second brain, insider data. Používám je jako sportovec doplňky — ne jako náhradu úsudku, ale jako zesilovač.",
  },
  {
    title: "Sprint a regenerace",
    description:
      "Pracuju v intenzivních sprintech s pauzami na přehodnocení. Výsledek: rychlejší dodání bez ztráty kvality.",
  },
];

export default function KnowledgeAthlete() {
  return (
    <section
      className="mx-auto max-w-[960px] px-6 mb-[140px]"
      id="knowledge-athlete"
    >
      <motion.div className="mb-10" {...fadeUp}>
        <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Knowledge Athlete
        </div>
        <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em] max-w-[600px]">
          Pracuju jako atlet. Trénuju, sprintuju, vyhodnocuju
        </h2>
        <p className="max-w-[520px] text-base leading-[1.65] text-text-secondary">
          Konzultace, jak je znáte, jsou mrtvé — na většinu otázek se dá zeptat
          AI. Hlad je po insider datech, rychle. Proto trénuju jako znalostní
          atlet: disciplína, bleeding edge a hluboký ponor do vašeho oboru.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            className="rounded-2xl border border-border bg-card-bg px-6 py-7 transition-colors duration-250 hover:border-[#CDCBC5]"
            {...stagger(i)}
          >
            <h3 className="mb-2 font-heading text-base font-bold tracking-[-0.01em]">
              {p.title}
            </h3>
            <p className="text-[13px] leading-[1.6] text-text-secondary">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
