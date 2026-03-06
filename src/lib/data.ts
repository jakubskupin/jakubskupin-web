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
    num: "",
    name: "X-Factor System",
    tagline:
      "Pojmenuju, čím jste výjimeční — a postavím kolem toho celý systém.",
    price: "40 000",
    priceNote: "jednorázově",
    features: [
      "Hloubkový research + AI analýza",
      "Cílové skupiny a jejich jazyk",
      "Váš x-factor — pojmenovaný a zasazený do kontextu",
      "Positioning a klíčové sdělení",
      "Tone of voice a obsahový směr",
      "Vizuální směr — barvy, typografie, vizuální jazyk",
      "Single-page web",
      "LinkedIn strategie + ukázkový obsah",
    ],
    delivery: "Do 5 pracovních dní",
    cta: "Začít spolupráci",
    ctaStyle: "solid",
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
