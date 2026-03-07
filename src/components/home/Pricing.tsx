"use client";

import { motion, type Easing } from "framer-motion";
import { tiers, LINKEDIN_URL } from "@/lib/data";
import ClockIcon from "@/components/ui/ClockIcon";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as Easing },
};

export default function Pricing() {
  const tier = tiers[0];

  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[140px]" id="pricing">
      <motion.div className="mb-12" {...fadeUp}>
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Služba
        </div>
        <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em]">
          Nemáte čas to řešit sami
        </h2>
        <p className="max-w-[520px] text-base leading-[1.6] text-text-secondary">
          A nemusíte. Vy dodáte minimum — zbytek{" "}
          <strong className="font-bold text-text">vyřeším já.</strong>
        </p>
      </motion.div>

      <motion.div
        className="relative mb-12 max-w-[560px] overflow-hidden rounded-3xl border border-border bg-card-bg p-8 transition-colors duration-300 hover:border-[#CDCBC5]"
        {...fadeUp}
        whileHover={{ y: -2 }}
      >
        <div className="absolute right-[-40px] top-[20px] z-10 rotate-45 bg-text px-12 py-1 text-center text-[9px] font-bold uppercase tracking-[0.04em] text-bg shadow-sm">
          Zaváděcí cena
        </div>
        <div className="mb-1.5 font-heading text-xl font-bold tracking-[-0.02em]">
          {tier.name}
        </div>
        <div className="mb-6 text-[13.5px] leading-[1.5] text-text-secondary">
          {tier.tagline}
        </div>

        {/* Price */}
        <div className="mb-6 border-b border-border pb-6">
          <div className="font-heading text-[32px] font-bold leading-none tracking-[-0.03em]">
            {tier.price}{" "}
            <span className="text-base font-semibold text-text-secondary">
              Kč
            </span>
          </div>
          <div className="mt-1 text-xs text-text-tertiary">
            {tier.priceNote}
          </div>
        </div>

        {/* Features */}
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-text-tertiary">
          Výstupy
        </div>
        <ul className="features mb-6 flex flex-col gap-2.5">
          {tier.features.map((f) => (
            <li
              key={f}
              className="text-[13.5px] leading-[1.45] text-text-secondary"
            >
              {f}
            </li>
          ))}
        </ul>

        {/* Delivery */}
        <div className="mb-6 flex items-center gap-1.5 text-xs font-semibold text-text-secondary">
          <ClockIcon />
          {tier.delivery}
        </div>

        {/* CTA */}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl bg-text px-5 py-3 text-center text-[13px] font-bold text-bg transition-all duration-250 hover:opacity-85"
        >
          {tier.cta}
        </a>

        {/* Exclusions */}
        <div className="mt-3 border-t border-border pt-4">
          <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.08em] text-text-tertiary">
            Mimo rozsah
          </div>
          <p className="text-xs leading-[1.5] text-text-tertiary">
            {tier.exclusions}
          </p>
        </div>
      </motion.div>

      <motion.div
        className="max-w-[540px] border-l-2 border-border pl-5"
        {...fadeUp}
      >
        <p className="text-[15px] leading-[1.7] text-text-secondary">
          Věřím, že hotovo je víc než dokonalo. Jedna rychlá iterace a máte
          v ruce něco, s čím jdete za cílovkou — ne za dalším kolem interních
          revizí.
        </p>
        <div className="mt-3 text-[13px] font-semibold text-text-tertiary">
          — Jakub
        </div>
      </motion.div>
    </section>
  );
}
