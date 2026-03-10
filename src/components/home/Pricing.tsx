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
    <section className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[140px]" id="pricing">
      <motion.div className="mb-12" {...fadeUp}>
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Služba
        </div>
        <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em]">
          Nemáte čas<br className="sm:hidden" /> to řešit sami
        </h2>
        <p className="max-w-[520px] text-base leading-[1.6] text-text">
          A nemusíte.{" "}
          <strong className="font-bold text-text">Vyřeším to.</strong>
        </p>
      </motion.div>

      <motion.div
        className="relative mb-12 max-w-[560px] rounded-3xl border border-border bg-card-bg p-8 transition-colors duration-300 hover:border-[#CDCBC5]"
        {...fadeUp}
        whileHover={{ y: -2 }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute right-[-40px] top-[20px] z-10 rotate-45 bg-text px-12 py-1 text-center text-[9px] font-bold uppercase tracking-[0.04em] text-bg shadow-sm">
            Zaváděcí cena
          </div>
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

        {/* Knowledge */}
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-text-tertiary">
          Budete vědět
        </div>
        <ul className="features mb-6 flex flex-col gap-2.5">
          {tier.knowledge.map((f) => (
            <li
              key={f}
              className="text-[13.5px] leading-[1.45] text-text"
            >
              {f}
            </li>
          ))}
        </ul>

        {/* Artifacts */}
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-text-tertiary">
          A budete mít
        </div>
        <ul className="features mb-6 flex flex-col gap-2.5">
          {tier.artifacts.map((f) => (
            <li
              key={f}
              className="text-[13.5px] leading-[1.45] text-text"
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

        {/* Transformation closer */}
        <p className="mb-6 text-[13.5px] leading-[1.5] text-text">
          Konečně víte, co říct. A máte kde to ukázat.
        </p>

        {/* CTA */}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl bg-text px-5 py-3 text-center text-[13px] font-bold text-bg transition-all duration-250 hover:opacity-85"
        >
          {tier.cta}
        </a>

      </motion.div>
    </section>
  );
}
