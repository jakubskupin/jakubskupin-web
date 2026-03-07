"use client";

import { motion, useInView, type Easing } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LINKEDIN_URL } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as Easing },
};

export default function ClosingCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showY, setShowY] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const t1 = setTimeout(() => setShowY(true), 1500);
    const t2 = setTimeout(() => setShowY(false), 3500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      className="mx-auto max-w-[960px] px-6 mb-[140px] text-center"
      {...fadeUp}
    >
      <h2 className="mb-4 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em]">
        V
        <span className="relative inline-block">
          <motion.span
            animate={{ opacity: showY ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          >
            z
          </motion.span>
          <motion.span
            className="absolute inset-0"
            animate={{ opacity: showY ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
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
