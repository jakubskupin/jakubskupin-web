"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Easing } from "framer-motion";
import { serviceGroups } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as Easing },
};

export default function OngoingServices() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.section
      className="mx-auto max-w-[960px] px-6 mb-[140px]"
      {...fadeUp}
    >
      <div className="mb-9">
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          A pak?
        </div>
        <h2 className="mb-2 font-heading text-[clamp(24px,3vw,30px)] font-bold tracking-[-0.02em]">
          Sprint je katalyzátor
        </h2>
        <p className="max-w-[460px] text-[15px] text-text-secondary">
          Pak nastupuje{" "}
          <span
            className="relative inline"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <strong className="font-bold text-text cursor-help border-b border-dashed border-text-tertiary">
              AI-native content systém
            </strong>
            <AnimatePresence>
              {showTooltip && (
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full z-50 mt-2 w-[340px] rounded-xl border border-border bg-card-bg px-5 py-4 text-[12.5px] leading-[1.6] text-text-secondary shadow-lg"
                >
                  Kontext je nejdražší vstup pro AI — bez něj
                  generuje průměr. X-Factor Sprint definuje váš
                  specifický kontext (tonalita, vizuál, cílovka,
                  positioning). AI pak drží konzistentní výstupy bez
                  opakovaného vysvětlování.
                </motion.span>
              )}
            </AnimatePresence>
          </span>{" "}
          — drží konzistenci tonality, vizuálu i cílovky ze sprintu.
          Jeden člověk, síla celého týmu.
        </p>
      </div>

      <div className="space-y-6">
        {serviceGroups.map((group) => (
          <div key={group.label}>
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-text-tertiary">
              {group.label}
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {group.services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-border bg-card-bg px-5 py-6 transition-colors duration-250 hover:border-[#CDCBC5]"
                >
                  <h3 className="mb-1.5 font-heading text-sm font-bold tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <p className="text-[12.5px] leading-[1.5] text-text-secondary">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-[13px] text-text-tertiary">
        Rozsah a cenu řešíme individuálně.
      </p>
    </motion.section>
  );
}
