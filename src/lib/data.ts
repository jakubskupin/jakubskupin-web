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
  },
  {
    slug: "simrani",
    url: "simrani.cz",
    title: "Šimrání",
    description:
      "Brand strategie, vizuální identita a web pro podcast o intimitě.",
    tag: "Research → Brand → Web",
    screenshot: "/work/simrani.png",
  },
];

export const tiers: Tier[] = [
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
    ctaStyle: "outline",
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
    ctaStyle: "solid",
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
