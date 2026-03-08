"use client";

import { motion, useScroll, useTransform, type Easing } from "framer-motion";
import { useRef } from "react";
import { LINKEDIN_URL } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as Easing },
};

export default function ClosingCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.6"],
  });

  const zOpacity = useTransform(scrollYProgress, [0.35, 0.65], [1, 0]);
  const yOpacity = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);

  return (
    <motion.section
      ref={ref}
      className="mx-auto max-w-[960px] px-6 mb-[140px] text-center"
      {...fadeUp}
    >
      <h2 className="mb-4 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em]">
        V
        <span className="relative inline-block">
          <motion.span style={{ opacity: zOpacity }}>z</motion.span>
          <motion.span className="absolute inset-0" style={{ opacity: yOpacity }}>
            y
          </motion.span>
        </span>
        nikne to
      </h2>
      <p className="mx-auto mb-8 max-w-[420px] text-base leading-[1.6] text-text-secondary">
        Máte co říct — pojďme tomu dát tvar.
      </p>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-text px-8 py-3.5 text-sm font-bold text-bg transition-all duration-250 hover:opacity-85"
      >
        Napsat na LinkedIn ↗
      </a>
    </motion.section>
  );
}
