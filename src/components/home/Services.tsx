"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

type Service = {
  href: string;
  tag: string;
  title: string;
  description: string;
  delivery: string;
  result: string;
  staticPage?: boolean;
  badge?: string;
  inverted?: boolean;
};

const services: Service[] = [
  {
    href: "/vizualy/",
    tag: "Produktové vizuály",
    title: "Produkt máte. Chybí scény a video",
    description:
      "Z jedné produktovky vyrobím scény, produkt v reálném použití i video. Na sítě, do e-shopu a na testování reklam.",
    delivery: "Do 5 dnů",
    result: "Sada vizuálů",
    staticPage: true,
    badge: "Novinka",
    inverted: true,
  },
  {
    href: "/personal-brand",
    tag: "X-Factor Sprint",
    title: "Osobní značka, která vynikne",
    description:
      "Za dva dny vznikne váš web a LinkedIn profil. Ne šablona, zhmotněná esence toho, čím jste.",
    delivery: "2 dny",
    result: "Hotová značka",
  },
  {
    href: "/content-partner",
    tag: "Creator partner",
    title: "Partner pro tvůrce a CEO",
    description:
      "Přemýšlím s vámi, ne za vás. Koncepty, obsahová strategie, reframing, aby z vašich myšlenek vzniklo něco konkrétního.",
    delivery: "Průběžně",
    result: "Jasný směr",
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
        {services.map((service, i) => {
          const CardTag = service.staticPage ? "a" : Link;
          const inv = service.inverted;
          return (
            <motion.div key={service.href} {...stagger(i + 1)}>
              <CardTag
                href={service.href}
                className={`group flex h-full flex-col justify-between rounded-2xl border p-7 transition-all duration-300 hover:border-text/20 hover:shadow-[0_8px_30px_rgba(26,26,24,0.08)] ${
                  inv ? "border-text bg-text text-bg" : "border-border bg-card-bg"
                }`}
              >
                <div>
                  <div className="mb-4 flex items-center gap-2.5">
                    <span
                      className={`font-mono text-[11px] font-medium uppercase tracking-[0.08em] ${
                        inv ? "text-bg/60" : "text-text-tertiary"
                      }`}
                    >
                      {service.tag}
                    </span>
                    {service.badge && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] ${
                          inv ? "bg-bg text-text" : "bg-text text-bg"
                        }`}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 font-heading text-[1.2rem] font-bold leading-tight tracking-[-0.02em]">
                    {service.title}
                  </h3>
                  <p
                    className={`text-[14px] leading-[1.6] ${
                      inv ? "text-bg/75" : "text-text-secondary"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
                <div
                  className={`mt-6 flex items-end justify-between border-t pt-4 ${
                    inv ? "border-bg/20" : "border-border"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] ${
                      inv ? "text-bg/60" : "text-text-tertiary"
                    }`}
                  >
                    {service.delivery}
                  </span>
                  <span className="font-heading text-[15px] font-bold tracking-[-0.01em]">
                    {service.result}
                  </span>
                </div>
              </CardTag>
            </motion.div>
          );
        })}
      </div>

      <motion.p className="mt-7 text-[14px] text-text-secondary" {...stagger(4)}>
        Potřebujete jen hloubkovou rešerši?{" "}
        <Link
          href="/research-sprint"
          className="font-semibold text-text underline decoration-border underline-offset-4 transition-colors duration-250 hover:decoration-text"
        >
          {"AI Research Sprint →"}
        </Link>
      </motion.p>
    </section>
  );
}
