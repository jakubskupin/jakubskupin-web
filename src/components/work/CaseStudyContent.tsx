"use client";

import Link from "next/link";
import { motion, type Easing } from "framer-motion";
import type { CaseStudy } from "@/lib/types";

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

export default function CaseStudyContent({
  cs,
  nextCs,
  nextSlug,
}: {
  cs: CaseStudy;
  nextCs: CaseStudy;
  nextSlug: string;
}) {
  return (
    <main className="mx-auto max-w-[960px] px-6 pb-[120px] pt-[100px]">
      {/* Hero */}
      <motion.div className="mb-[100px]" {...fadeUp}>
        <Link
          href="/#work"
          className="mb-8 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary transition-colors hover:text-text"
        >
          ← Zpět
        </Link>

        <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          {cs.tag}
        </div>
        <h1 className="mb-4 font-heading text-[clamp(36px,5.5vw,52px)] font-bold leading-[1.12] tracking-[-0.03em]">
          {cs.title}
        </h1>
        <p className="mb-3 max-w-[520px] text-lg leading-[1.65] text-text-secondary">
          {cs.description}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-text-tertiary">
          <span>{cs.client} — {cs.clientRole}</span>
          <span>{cs.url}</span>
          <span>{cs.deliveryTime}</span>
        </div>
      </motion.div>

      {/* Challenge */}
      <motion.section className="mb-[100px]" {...fadeUp}>
        <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Výzva
        </div>
        <p className="max-w-[600px] text-base leading-[1.7] text-text-secondary">
          {cs.challenge}
        </p>
      </motion.section>

      {/* AI Process Timeline */}
      <section className="mb-[100px]">
        <motion.div className="mb-10" {...fadeUp}>
          <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
            Proces
          </div>
          <h2 className="font-heading text-[clamp(24px,3.5vw,32px)] font-bold tracking-[-0.03em]">
            AI + lidský úsudek, den po dni
          </h2>
        </motion.div>

        <div className="space-y-4">
          {cs.timeline.map((step, i) => (
            <motion.div
              key={step.day}
              className="rounded-2xl border border-border bg-card-bg px-7 py-6"
              {...stagger(i)}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                <div className="shrink-0 text-[13px] font-bold uppercase tracking-[0.06em] text-text-tertiary sm:w-[100px] sm:pt-0.5">
                  {step.day}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-heading text-base font-bold tracking-[-0.01em]">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-text-secondary">
                    {step.description}
                  </p>
                  {step.aiContribution && (
                    <p className="mt-2 text-[13px] leading-[1.5] text-text-tertiary">
                      AI: {step.aiContribution}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deliverables + Metrics */}
      <motion.section className="mb-[100px]" {...fadeUp}>
        <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Výsledek
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold tracking-[-0.01em]">
              Deliverables
            </h3>
            <ul className="space-y-2">
              {cs.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 text-[14px] leading-[1.6] text-text-secondary"
                >
                  <span className="mt-[7px] block h-1.5 w-1.5 shrink-0 rounded-full bg-text-tertiary" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {cs.metrics && cs.metrics.length > 0 && (
            <div>
              <h3 className="mb-4 font-heading text-lg font-bold tracking-[-0.01em]">
                Metriky
              </h3>
              <div className="space-y-3">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-[13px] text-text-tertiary">
                      {m.label}
                    </div>
                    <div className="font-heading text-2xl font-bold tracking-[-0.02em]">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.section>

      {/* Testimonial */}
      {cs.testimonial && (
        <motion.section className="mb-[100px]" {...fadeUp}>
          <blockquote className="mx-auto max-w-[600px] text-center">
            <p className="mb-6 font-heading text-[clamp(18px,2.5vw,22px)] font-bold leading-[1.5] tracking-[-0.02em]">
              &bdquo;{cs.testimonial.quote}&ldquo;
            </p>
            <footer className="text-[14px] text-text-secondary">
              {cs.testimonial.author} — {cs.testimonial.role}
            </footer>
          </blockquote>
        </motion.section>
      )}

      {/* Next Project */}
      <motion.section className="text-center" {...fadeUp}>
        <div className="mb-3 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Další projekt
        </div>
        <Link
          href={`/work/${nextSlug}`}
          className="group inline-block"
        >
          <h2 className="font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em] transition-opacity duration-250 group-hover:opacity-70">
            {nextCs.title} →
          </h2>
          <p className="mt-2 text-[14px] text-text-secondary">
            {nextCs.tag}
          </p>
        </Link>
      </motion.section>
    </main>
  );
}
