import type { Work, Tier, Service, ServiceGroup, Testimonial } from "./types";

export const LINKEDIN_URL = "https://www.linkedin.com/in/jakubskupin/";

export const works: Work[] = [
  {
    slug: "martin-vymetal",
    url: "martinvymetal.cz",
    title: "Martin Vymětal",
    description: "",
    tag: "Brand & web",
    screenshot: "/work/martin-vymetal.png",
    externalUrl: "https://martinvymetal.cz",
  },
  {
    slug: "simrani",
    url: "simrani.cz",
    title: "Šimrání",
    description: "",
    tag: "Brand & web",
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
      "Pojmenuju, čím jste výjimeční. A dám tomu tvar.",
    price: "42 500",
    priceNote: "jednorázově",
    features: [
      "Cílové skupiny a jejich skutečné problémy",
      "Konkurence — kdo, co a kde máte šanci",
      "Váš x-factor — jasně pojmenovaný",
      "Positioning, messaging, tonalita",
      "Návrhy témat a vizuální základ",
      "Hotový single-page web, upravený LinkedIn, první obsah",
    ],
    delivery: "Do 2 pracovních dní",
    cta: "To mě zajímá",
    ctaStyle: "solid",
    exclusions: "Správa obsahu, placená reklama, SEO",
    highlighted: false,
  },
];

export const serviceGroups: ServiceGroup[] = [
  {
    label: "Viditelnost",
    services: [
      {
        title: "LinkedIn presence",
        description:
          "Posty, bio, speaker profil. Psaný vaším hlasem, ne šablonou.",
      },
      {
        title: "Podcast → obsah",
        description:
          "Z jedné epizody vytáhnu reelsy, citáty, posty. AI + ruční selekce.",
      },
    ],
  },
  {
    label: "Autorita",
    services: [
      {
        title: "Případovky",
        description:
          "Pošlete hrubá data, vrátím hotovou studii.",
      },
      {
        title: "AI rešerše",
        description:
          "Hluboká analýza tématu, firmy nebo příležitosti. Vizualizace + shrnutí.",
      },
    ],
  },
  {
    label: "Pipeline",
    services: [
      {
        title: "Prospecting",
        description:
          "Vytipuju lidi z vaší cílovky na LinkedInu. Vy se jen propojíte.",
      },
      {
        title: "Micro-experimenty",
        description:
          "Landing page + kampaň pro otestování nápadu. Rychle, levně.",
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Pošlete mu SMS a máte web. Nadiktujete zadání v autě a dostanete první návrh projektu. Umí přerámovat vaši vizi tak, aby začala fungovat.",
    author: "Martin Vymětal",
    role: "Co-founder, Boomerang Communication",
    url: "https://www.linkedin.com/in/martinvymetal",
  },
];
