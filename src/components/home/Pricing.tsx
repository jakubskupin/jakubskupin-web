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

function stagger(index: number) {
  return {
    ...fadeUp,
    transition: { ...fadeUp.transition, delay: index * 0.1 },
  };
}

export default function Pricing() {
  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[140px]" id="pricing">
      <motion.div className="mb-12" {...fadeUp}>
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Spolupráce
        </div>
        <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em]">
          Dva způsoby, jak začít
        </h2>
        <p className="max-w-[460px] text-base leading-[1.6] text-text-secondary">
          Od pojmenování vašeho x-faktoru po kompletní digitální přítomnost.
        </p>
      </motion.div>

      <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.num}
            className={`rounded-3xl border bg-card-bg p-7 transition-colors duration-300 hover:border-[#CDCBC5] ${
              tier.highlighted ? "tier-highlighted" : "border-border"
            }`}
            {...stagger(i)}
            whileHover={{ y: -2 }}
          >
            <div className="mb-2.5 text-[12px] font-bold uppercase tracking-[0.08em] text-text-tertiary">
              {tier.num}
            </div>
            <div className="mb-1.5 font-heading text-xl font-bold tracking-[-0.02em]">
              {tier.name}
            </div>
            <div className="mb-6 min-h-[42px] text-[13.5px] leading-[1.5] text-text-secondary">
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
              className={`block w-full rounded-xl px-5 py-3 text-center text-[13px] font-bold transition-all duration-250 ${
                tier.ctaStyle === "solid"
                  ? "bg-text text-bg hover:opacity-85"
                  : "border border-border text-text hover:border-text"
              }`}
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
        ))}
      </div>

      <motion.p
        className="max-w-[540px] text-[15px] leading-[1.7] text-text-secondary"
        {...fadeUp}
      >
        Věřím, že hotovo je víc než dokonalo. Dvě rychlé iterace a máte v ruce
        něco, s čím jdete za cílovkou — ne za dalším kolem interních revizí.
      </motion.p>
    </section>
  );
}
