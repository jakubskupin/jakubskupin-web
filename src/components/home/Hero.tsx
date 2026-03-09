"use client";

import { motion, type Easing } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as Easing },
};

export default function Hero() {
  return (
    <motion.section
      className="mx-auto max-w-[960px] px-6 pb-[72px] pt-[72px] sm:pb-[120px] sm:pt-[100px]"
      {...fadeUp}
    >
      <div className="mb-6 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
        Personal brand × AI × Marketing
      </div>
      <h1 className="mb-7 font-heading text-[clamp(34px,5.5vw,52px)] font-bold leading-[1.12] tracking-[-0.03em]">
        Pojmenuju,<br className="sm:hidden" /> čím jste výjimeční
      </h1>
      <p className="max-w-[520px] text-lg leading-[1.65] text-text">
        Pro experty a tvůrce, kteří mají co říct — ale online to není
        vidět.
      </p>
    </motion.section>
  );
}
