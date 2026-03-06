"use client";

import { motion, type Easing } from "framer-motion";

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

const personas = [
  {
    label: "Expert",
    title: "Máte expertízu, ale online to nevidíte",
    bullets: [
      "Konzultant, terapeut nebo kouč",
      "Lidé vás doporučují, ale web a LinkedIn tomu neodpovídají",
      "Potřebujete online přítomnost, která odráží to, co umíte",
    ],
  },
  {
    label: "CEO",
    title: "Jste firma — a zároveň její tvář",
    bullets: [
      "Vedete malou firmu a vy jste ten brand",
      "Klienti kupují vás, ne logo",
      "Nemáte čas řešit web, obsah ani strategii",
    ],
  },
  {
    label: "Creator",
    title: "Tvoříte obsah a chcete z něj víc",
    bullets: [
      "Podcast, newsletter nebo YouTube",
      "Publikum roste, ale chybí jasná značka",
      "Chcete web, který z pozornosti udělá byznys",
    ],
  },
];

export default function ForWho() {
  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[140px]">
      <motion.div className="mb-10" {...fadeUp}>
        <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Pro koho
        </div>
        <h2 className="font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em] max-w-[600px]">
          Poznáváte se?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {personas.map((p, i) => (
          <motion.div
            key={p.label}
            className="rounded-2xl border border-border bg-card-bg px-6 py-7 transition-colors duration-250 hover:border-[#CDCBC5]"
            {...stagger(i)}
          >
            <div className="mb-5 inline-block rounded-full border border-border bg-[#F4F3F0] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-text">
              {p.label}
            </div>
            <h3 className="mb-4 font-heading text-[15px] font-bold leading-[1.35] tracking-[-0.01em]">
              {p.title}
            </h3>
            <ul className="space-y-2">
              {p.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-text-secondary"
                >
                  <span className="mt-[6px] block h-1.5 w-1.5 shrink-0 rounded-full bg-text-tertiary" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
