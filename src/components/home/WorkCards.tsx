"use client";

import Image from "next/image";
import { motion, type Easing } from "framer-motion";
import { works } from "@/lib/data";

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

export default function WorkCards() {
  return (
    <section className="mx-auto max-w-[960px] px-6" id="work">
      <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
        Vybraná práce
      </div>
      <div className="mb-[140px] grid grid-cols-1 gap-5 sm:grid-cols-2">
        {works.map((work, i) => (
          <a key={work.slug} href={work.externalUrl ?? `/work/${work.slug}`} target="_blank" rel="noopener noreferrer">
            <motion.div
              className="relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-card-bg transition-colors duration-300 hover:border-[#CDCBC5]"
              {...stagger(i)}
              whileHover={{ y: -3 }}
            >
              {work.concept && (
                <div className="absolute right-[-34px] top-[22px] z-10 rotate-45 bg-text-tertiary px-10 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white shadow-sm">
                  Koncept
                </div>
              )}
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-border bg-[#F4F3F0] px-4 py-3">
                <div className="browser-dots flex gap-1.5">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="ml-2 flex-1 rounded-md bg-card-bg px-3 py-[5px] font-sans text-[11px] text-text-tertiary">
                  {work.url}
                </div>
              </div>
              {/* Screenshot */}
              {work.screenshot ? (
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={work.screenshot}
                    alt={`${work.title} — ${work.url}`}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-b from-[#EEECEA] to-[#E4E2DE] text-[13px] font-medium text-text-tertiary">
                  screenshot — brzy
                </div>
              )}
              {/* Info */}
              <div className="px-6 py-5">
                <h3 className="mb-1 font-heading text-[17px] font-semibold tracking-[-0.01em]">
                  {work.title}
                </h3>
                {work.description && (
                  <p className="text-[13.5px] leading-[1.5] text-text-secondary">
                    {work.description}
                  </p>
                )}
                <span className="mt-3 inline-block rounded-md bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.04em] text-text-tertiary">
                  {work.tag}
                </span>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}
