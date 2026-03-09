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
    knowledge: [
      "Víte, kdo jsou vaši lidi a co doopravdy řeší",
      "Víte, kde máte šanci vyhrát",
      "Umíte jednou větou říct, čím jste výjimeční",
      "Máte jasný positioning, messaging a tonalitu",
    ],
    artifacts: [
      "Témata a vizuální směr",
      "Single-page web na vaší doméně, LinkedIn a první obsah — hotové, ne naplánované",
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
          "Posty psané vaší tonalitou — tu máme ze sprintu. AI se jí drží, já kontroluju.",
      },
      {
        title: "Podcast → obsah",
        description:
          "Z jedné epizody reelsy, citáty, posty. V tónu a messagingu ze sprintu.",
      },
    ],
  },
  {
    label: "Autorita",
    services: [
      {
        title: "Případovky",
        description:
          "Pošlete hrubá data, vrátím hotovou studii. Vizuály ve vašem vizuálním základu ze sprintu.",
      },
      {
        title: "AI rešerše",
        description:
          "Hluboká analýza cílená na váš positioning a x-factor. Vizualizace + shrnutí.",
      },
    ],
  },
  {
    label: "Pipeline",
    services: [
      {
        title: "Prospecting",
        description:
          "Cílovku známe ze sprintu. Sales Navigator + AI vytipují lidi — vy se jen propojíte.",
      },
      {
        title: "Micro-experimenty",
        description:
          "Landing page + kampaň. Messaging a vizuál ze sprintu, otestováno rychle.",
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
