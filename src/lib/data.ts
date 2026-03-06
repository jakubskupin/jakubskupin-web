import type { Work, Tier, Service, Testimonial } from "./types";

export const LINKEDIN_URL = "https://www.linkedin.com/in/jakubskupin/";

export const works: Work[] = [
  {
    slug: "martin-vymetal",
    url: "martinvymetal.cz",
    title: "Martin Vymětal",
    description: "Personal brand a web pro marketéra a podcastera.",
    tag: "Strategie → Web",
    screenshot: "/work/martin-vymetal.png",
    externalUrl: "https://martinvymetal.cz",
  },
  {
    slug: "simrani",
    url: "simrani.cz",
    title: "Šimrání",
    description:
      "Brand strategie, vizuální identita a web pro podcast o intimitě.",
    tag: "Research → Brand → Web",
    screenshot: "/work/simrani.png",
    externalUrl: "https://simrani-web.vercel.app/",
    concept: true,
  },
];

export const tiers: Tier[] = [
  {
    num: "01",
    name: "X-Factor Discovery",
    tagline:
      "Pojmenuju, čím jste výjimeční — a postavím strategii, jak to ukázat světu.",
    price: "27 000",
    priceNote: "jednorázově",
    features: [
      "Hloubkový research + AI analýza",
      "Cílové skupiny a jejich jazyk",
      "Váš x-factor — pojmenovaný a zasazený do kontextu",
      "Positioning a klíčové sdělení",
      "Tone of voice a obsahový směr",
      "Vizuální směr a moodboard",
      "Doporučení formátů a kanálů",
    ],
    delivery: "Do 5 pracovních dní",
    cta: "Začít spolupráci",
    ctaStyle: "solid",
    exclusions: "Vizuální identita, web, exekuce obsahu",
    highlighted: true,
  },
  {
    num: "02",
    name: "Kompletní digitální přítomnost",
    tagline:
      "Od strategie přes identitu po web a obsah. Celý systém kolem vašeho x-faktoru.",
    price: "od 56 000",
    priceNote: "dle rozsahu",
    features: [
      "Vše z X-Factor Discovery",
      "Vizuální identita a systém",
      "Web nebo landing page",
      "LinkedIn strategie + ukázkový obsah",
      "Brand guidelines",
      "Iterace na základě zpětné vazby",
    ],
    delivery: "2–4 týdny",
    cta: "Poptat projekt",
    ctaStyle: "outline",
    exclusions: "Správa obsahu, placená reklama, SEO",
    highlighted: false,
  },
];

export const services: Service[] = [
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

export const testimonials: Testimonial[] = [
  {
    quote:
      "Pošlete mu SMS a máte web. Nadiktujete zadání v autě a dostanete první návrh projektu. Umí přerámovat vaši vizi tak, aby začala fungovat.",
    author: "Martin Vymětal",
    role: "Marketér, podcaster",
  },
];
