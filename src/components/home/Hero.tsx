"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[960px] px-6 pb-[72px] pt-[72px] sm:pb-[120px] sm:pt-[100px]">
      <motion.div
        className="mb-6 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary"
        {...fadeUp}
      >
        Rešerše · Strategie · Koncept
      </motion.div>
      <motion.h1
        className="mb-5 font-heading text-[clamp(36px,6vw,56px)] font-bold leading-[1.1] tracking-[-0.03em]"
        {...stagger(1)}
      >
        Vznikne to.
        <br />
        A&nbsp;pak vynikne
      </motion.h1>
      <motion.p
        className="mb-8 max-w-[540px] text-lg leading-[1.65] text-text-secondary"
        {...stagger(2)}
      >
        Posbírám informace, propojím je a&nbsp;zhmotním do&nbsp;konceptu k&nbsp;otestování.
      </motion.p>
      <motion.a
        href="#sluzby"
        className="mt-4 inline-flex animate-bounce items-center justify-center text-text-tertiary transition-colors duration-300 hover:text-text"
        {...stagger(3)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.a>
    </section>
  );
}
