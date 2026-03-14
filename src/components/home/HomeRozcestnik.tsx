"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const services = [
  {
    href: "/personal-brand",
    headline: "Online to není vidět? Za 2 dny to změníme",
    subheadline:
      "Web + LinkedIn + positioning pro experty a tvůrce.",
    label: "X-Factor Sprint",
    cta: "Chci svůj brand",
    featured: true,
  },
  {
    href: "/research-sprint",
    headline: "Strategická analýza za dny, ne týdny",
    subheadline:
      "Hloubková rešerše pro firmy, agentury i freelancery.",
    label: "AI Research Sprint",
    cta: "Chci rešerši",
    featured: false,
  },
  {
    href: "/content-partner",
    headline: "Máte brand, ale nestíháte tvořit",
    subheadline: "Sparring partner pro tvůrce a CEO.",
    label: "Content Partner",
    cta: "Chci obsah",
    featured: false,
  },
];

export default function HomeRozcestnik() {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <header className="px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-[960px]">
          <motion.div {...fadeUp}>
            <h1 className="font-heading text-[clamp(32px,5.5vw,48px)] font-bold leading-[1.1] tracking-[-0.03em]">
              Jakub Skupin
            </h1>
            <p className="mt-4 max-w-[520px] text-lg text-text-secondary">
              Rešerše. Strategie. Výstupy. Jeden člověk, AI jako páka.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Service cards */}
      <section className="px-6 pb-4">
        <div className="mx-auto max-w-[960px]">
          {/* Featured card (X-Factor Sprint) */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <Link
              href={services[0].href}
              className="group block rounded-2xl border border-border bg-card-bg p-8 transition-all duration-300 hover:border-text/20 hover:shadow-[0_8px_30px_rgba(26,26,24,0.08)] md:p-10"
            >
              <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.1em] text-text-tertiary">
                {services[0].label}
              </span>
              <h2 className="font-heading text-[clamp(24px,4vw,36px)] font-bold leading-tight tracking-[-0.03em]">
                {services[0].headline}
              </h2>
              <p className="mt-3 max-w-[480px] text-text-secondary">
                {services[0].subheadline}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-text-tertiary transition-colors duration-200 group-hover:text-text">
                {services[0].cta}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Two smaller cards */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {services.slice(1).map((service, i) => (
              <motion.div
                key={service.href}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: stagger(i + 2).transition.delay }}
              >
                <Link
                  href={service.href}
                  className="group block h-full rounded-2xl border border-border bg-card-bg p-7 transition-all duration-300 hover:border-text/20 hover:shadow-[0_8px_30px_rgba(26,26,24,0.08)]"
                >
                  <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.1em] text-text-tertiary">
                    {service.label}
                  </span>
                  <h2 className="font-heading text-xl font-bold leading-tight tracking-[-0.02em]">
                    {service.headline}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary">
                    {service.subheadline}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-text-tertiary transition-colors duration-200 group-hover:text-text">
                    {service.cta}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      <path
                        d="M6 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Athlete teaser */}
      <section className="mt-4 px-6 pb-12">
        <div className="mx-auto max-w-[960px]">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
          >
            <Link
              href="/knowledge-athlete"
              className="group flex items-center justify-between rounded-xl border border-border/60 px-7 py-5 transition-all duration-300 hover:border-text/15 hover:bg-card-bg"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-text-tertiary">
                  Knowledge Athlete
                </span>
                <p className="mt-1 text-sm text-text-secondary">
                  Živé rozhovory s top experty na design, LinkedIn,
                  tonalitu a další.
                </p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-text-tertiary transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-text"
              >
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
