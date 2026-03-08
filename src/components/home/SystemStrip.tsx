"use client";

import { motion, type Easing } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as Easing },
};

const steps = ["Výzkum", "Strategie", "Design", "Copywriting", "Web", "Obsah"];

export default function SystemStrip() {
  return (
    <motion.div
      className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[120px]"
      {...fadeUp}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {steps.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="text-[14px] font-semibold tracking-[0.02em] text-text-secondary">
                {step}
              </span>
              {i < steps.length - 1 && (
                <span className="text-[13px] text-text-tertiary">→</span>
              )}
            </span>
          ))}
        </div>
        <div className="text-[14px] tracking-[0.02em] text-text-tertiary text-center">
          <p>
            Jeden člověk, <strong className="font-bold text-text-secondary">2 dny</strong>.
          </p>
          <p className="mt-1.5">
            AI mi dává rychlost a hloubku,<br className="sm:hidden" /> kterou od jednotlivce nečekáte.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
