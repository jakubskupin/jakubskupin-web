"use client";

import { motion, type Easing } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { LINKEDIN_URL } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as Easing },
};

const PROOF_LINKS = [
  {
    label: "150+ účastníků AI workshopů",
    url: "https://www.linkedin.com/posts/jakubskupin_ai-workflow-activity-7057580781249933312-L8gw",
  },
  {
    label: "AI v kreativním procesu",
    url: "https://www.forendors.cz/p/ef04914547f4449dc6b01beff56cde43",
  },
  {
    label: "Jak používám AI",
    url: "https://www.linkedin.com/in/jakubskupin/recent-activity/all/",
  },
];

export default function AboutMe() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[140px]">
      <motion.div
        className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12"
        {...fadeUp}
      >
        {/* Photo with wink on hover */}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative shrink-0 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-2xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/jakub-skupin.png"
            alt="Jakub Skupin"
            width={240}
            height={240}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src="/jakub.skupin-wink.png"
            alt="Jakub Skupin — wink"
            width={240}
            height={240}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>

        {/* Text */}
        <div className="max-w-[520px]">
          <h3 className="mb-1 font-heading text-xl font-bold tracking-[-0.02em]">
            Jakub Skupin
          </h3>
          <p className="mb-4 text-[13.5px] leading-[1.5] text-text-secondary">
            Stratég, který kóduje. Rešeršér, který designuje.
          </p>
          <p className="mb-4 text-[15px] leading-[1.7] text-text">
            Jeden člověk od rešerše po hotové výstupy. Eliminuju meetingy a šum.
            AI používám ne jako zkratku. Jako nástroj pro hloubku, kterou
            nečekáte.
          </p>
          <p className="mb-6 text-[15px] leading-[1.7] text-text">
            Snižuju frikci, aby věci vznikly — a pak vynikly. Nejlepší feedback
            dostaneme od trhu, ne od dalšího kola revizí.
          </p>

          {/* Proof links */}
          <div className="flex flex-wrap gap-2">
            {PROOF_LINKS.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[10px] font-medium text-text-tertiary transition-colors duration-200 hover:border-text-tertiary hover:text-text-secondary"
              >
                {link.label}
                <span className="text-[9px]">↗</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
