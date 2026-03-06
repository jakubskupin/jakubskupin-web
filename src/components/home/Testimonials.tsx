"use client";

import { motion, type Easing } from "framer-motion";
import { testimonials } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as Easing },
};

export default function Testimonials() {
  const t = testimonials[0];

  return (
    <motion.section
      className="mx-auto max-w-[600px] px-6 mb-[140px]"
      {...fadeUp}
    >
      <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
        Reference
      </div>
      <p className="mb-6 text-xl leading-[1.65]">„{t.quote}"</p>
      <div className="text-sm font-semibold">{t.author}</div>
      <div className="text-[13px] text-text-tertiary">{t.role}</div>
    </motion.section>
  );
}
