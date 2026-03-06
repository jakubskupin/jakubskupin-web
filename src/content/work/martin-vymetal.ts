import type { CaseStudy } from "@/lib/types";

const martinVymetal: CaseStudy = {
  slug: "martin-vymetal",
  title: "Martin Vymětal",
  client: "Martin Vymětal",
  clientRole: "Marketér, podcaster",
  tag: "Strategie → Web",
  description: "Personal brand a web pro marketéra a podcastera.",
  url: "martinvymetal.cz",
  challenge:
    "Martin měl silnou expertízu a podcast, ale jeho online přítomnost tomu neodpovídala. Potřeboval web, který komunikuje jeho x-factor — schopnost přerámovat byznys problém a najít řešení rychleji než agentura.",
  timeline: [
    {
      day: "Den 1",
      title: "Discovery + AI research",
      description: "Hodinový hovor, pak hluboká rešerše trhu a konkurence.",
      aiContribution: "AI analýza 20+ marketérských webů v ČR, syntéza patterns.",
    },
    {
      day: "Den 2",
      title: "Positioning a x-factor",
      description: "Identifikace klíčového sdělení a tónu značky.",
      aiContribution: "AI draft claim variant, lidský výběr a doladění.",
    },
    {
      day: "Den 3–4",
      title: "Web design + copy",
      description: "Wireframe, vizuální identita, copywriting celého webu.",
      aiContribution: "AI generování copy variant, manuální editace a finalizace.",
    },
    {
      day: "Den 5–6",
      title: "Build + launch",
      description: "Next.js web, responsive, animace, deploy na Vercel.",
      aiContribution: "AI-assisted kódování, Claude Code pro iterace.",
    },
  ],
  deliverables: [
    "Osobní web (Next.js, responsive)",
    "Brand positioning a klíčové sdělení",
    "Copywriting celého webu",
    "Vizuální směr a moodboard",
  ],
  deliveryTime: "6 dní",
  testimonial: {
    quote:
      "Pošlete mu SMS a máte web. Nadiktujete zadání v autě a dostanete první návrh projektu. Umí přerámovat vaši vizi tak, aby začala fungovat.",
    author: "Martin Vymětal",
    role: "Marketér, podcaster",
  },
};

export default martinVymetal;
