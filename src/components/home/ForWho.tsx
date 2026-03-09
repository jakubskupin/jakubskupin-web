"use client";

import { motion, type Easing } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as Easing },
};

const sections = [
  {
    label: "S čím se trápíte",
    items: [
      "Lidé vás doporučují. Ale kdo vás hledá, ten vás nenajde.",
      "Na marketing nemáte čas — a nechcete ho dělat špatně.",
      "Nevíte, co je důležité a co je zbytečné.",
    ],
  },
  {
    label: "Co potřebujete",
    items: [
      "Online přítomnost, kterou byste sami najali.",
      "Jasné sdělení: kdo jste, pro koho a proč.",
      "Důkazy vaší práce na jednom místě.",
    ],
  },
  {
    label: "Co udělám",
    items: [
      "Vytáhnu z vás to, co klienti kupují — a sestavím to online.",
      "Připravím strukturu, messaging a první obsah.",
      "Vy dodáte minimum. Zbytek vyřeším já.",
    ],
  },
];

export default function ForWho() {
  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[140px]" id="pro-koho">
      <motion.div className="mb-10" {...fadeUp}>
        <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Poznáváte se?
        </div>
        <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em] max-w-[600px]">
          Roky to odkládáte
        </h2>
        <p className="max-w-[520px] text-base leading-[1.6] text-text">
          Doba se změnila.{" "}
          <strong className="font-bold text-text">Teď se to stane.</strong>
        </p>
      </motion.div>

      <motion.div
        className="max-w-[540px] rounded-2xl border border-border bg-card-bg px-6 py-7 md:px-8 md:py-9"
        {...fadeUp}
      >
        <div className="mb-5 inline-block rounded-full border border-border bg-[#F4F3F0] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-text">
          Expert
        </div>
        <h3 className="mb-6 font-heading text-[17px] font-bold leading-[1.35] tracking-[-0.01em]">
          Jste skvělí, online to ale nikdo nevidí.
        </h3>

        <div className="space-y-6">
          {sections.map((s) => (
            <div key={s.label}>
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.06em] text-text-tertiary">
                {s.label}
              </div>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-text"
                  >
                    <span className="mt-[6px] block h-1.5 w-1.5 shrink-0 rounded-full bg-text-tertiary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
