"use client";

import { motion, type Easing } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as Easing },
};

export default function WebIsDead() {
  return (
    <motion.section
      className="mx-auto max-w-[600px] px-6 mb-[80px] sm:mb-[140px]"
      {...fadeUp}
    >
      <p className="mb-1 font-heading text-[17px] font-bold leading-[1.35] tracking-[-0.01em]">
        Web je mrtvý
      </p>
      <p className="text-[15px] leading-[1.7] text-text">
        Současně vás donutí přemýšlet. O sobě. O službě. O cílovce.
      </p>
    </motion.section>
  );
}
