"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LINKEDIN_URL } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

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
      id="kontakt"
      className="relative mx-auto max-w-[960px] border-t border-border px-6 py-[96px] sm:py-[140px] text-center"
      {...fadeUp}
    >
      <h2 className="mb-4 font-heading text-[clamp(28px,4.5vw,40px)] font-bold leading-[1.2] tracking-[-0.03em]">
        Máte v&nbsp;hlavě něco,
        <br />
        co chce{" "}
        <em className="font-heading italic">
          v
          <span className="relative inline-block">
            <motion.span style={{ opacity: zOpacity }}>z</motion.span>
            <motion.span className="absolute inset-0" style={{ opacity: yOpacity }}>
              y
            </motion.span>
          </span>
          niknout?
        </em>
      </h2>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-text px-8 py-3.5 text-sm font-bold text-bg transition-all duration-300 hover:opacity-85"
      >
        Ozvěte se mi
        <span>→</span>
      </a>
    </motion.section>
  );
}
