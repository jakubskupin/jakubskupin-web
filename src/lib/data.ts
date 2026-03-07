import type { Work, Tier, Service, Testimonial } from "./types";

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
    title: "Zpracování podcastu",
    description:
      "Vytvořím z nich reelsy s titulky. Ne genericky, ale vyberu přesně to sdělení, které podporuje váš positioning.",
  },
  {
    title: "Případové studie",
    description:
      "Pošlete mi hrubá data, sepíšu to do čitelné podoby.",
  },
  {
    title: "Experimenty",
    description:
      "Vytvořím landing page a micro-kampaň pro testování vašeho řešení.",
  },
  {
    title: "AI research sprint",
    description:
      "Velmi rychle vám dodám hlubokou rešerši na vámi vybrané téma, firmu nebo příležitost. Včetně vizualizací. Pomůže vám to se zorientovat.",
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
