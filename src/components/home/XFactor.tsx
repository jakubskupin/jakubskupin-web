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
    transition: { ...fadeUp.transition, delay: index * 0.15 },
  };
}

const steps = [
  {
    num: "01",
    title: "Research a strategie",
    description:
      "Rešerše trhu, cílových skupin a tónu. AI analýza + lidský úsudek. Do 48 hodin máte jasno.",
  },
  {
    num: "02",
    title: "X-factor",
    description:
      "Z výzkumu pojmenuju, čím jste výjimeční — to, co sami nevidíte, protože je to pro vás samozřejmé.",
  },
  {
    num: "03",
    title: "Brand a web",
    description:
      "Vizuální identita a web postavený kolem vašeho x-faktoru. Ne šablona — systém, který dává smysl.",
  },
  {
    num: "04",
    title: "Obsahový systém",
    description:
      "LinkedIn strategie, formáty, první obsah. Víte co, kam a proč publikovat.",
  },
];

export default function XFactor() {
  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[140px]" id="proces">
      <motion.div className="mb-14" {...fadeUp}>
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Jak pracuji
        </div>
        <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em] max-w-[600px]">
          Za dva dny máte funkční základ
        </h2>
        <p className="max-w-[520px] text-base leading-[1.6] text-text-secondary">
          Ne plán, ale hotové věci, se kterými jdete za prvními klienty.
        </p>
      </motion.div>

      <div className="relative ml-4 md:ml-8">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative pl-10"
              {...stagger(i)}
            >
              {/* Dot */}
              <div className="absolute left-0 top-1 flex h-[15px] w-[15px] items-center justify-center">
                <div className="h-[7px] w-[7px] rounded-full bg-text" />
              </div>

              {/* Content */}
              <div className="text-[12px] font-bold uppercase tracking-[0.08em] text-text-tertiary mb-1.5">
                {step.num}
              </div>
              <h3 className="mb-2 font-heading text-[17px] font-bold tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-text-secondary max-w-[480px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
