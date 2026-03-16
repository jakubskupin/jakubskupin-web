"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const steps = [
  {
    num: "01",
    title: "Posbírám",
    text: "Vaše vstupy, data, kontext. Vidím v\u00a0nich vzorce a\u00a0hledám insighty.",
  },
  {
    num: "02",
    title: "Propojím",
    text: "Křížím obory, zdroje a perspektivy. Z\u00a0roztříštěného vzniká celek.",
  },
  {
    num: "03",
    title: "Zhmotním",
    text: "Koncept, web, analýza, strategie — hotová věc, která se dá použít. Hned.",
  },
];

function Step({ step, index }: { step: (typeof steps)[number]; index: number }) {
  return (
    <motion.div className="sm:px-4 sm:text-center" {...stagger(index + 1)}>
      <div className="mb-2 font-heading text-[2.8rem] leading-none text-border">
        {step.num}
      </div>
      <h3 className="mb-2 font-heading text-xl font-bold tracking-[-0.02em]">
        {step.title}
      </h3>
      <p className="text-[15px] leading-[1.6] text-text-secondary">
        {step.text}
      </p>
    </motion.div>
  );
}

function Arrow() {
  return (
    <div className="hidden items-start pt-5 text-2xl font-light text-border sm:flex">
      →
    </div>
  );
}

export default function Process() {
  return (
    <section className="mx-auto max-w-[960px] border-t border-border px-6 py-[72px] sm:py-[100px]">
      <motion.div
        className="mb-10 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-tertiary"
        {...fadeUp}
      >
        Jak pracuju
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-start sm:gap-0">
        <Step step={steps[0]} index={0} />
        <Arrow />
        <Step step={steps[1]} index={1} />
        <Arrow />
        <Step step={steps[2]} index={2} />
      </div>
    </section>
  );
}
