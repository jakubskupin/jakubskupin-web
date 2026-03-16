"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const services = [
  {
    href: "/personal-brand",
    tag: "X-Factor Sprint",
    title: "Osobní značka, která vynikne",
    description:
      "Za dva dny vznikne váš web a\u00a0LinkedIn profil. Ne šablona — zhmotněná esence toho, čím jste.",
    delivery: "2 dny",
    result: "Hotová značka",
  },
  {
    href: "/content-partner",
    tag: "Sparring partner",
    title: "Kreativní partner pro tvůrce a\u00a0lídry",
    description:
      "Přemýšlím s\u00a0vámi, ne za vás. Koncepty, obsahová strategie, reframing — aby z\u00a0vašich myšlenek vzniklo něco konkrétního.",
    delivery: "Průběžně",
    result: "Jasný směr",
  },
  {
    href: "/research-sprint",
    tag: "Research Sprint",
    title: "Hloubkový výzkum za zlomek času",
    description:
      "Strategická analýza v\u00a0rozsahu, na který tým potřebuje týdny. Vy ji máte za\u00a0den nebo dva.",
    delivery: "1–2 dny",
    result: "30+ sekcí analýzy",
  },
];

export default function Services() {
  return (
    <section
      id="sluzby"
      className="mx-auto max-w-[960px] border-t border-border px-6 py-[72px] sm:py-[100px]"
    >
      <motion.div
        className="mb-10 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-tertiary"
        {...fadeUp}
      >
        Co vznikne
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-3">
        {services.map((service, i) => (
          <motion.div key={service.href} {...stagger(i + 1)}>
            <Link
              href={service.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card-bg p-7 transition-all duration-300 hover:border-text/20 hover:shadow-[0_8px_30px_rgba(26,26,24,0.08)]"
            >
              <div>
                <div className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-text-tertiary">
                  {service.tag}
                </div>
                <h3 className="mb-2 font-heading text-[1.2rem] font-bold leading-tight tracking-[-0.02em]">
                  {service.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-text-secondary">
                  {service.description}
                </p>
              </div>
              <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                <span className="font-mono text-[11px] text-text-tertiary">
                  {service.delivery}
                </span>
                <span className="font-heading text-[15px] font-bold tracking-[-0.01em]">
                  {service.result}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
