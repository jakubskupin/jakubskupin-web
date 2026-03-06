import type { CaseStudy } from "@/lib/types";

const simrani: CaseStudy = {
  slug: "simrani",
  title: "Šimrání",
  client: "Markéta Fáberová",
  clientRole: "Terapeutka, podcasterka",
  tag: "Research → Brand → Web",
  description:
    "Brand strategie, vizuální identita a web pro podcast o intimitě.",
  url: "simrani.cz",
  challenge:
    "Šimrání je podcast o intimitě a vztazích — téma, které vyžaduje citlivý přístup k brandingu. Markéta potřebovala vizuální identitu a web, které budou profesionální, ale zároveň teplé a přístupné.",
  timeline: [
    {
      day: "Týden 1",
      title: "Hluboký research",
      description:
        "Analýza cílové skupiny, konkurence v wellness/terapie prostoru, tone of voice.",
      aiContribution: "AI rešerše 30+ podcastových webů, pattern analýza.",
    },
    {
      day: "Týden 2",
      title: "Brand strategie + positioning",
      description:
        "Pojmenování x-factoru, cílové persony, klíčové sdělení, tonalita.",
      aiContribution: "AI draft person a claim variant.",
    },
    {
      day: "Týden 3",
      title: "Vizuální identita + web design",
      description:
        "Barevná paleta, typografie, moodboard, wireframe, copy.",
      aiContribution: "AI generování copy, manuální kurátorství vizuálu.",
    },
    {
      day: "Týden 4",
      title: "Build + brand guidelines",
      description:
        "Web v Next.js, brand manuál, launch.",
      aiContribution: "AI-assisted kódování a tvorba brand manuálu.",
    },
  ],
  deliverables: [
    "Brand strategie a positioning",
    "Vizuální identita (paleta, typografie, směr)",
    "Web (Next.js, responsive)",
    "Brand manuál (online, interaktivní)",
    "Ukázkový obsah (3 posty)",
  ],
  deliveryTime: "4 týdny",
  testimonial: {
    quote:
      "Placeholder — reálná reference bude doplněna po dokončení projektu.",
    author: "Markéta Fáberová",
    role: "Terapeutka, podcasterka",
  },
};

export default simrani;
