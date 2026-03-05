"use client";

import { motion, type Easing } from "framer-motion";

/* ============ MAINTENANCE MODE ============ */
/* true = "pracuje se na webu" | false = plná landing page */
const MAINTENANCE = true;

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

/* ============ DATA ============ */

const works = [
  {
    url: "martinvymetal.cz",
    title: "Martin Vymětal",
    description: "Personal brand a web pro marketéra a podcastera.",
    tag: "Strategie → Web",
  },
  {
    url: "simrani.cz",
    title: "Šimrání",
    description:
      "Brand strategie, vizuální identita a web pro podcast o intimitě.",
    tag: "Research → Brand → Web",
  },
];

const tiers = [
  {
    num: "01",
    name: "Research Sprint",
    tagline: "Hloubková rešerše s vizuálním výstupem do 48 hodin.",
    price: "15 000",
    priceNote: "za jeden sprint",
    features: [
      "Desk research + AI analýza",
      "Syntéza klíčových insightů",
      "Vizuálně zpracovaný dokument",
      "Váš kontext zapracován",
    ],
    delivery: "Do 48 hodin",
    cta: "Domluvit sprint",
    ctaStyle: "outline" as const,
    exclusions: "Strategie, positioning, vizuální identita, web",
    highlighted: false,
  },
  {
    num: "02",
    name: "Starter Pack",
    tagline:
      "Odrazový můstek pro vaši osobní značku. Research, positioning, vizuální směr.",
    price: "27 000",
    priceNote: "jednorázově",
    features: [
      "Vše z Research Sprintu",
      "Cílové skupiny a jejich jazyk",
      "Positioning a klíčové sdělení",
      "Tone of voice a obsahový směr",
      "Vizuální směr a moodboard z referencí",
      "Doporučení formátů a kanálů",
    ],
    delivery: "Do 5 pracovních dní",
    cta: "Začít spolupráci",
    ctaStyle: "solid" as const,
    exclusions: "Vizuální identita, web, exekuce obsahu",
    highlighted: true,
  },
  {
    num: "03",
    name: "Personal Brand & Web",
    tagline:
      "Kompletní osobní značka — od strategie přes identitu po web.",
    price: "od 56 000",
    priceNote: "dle rozsahu",
    features: [
      "Vše ze Starter Packu",
      "Vizuální identita a systém",
      "Konverzní landing page nebo web",
      "Ukázkový obsah (3–5 postů)",
      "Brand guidelines",
      "Iterace na základě zpětné vazby",
    ],
    delivery: "2–4 týdny",
    cta: "Poptat projekt",
    ctaStyle: "outline" as const,
    exclusions: "Správa obsahu, placená reklama, SEO",
    highlighted: false,
  },
];

const services = [
  {
    title: "Copywriting",
    description:
      "LinkedIn posty, bio, speaker profily v tone of voice vaší značky.",
  },
  {
    title: "Slide decky",
    description:
      "Pitch decky, sales decky, interní prezentace. Struktura i vizuál.",
  },
  {
    title: "Instagram",
    description:
      "Vizuální obsah, carousely, stories. Konzistentní brand na sítích.",
  },
  {
    title: "Podcasty & video",
    description:
      "Zpracování epizod, reelsy, krátká videa. Od nahrávky k obsahu.",
  },
];

/* ============ COMPONENTS ============ */

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-text-tertiary shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/* ============ PAGE ============ */

export default function Home() {
  if (MAINTENANCE) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
        <div className="font-heading text-lg font-bold tracking-tight mb-8">
          Jakub Skupin
        </div>
        <h1 className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-[1.2] tracking-[-0.03em] mb-4">
          Pracuje se na novém webu.
        </h1>
        <p className="text-text-secondary text-base max-w-[380px] mb-8">
          Brzy tu bude víc. Zatím mě najdete na LinkedIn.
        </p>
        <a
          href="https://www.linkedin.com/in/jakubskupin/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-text transition-all duration-250 hover:border-text hover:bg-text hover:text-bg"
        >
          LinkedIn ↗
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[960px] px-6">
      {/* NAV */}
      <nav className="flex items-center justify-between py-7">
        <div className="font-heading text-lg font-bold tracking-tight">
          Jakub Skupin
        </div>
        <a
          href="#pricing"
          className="rounded-full border border-border px-5 py-2 text-sm font-medium text-text-secondary transition-all duration-250 hover:border-text hover:text-text"
        >
          Spolupráce
        </a>
      </nav>

      {/* HERO */}
      <motion.section className="max-w-[680px] pb-[120px] pt-[100px]" {...fadeUp}>
        <div className="mb-6 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Marketing × AI × Realizace
        </div>
        <h1 className="mb-7 font-heading text-[clamp(36px,5.5vw,52px)] font-bold leading-[1.12] tracking-[-0.03em]">
          Stavím osobní značky a obsahové systémy, které dávají náskok
        </h1>
        <p className="max-w-[520px] text-lg leading-[1.65] text-text-secondary">
          Propojuji to, co ostatní dělají odděleně — research, strategii,
          obsah i web.
        </p>
      </motion.section>

      {/* WORK */}
      <section>
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Vybraná práce
        </div>
        <div className="mb-[140px] grid grid-cols-1 gap-5 sm:grid-cols-2">
          {works.map((work, i) => (
            <motion.div
              key={work.url}
              className="cursor-pointer overflow-hidden rounded-3xl border border-border bg-card-bg transition-colors duration-300 hover:border-[#CDCBC5]"
              {...stagger(i)}
              whileHover={{ y: -3 }}
            >
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
              {/* Screenshot placeholder */}
              <div className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-b from-[#EEECEA] to-[#E4E2DE] text-[13px] font-medium text-text-tertiary">
                screenshot — brzy
              </div>
              {/* Info */}
              <div className="px-6 py-5">
                <h3 className="mb-1 font-heading text-[17px] font-semibold tracking-[-0.01em]">
                  {work.title}
                </h3>
                <p className="text-[13.5px] leading-[1.5] text-text-secondary">
                  {work.description}
                </p>
                <span className="mt-3 inline-block rounded-md bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.04em] text-text-tertiary">
                  {work.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <motion.section className="mb-[140px] max-w-[600px]" {...fadeUp}>
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Reference
        </div>
        <p className="mb-6 text-xl leading-[1.65]">
          „Pošlete mu SMS a máte web. Nadiktujete zadání v autě a dostanete
          první návrh projektu. Umí přerámovat vaši vizi tak, aby začala
          fungovat."
        </p>
        <div className="text-sm font-semibold">Martin Vymětal</div>
        <div className="text-[13px] text-text-tertiary">
          Marketér, podcaster
        </div>
      </motion.section>

      {/* PRICING */}
      <section className="mb-[140px]" id="pricing">
        <motion.div className="mb-12" {...fadeUp}>
          <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
            Spolupráce
          </div>
          <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em]">
            Tři způsoby, jak začít.
          </h2>
          <p className="max-w-[460px] text-base leading-[1.6] text-text-secondary">
            Od rychlé rešerše po kompletní brand. Vyberte si úroveň, kterou
            teď potřebujete.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.num}
              className={`rounded-3xl border bg-card-bg p-7 transition-colors duration-300 hover:border-[#CDCBC5] ${
                tier.highlighted
                  ? "tier-highlighted"
                  : "border-border"
              }`}
              {...stagger(i)}
              whileHover={{ y: -2 }}
            >
              <div className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-text-tertiary">
                {tier.num}
              </div>
              <div className="mb-1.5 font-heading text-xl font-bold tracking-[-0.02em]">
                {tier.name}
              </div>
              <div className="mb-6 min-h-[42px] text-[13.5px] leading-[1.5] text-text-secondary">
                {tier.tagline}
              </div>

              {/* Price */}
              <div className="mb-6 border-b border-border pb-6">
                <div className="font-heading text-[32px] font-bold leading-none tracking-[-0.03em]">
                  {tier.price}{" "}
                  <span className="text-base font-semibold text-text-secondary">
                    Kč
                  </span>
                </div>
                <div className="mt-1 text-xs text-text-tertiary">
                  {tier.priceNote}
                </div>
              </div>

              {/* Features */}
              <ul className="features mb-6 flex flex-col gap-2.5">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="text-[13.5px] leading-[1.45] text-text-secondary"
                  >
                    {f}
                  </li>
                ))}
              </ul>

              {/* Delivery */}
              <div className="mb-6 flex items-center gap-1.5 text-xs font-semibold text-text-secondary">
                <ClockIcon />
                {tier.delivery}
              </div>

              {/* CTA */}
              <a
                href="#"
                className={`block w-full rounded-xl px-5 py-3 text-center text-[13px] font-bold transition-all duration-250 ${
                  tier.ctaStyle === "solid"
                    ? "bg-text text-bg hover:opacity-85"
                    : "border border-border text-text hover:border-text"
                }`}
              >
                {tier.cta}
              </a>

              {/* Exclusions */}
              <div className="mt-3 border-t border-border pt-4">
                <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.08em] text-text-tertiary">
                  Mimo rozsah
                </div>
                <p className="text-xs leading-[1.5] text-text-tertiary">
                  {tier.exclusions}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="max-w-[540px] text-[15px] leading-[1.7] text-text-secondary"
          {...fadeUp}
        >
          Věřím, že hotovo je víc než dokonalo. Dvě rychlé iterace a máte
          v ruce něco, s čím jdete za cílovkou — ne za dalším kolem
          interních revizí.
        </motion.p>
      </section>

      {/* ONGOING */}
      <motion.section className="mb-[140px]" {...fadeUp}>
        <div className="mb-9">
          <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
            A pak?
          </div>
          <h2 className="mb-2 font-heading text-[clamp(24px,3vw,30px)] font-bold tracking-[-0.02em]">
            Průběžná spolupráce
          </h2>
          <p className="max-w-[460px] text-[15px] text-text-secondary">
            Navazuje na kterýkoliv balíček — nebo funguje samostatně. Rozsah
            a cenu řešíme individuálně.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card-bg px-5 py-6 transition-colors duration-250 hover:border-[#CDCBC5]"
            >
              <h3 className="mb-1.5 font-heading text-sm font-bold tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="text-[12.5px] leading-[1.5] text-text-secondary">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="mb-10 flex items-center justify-between border-t border-border py-12">
        <p className="text-[13px] text-text-tertiary">
          © 2026 Jakub Skupin
        </p>
        <a
          href="https://www.linkedin.com/in/jakubskupin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-semibold text-text"
        >
          LinkedIn ↗
        </a>
      </footer>
    </div>
  );
}
