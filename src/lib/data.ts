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
    name: "X-Factor Sprint",
    tagline:
      "Pojmenuju, čím jste výjimeční — a dám tomu tvar.",
    price: "42 500",
    priceNote: "jednorázově",
    features: [
      "Hloubkový research + AI analýza",
      "Primární a sekundární cílová skupina a jejich painpointy",
      "Kompetitivní analýza — konkurenti, rizika, příležitosti",
      "Váš x-factor — pojmenovaný a zasazený do kontextu",
      "Positioning & messaging",
      "Tonalita",
      "Návrhy témat",
      "Vizuální základ",
      "Hotová online přítomnost — single-page web, LinkedIn, první obsah",
    ],
    delivery: "Do 2 pracovních dní",
    cta: "To mě zajímá",
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
    title: "Sociální sítě",
    description:
      "Vizuální obsah, carousely, stories. Konzistentní brand napříč platformami.",
  },
  {
    title: "Sales Navigator",
    description:
      "Vytipuju seznam lidí z vaší cílové skupiny pro propojení na LinkedInu.",
  },
  {
    title: "Short videa",
    description:
      "Z podcastů a rozhovorů sestříhám reelsy s titulky.",
  },
  {
    title: "Rozvoj webu",
    description:
      "Nové sekce, landing pages pro testování nabídek, průběžné vylepšování.",
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
