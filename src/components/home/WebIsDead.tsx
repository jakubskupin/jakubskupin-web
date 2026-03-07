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
      className="mx-auto max-w-[960px] px-6 mb-[140px]"
      {...fadeUp}
    >
      <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em] max-w-[600px]">
        Web je mrtvý
      </h2>
      <p className="max-w-[520px] text-base leading-[1.6] text-text-secondary">
        Ale současně vás donutí přemýšlet. O sobě. O službě.{" "}
        <strong className="font-bold text-text">O cílovce.</strong>
      </p>
    </motion.section>
  );
}
