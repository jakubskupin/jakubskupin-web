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
    description:
      "Jste konzultant, terapeut nebo kouč. Lidé vás doporučují, ale váš web a LinkedIn tomu neodpovídají. Potřebujete, aby vaše online přítomnost odrážela to, co umíte.",
  },
  {
    label: "CEO",
    title: "Jste firma — a zároveň její tvář",
    description:
      "Vedete malou firmu a vy jste ten brand. Klienti kupují vás, ne logo. Ale nemáte čas řešit web, obsah ani strategii — potřebujete člověka, který to udělá za vás.",
  },
  {
    label: "Creator",
    title: "Tvoříte obsah a chcete z něj víc",
    description:
      "Máte podcast, newsletter nebo YouTube. Publikum roste, ale chybí vám jasná značka a web, který z pozornosti udělá byznys.",
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
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.08em] text-text-tertiary">
              {p.label}
            </div>
            <h3 className="mb-3 font-heading text-[15px] font-bold leading-[1.35] tracking-[-0.01em]">
              {p.title}
            </h3>
            <p className="text-[13px] leading-[1.6] text-text-secondary">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
