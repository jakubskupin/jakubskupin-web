"use client";

import { motion, type Easing } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as Easing },
};

export default function KnowledgeAthlete() {
  return (
    <section
      className="mx-auto max-w-[960px] px-6 mb-[140px]"
      id="knowledge-athlete"
    >
      <motion.div {...fadeUp}>
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Knowledge Athlete
        </div>
        <h2 className="mb-3 font-heading text-[clamp(24px,3vw,30px)] font-bold tracking-[-0.02em] max-w-[500px]">
          Netvořím sám. Mám tým odborných hlav.
        </h2>
        <p className="max-w-[520px] text-[15px] leading-[1.65] text-text-secondary mb-8">
          Kurátuju síť doménových expertů — lidí, kteří mají insider znalosti
          z oblastí, kde to potřebuju pro klienty. Společně děláme lepší práci,
          než bych zvládl sám.
        </p>
      </motion.div>

      <motion.div
        className="rounded-2xl border border-border bg-card-bg p-7"
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.15 }}
      >
        <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.08em] text-text-tertiary">
          Připravujeme
        </div>
        <p className="text-[14px] leading-[1.6] text-text-secondary">
          Měsíční expert sessions na niche témata. Záznamy setkání brzy
          na{" "}
          <span className="font-semibold text-text">
            jakubskupin.cz/knowledge-athlete
          </span>
        </p>
      </motion.div>
    </section>
  );
}
