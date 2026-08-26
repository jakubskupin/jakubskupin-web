"use client";

import { useRef, useState } from "react";
import { motion, type Easing } from "framer-motion";
import { LINKEDIN_URL } from "@/lib/data";

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

const CTA = LINKEDIN_URL;

/* ---------------------------------------------------------------- */
/*  Data                                                            */
/* ---------------------------------------------------------------- */

const reasons: { num: string; title: string; body: React.ReactNode }[] = [
  {
    num: "01",
    title: "Zajímám se o creator economy",
    body: (
      <>
        Tvůrce, formáty a monetizaci si mapuju roky. Vlastní rešerše, vlastní
        pokusy, vlastní fail. A s personal brandem pomáhám i klientům: hledám
        jim{" "}
        <a
          href="/personal-brand"
          className="font-semibold text-text underline decoration-border underline-offset-2 transition-colors hover:decoration-text-tertiary"
        >
          x-factor
        </a>{" "}
        a stavím na něm obsah.
      </>
    ),
  },
  {
    num: "02",
    title: "Připojím se, když potřebujete",
    body: "Jsem freelancer. Žádný nábor, žádné fixní náklady, žádný zácvik. Rychle se zorientuju a doručuju výstupy.",
  },
  {
    num: "03",
    title: "Exekuce",
    body: "Nepotřebuju meetingy. Řeším výstupy a jejich validaci na cílovce. Klidně vyrobím lo-fi prototyp k vaší oponentuře. Jde mi o rychlost.",
  },
];

const craft = [
  "Newslettery",
  "IG carousely",
  "LinkedIn posty",
  "Obsah na sítě",
  "Reels s titulky",
  "Landing pages",
  "Case studies",
  "Thumbnaily",
  "Scénáře a osnovy",
  "Koncepty",
];

const blackItems = [
  {
    title: "Cokoli kolem vaší agentury",
    body: "Agenturní svět sleduju. Když víte, čím se chcete odlišit, a chybí na to kapacita, tohle mě bude bavit nejvíc.",
  },
  {
    title: "Case studies",
    body: "Řeknete, co má zaznít, nebo to necháte na mně. Zpracuju.",
  },
  {
    title: "Rešerše a koncept",
    body: "Máte to v hlavě, ale není čas to zhmotnit. Zhmotním.",
  },
  {
    title: "Využití AI",
    body: "Use-casy máte definované, ale nemáte čas je zkoušet. Projdu je, ověřím a předám.",
  },
];

// Štítky z Roamu propojené s tvůrci a podcasty. Texty jsou drafty k Jakubově kontrole.
const topics = [
  {
    id: "dosah",
    label: "dosah ≠ příjem",
    insight:
      "3,46 milionu zhlédnutí a 18 platících předplatitelů. Pozornost se na příjem nepřeklápí sama, někdo ji musí přeložit.",
  },
  {
    id: "borrowed",
    label: "borrowed credibility",
    insight:
      "Propůjčená důvěryhodnost a pozornost pořád funguje. Čerstvě jsem to viděl u Šimůnka.",
  },
  {
    id: "growth",
    label: "growth-period",
    insight:
      "Tvůrce neroste lineárně. Jsou okna, kdy se vyplatí přitlačit, a mrtvá období, kdy je tlak marný.",
  },
  {
    id: "hostovani",
    label: "strategické hostování",
    insight:
      "Nechodit všude. V každém podcastu jiný příběh pro jinou cílovku, jinak se host vyčerpá a značce to škodí.",
  },
  {
    id: "income",
    label: "income-stream",
    insight:
      "Tvůrce nežije z jednoho příjmu. Partnerství, předplatné, workshopy, konference, knihy. Broňa Sobotka je učebnice, jak ty streamy skládat dohromady.",
  },
  {
    id: "thumb",
    label: "thumbnail reverse-engineering",
    insight:
      "Thumbnail rozhoduje o kliku. Než navrhnu vlastní, rozeberu, proč fungují ty konkurenční.",
  },
  {
    id: "niche",
    label: "niche > dosah",
    insight:
      "Úzké publikum konvertuje. Positioning zpřesňuje obsah a vymezení vůči konkurenci staví strategický příkop.",
  },
  {
    id: "podcaster",
    label: "podcaster ≠ novinář",
    insight:
      "Novinář zpovídá, podcaster staví vztah a show. Jiné řemeslo, jiná příprava, jiný výsledek.",
  },
];

/* ---------------------------------------------------------------- */
/*  Capacity chart (hero visual)                                    */
/* ---------------------------------------------------------------- */

function CapacityChart() {
  const demand =
    "M 0 185 C 60 175, 95 92, 145 78 C 195 65, 215 182, 265 191 C 305 198, 335 72, 395 58 C 450 46, 475 166, 528 176 C 572 184, 592 96, 646 92 C 696 89, 732 150, 760 157";
  const demandArea = `${demand} L 760 240 L 0 240 Z`;

  return (
    <motion.div
      className="mt-12 rounded-3xl border border-border bg-card-bg p-6 sm:p-8"
      {...fadeUp}
    >
      <div className="relative">
        <svg
          viewBox="0 0 760 240"
          className="block w-full"
          role="img"
          aria-label="Poptávka po obsahu kolísá nad kapacitou stálého týmu"
        >
          {/* plocha pod křivkou */}
          <path d={demandArea} fill="#EFEDEA" />
          {/* špičky nad kapacitou týmu */}
          <clipPath id="peaks">
            <rect x="0" y="0" width="760" height="150" />
          </clipPath>
          <path d={demandArea} fill="#1A1A18" clipPath="url(#peaks)" />
          {/* křivka poptávky */}
          <path d={demand} fill="none" stroke="#1A1A18" strokeWidth="2" />
          {/* kapacita týmu */}
          <line
            x1="0"
            y1="150"
            x2="760"
            y2="150"
            stroke="#96948E"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
          {/* ukazatel na špičku */}
          <line x1="395" y1="42" x2="395" y2="78" stroke="#1A1A18" strokeWidth="1" />
        </svg>

        {/* Popisky jako HTML, aby byly čitelné na jakékoli šířce (i mobil) */}
        <span className="absolute left-1/2 top-[1%] -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.08em] text-text sm:text-[11px]">
          Tady se připojím já
        </span>
        <span className="absolute right-[2%] top-[50%] rounded bg-card-bg/80 px-1 text-[10px] font-bold uppercase tracking-[0.06em] text-text-tertiary sm:text-[11px]">
          Stálý tým
        </span>
        <span className="absolute bottom-[8%] left-[3%] text-[10px] font-bold uppercase tracking-[0.06em] text-text-tertiary sm:text-[11px]">
          Poptávka po obsahu
        </span>
      </div>
      <p className="mt-5 max-w-[560px] text-[14.5px] leading-[1.6] text-text-secondary">
        Poptávka po obsahu skáče. Stálý tým je rovná čára. Ten rozdíl nahoře
        jsem já: bez náboru a bez fixních nákladů.
      </p>
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/*  Sections                                                        */
/* ---------------------------------------------------------------- */

function Hero() {
  return (
    <motion.section
      className="mx-auto max-w-[960px] px-6 pb-[64px] pt-[72px] sm:pb-[96px] sm:pt-[100px]"
      {...fadeUp}
    >
      <div className="mb-6 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
        Pro Close Friends
      </div>
      <h1 className="mb-7 font-heading text-[clamp(42px,7.5vw,68px)] font-bold leading-[1.08] tracking-[-0.03em]">
        Plug &amp; work
      </h1>
      <p className="max-w-[560px] text-lg leading-[1.65] text-text">
        Pomůžu vám tvořit a škálovat obsah. Kapacitu připojíte, když ji
        potřebujete.
      </p>

      <CapacityChart />

      <div className="mt-12 text-center">
        <a
          href="#duvody"
          aria-label="Posunout na 3 důvody proč já"
          className="inline-flex animate-bounce items-center justify-center text-text-tertiary transition-colors duration-300 hover:text-text"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </motion.section>
  );
}

function Reasons() {
  return (
    <section
      id="duvody"
      className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[140px] scroll-mt-24"
    >
      <motion.h2
        className="mb-10 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em] sm:mb-14"
        {...fadeUp}
      >
        3 důvody proč já
      </motion.h2>

      <div className="relative ml-4 md:ml-8">
        {/* svislá linka spojující důvody až k tečce */}
        <div className="absolute bottom-10 left-[7px] top-2 w-px bg-border" />

        <div className="space-y-10">
          {reasons.map((r, i) => (
            <motion.div key={r.title} className="relative pl-10" {...stagger(i)}>
              <div className="absolute left-0 top-1 flex h-[15px] w-[15px] items-center justify-center">
                <div className="h-[7px] w-[7px] rounded-full bg-text" />
              </div>
              <div className="mb-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-text-tertiary">
                {r.num}
              </div>
              <h3 className="mb-2 font-heading text-[19px] font-bold tracking-[-0.01em]">
                {r.title}
              </h3>
              <p className="max-w-[520px] text-[14.5px] leading-[1.65] text-text-secondary">
                {r.body}
              </p>
            </motion.div>
          ))}

          {/* Tečka: nejsilnější výhoda, černě */}
          <motion.div className="relative pl-10" {...stagger(3)}>
            <div className="absolute left-0 top-5 flex h-[15px] w-[15px] items-center justify-center">
              <div className="h-[15px] w-[15px] rounded-full bg-text" />
            </div>
            <div className="rounded-3xl bg-text p-6 text-bg sm:p-8">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-bg/50">
                Moje nejsilnější výhoda
              </div>
              <h3 className="mb-2.5 font-heading text-[22px] font-bold tracking-[-0.01em]">
                End-to-end
              </h3>
              <p className="max-w-[600px] text-[14.5px] leading-[1.65] text-bg/70">
                Beru projekty, které dodám od začátku do konce. Eliminuju šum,
                nic se neztratí v překladu a můžu iterovat uvnitř procesu za
                nejlepším výsledkem.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------- Ukázky práce --------------------------- */

function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-border"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        setFromX(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && setFromX(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
    >
      {/* PO — nová verze (skutečný screenshot) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/work/simrani.png"
        alt="Šimrání, nová verze webu"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <span className="absolute bottom-3 right-3 rounded-md bg-text/80 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-bg">
        Po
      </span>

      {/* PŘED — stará verze (Google Sites) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/work/simrani-old.png"
          alt="Šimrání, stará verze webu na Google Sites"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <span className="absolute bottom-3 left-3 rounded-md bg-black/70 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-white">
          Před
        </span>
      </div>

      {/* Táhlo */}
      <div
        className="pointer-events-none absolute bottom-0 top-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-[11px] font-bold text-text-tertiary shadow-md">
          ⟷
        </div>
      </div>
    </div>
  );
}

function Reference() {
  const proof: { text: string; href?: string }[] = [
    { text: "Hack: analýza recenzí ze Spotify a Apple Podcasts pomohla zostřit popis podcastu a zpřesnit personu Markéty" },
    { text: "Celý web od nuly: copy, storytelling i vizuál" },
    { text: "Studiové fotky vygenerované ze screenshotů" },
    {
      text: "Landing page pro firmy, cílí na nový zdroj příjmu",
      href: "https://simrani.cz/pro-firmy",
    },
    {
      text: "Landing page pro konzultace, další zdroj příjmu",
      href: "https://simrani.cz/konzultace",
    },
    { text: "Jeden obsah na maximum: pasáž z YouTube běží přímo na landing page (časová kotva)" },
    {
      text: "IG post ke konzultacím, grafiku i text jsem dělal já: 100+ reakcí",
      href: "https://www.instagram.com/p/DW28CZGApdX/",
    },
    { text: "Platby přes QR kód pro ověřený nákup" },
  ];

  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[140px]">
      <motion.div className="mb-10 sm:mb-12 max-w-[600px]" {...fadeUp}>
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Ukázky práce
        </div>
        <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em]">
          Dvě ukázky.
          <br />
          Jedna vyšla, jedna ne
        </h2>
      </motion.div>

      {/* Case 1 — Markéta / Šimrání */}
      <motion.div
        className="mb-6 grid grid-cols-1 gap-6 rounded-3xl border border-border bg-card-bg p-6 sm:grid-cols-2 sm:p-8"
        {...fadeUp}
      >
        <div>
          <BeforeAfter />
          <p className="mt-3 text-[12px] text-text-tertiary">
            Táhněte. Vlevo stará verze, vpravo to, co jsme z toho udělali.
          </p>
        </div>
        <div className="flex flex-col">
          <span className="mb-3 inline-block w-fit rounded-md bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.04em] text-text-tertiary">
            Podcast Šimrání · Markéta Fáberová
          </span>
          <h3 className="mb-2.5 font-heading text-[20px] font-bold tracking-[-0.01em]">
            Z Google Sites na fungující web
          </h3>
          <ul className="flex flex-col gap-2">
            {proof.map((p) => (
              <li
                key={p.text}
                className="relative pl-5 text-[13.5px] leading-[1.5] text-text-secondary before:absolute before:left-0 before:top-[7px] before:h-[5px] before:w-[5px] before:rounded-full before:bg-text-tertiary"
              >
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-text underline decoration-border underline-offset-2 transition-colors hover:decoration-text-tertiary"
                  >
                    {p.text} ↗
                  </a>
                ) : (
                  p.text
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border pt-6 sm:col-span-2">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <div className="mb-2.5 text-[13px] font-bold text-text">
                Carousel pro launch, jak vznikl
              </div>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Z přepisu jsem nechal navrhnout sérii distinktivních textů pro carousel (Claude Code)",
                  "Grafiku jsem nechal generovat v Pencil.dev",
                  "Ručně jsem vybral nejsilnější verze, začistil a finalizoval",
                  "Cíl: automatizovat obsah a zrychlit jeho dodání",
                ].map((s) => (
                  <li
                    key={s}
                    className="relative pl-4 text-[13px] leading-[1.5] text-text-secondary before:absolute before:left-0 before:top-[7px] before:h-[4px] before:w-[4px] before:rounded-full before:bg-text-tertiary"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-2.5 text-[13px] font-bold text-text">
                La Perla, jak vznikla
              </div>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Z jedné nepěkné fotky na bílém pozadí jsem pomocí AI vygeneroval sérii promo fotek",
                  "V Claude Code jsem vymyslel různé typy moodu a pozice",
                  "Pak kombinace Midjourney, Google AI Studio a Nano Banana",
                ].map((s) => (
                  <li
                    key={s}
                    className="relative pl-4 text-[13px] leading-[1.5] text-text-secondary before:absolute before:left-0 before:top-[7px] before:h-[4px] before:w-[4px] before:rounded-full before:bg-text-tertiary"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Case 2 — Fail */}
      <motion.div
        className="grid grid-cols-1 gap-6 rounded-3xl border border-border bg-card-bg p-6 sm:grid-cols-[1fr_400px] sm:gap-8 sm:p-8"
        {...fadeUp}
      >
        <div className="flex flex-col">
          <span className="mb-3 inline-block w-fit rounded-md bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.04em] text-text-tertiary">
            Vlastní projekt · co mě to naučilo
          </span>
          <h3 className="mb-3 font-heading text-[20px] font-bold tracking-[-0.01em]">
            Můj fail, ze kterého mám nejvíc
          </h3>
          <p className="mb-4 text-[14.5px] leading-[1.65] text-text-secondary">
            Sám jsem zkusil postavit creator-economy model: skládané financování
            drahého expertního B2B obsahu na HeroHero. Co jsem v tom doopravdy
            udělal:
          </p>
          <ul className="mb-4 flex flex-col gap-2">
            {[
              "Navrhl celý model: skládané financování drahého expertního obsahu (crowdfunding)",
              "Rozkreslil proces od výběru palčivého tématu přes poptání a kalibraci experta po krokový video-návod a společnou oponenturu",
              "Nacenil to (500 Kč/měsíc) a postavil pravidla: účinkující rok zdarma, refund při nespokojenosti",
              "Promyslel positioning: niche use-casy s předem ověřeným zájmem, odlišení od masterclass a webinářů",
              "Veřejně koncept validoval na LinkedInu, sehnal zájem i konkrétní zpětnou vazbu",
            ].map((item) => (
              <li
                key={item}
                className="relative pl-5 text-[13.5px] leading-[1.5] text-text-secondary before:absolute before:left-0 before:top-[7px] before:h-[5px] before:w-[5px] before:rounded-full before:bg-text-tertiary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7282701938507284480"
            title="LinkedIn post: můj fail projekt"
            className="h-[560px] w-full"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ----------------------- Kompetence ----------------------------- */

function Craft() {
  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[140px]">
      <motion.div className="mb-8 max-w-[600px]" {...fadeUp}>
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Kompetence v detailu
        </div>
        <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em]">
          Z jednoho natáčení
          <br />
          celá škála
        </h2>
        <p className="max-w-[520px] text-base leading-[1.6] text-text">
          Co z jednoho přepisu umím sám vytěžit:
        </p>
      </motion.div>

      <motion.div className="flex flex-wrap gap-2.5" {...fadeUp}>
        {craft.map((c) => (
          <span
            key={c}
            className="rounded-full border border-border bg-card-bg px-4 py-2 text-[14px] text-text"
          >
            {c}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

/* ----------------------- Černé pole ----------------------------- */

function BlackBox() {
  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[140px]">
      <motion.div
        className="rounded-3xl bg-text p-7 text-bg sm:p-10"
        {...fadeUp}
      >
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-bg/50">
          Co bych u vás dělal nejradši
        </div>
        <p className="mb-8 max-w-[640px] font-heading text-[clamp(20px,2.8vw,26px)] font-bold leading-[1.3] tracking-[-0.01em]">
          V hlavách zakladatelů leží nápady, na které není čas a nejsou lidi.
          Já jsem ten, komu je zadáte
        </p>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {blackItems.map((item) => (
            <div key={item.title}>
              <h3 className="mb-1.5 text-[15px] font-bold">{item.title}</h3>
              <p className="text-[13.5px] leading-[1.6] text-bg/60">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-9 font-heading text-[17px] font-bold">Vznikne to.</p>
      </motion.div>
    </section>
  );
}

/* ----------------------- Štítky / pojmy ------------------------- */

function Topics() {
  const [active, setActive] = useState<string | null>(null);
  const current = topics.find((t) => t.id === active);

  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[140px]">
      <motion.div className="mb-8 max-w-[620px]" {...fadeUp}>
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Pozorování
        </div>
        <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em]">
          Jak nad creator economy
          <br />
          přemýšlím
        </h2>
        <p className="max-w-[560px] text-base leading-[1.6] text-text">
          Pojmy, přes které čtu tvůrce a podcasty. U každého krátký vhled.
        </p>
      </motion.div>

      <motion.div className="mb-4 flex flex-wrap gap-2.5" {...fadeUp}>
        {topics.map((t) => (
          <button
            key={t.id}
            type="button"
            onMouseEnter={() => setActive(t.id)}
            onClick={() => setActive((a) => (a === t.id ? null : t.id))}
            className={`rounded-full border px-4 py-2 text-[14px] transition-all duration-200 ${
              active === t.id
                ? "border-text bg-text text-bg"
                : "border-border bg-card-bg text-text hover:border-[#CDCBC5]"
            }`}
          >
            #{t.label}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="min-h-[92px] rounded-2xl border border-border bg-card-bg px-5 py-4"
        {...fadeUp}
      >
        {current ? (
          <>
            <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-text-tertiary">
              #{current.label}
            </div>
            <p className="max-w-[640px] text-[14.5px] leading-[1.6] text-text">
              {current.insight}
            </p>
          </>
        ) : (
          <p className="text-[14px] leading-[1.6] text-text-tertiary">
            Vyberte štítek. Ukážu, proč ho tam mám.
          </p>
        )}
      </motion.div>
    </section>
  );
}

/* ----------------------- Closing -------------------------------- */

function Closing() {
  return (
    <motion.section
      className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[140px] text-center"
      {...fadeUp}
    >
      <h2 className="mb-8 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em]">
        Kafe v Holešovicích?
      </h2>
      <a
        href={CTA}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-text px-8 py-3.5 text-sm font-bold text-bg transition-all duration-250 hover:opacity-85"
      >
        {"Spolu na kafe ↗︎"}
      </a>
      <p className="mt-10 text-[13px] uppercase tracking-[0.12em] text-text-tertiary">
        Vznikne to. A pak vynikne
      </p>
    </motion.section>
  );
}

export default function CloseFriendsLanding() {
  return (
    <>
      <Hero />
      <Reasons />
      <Reference />
      <Craft />
      <BlackBox />
      <Topics />
      <Closing />
    </>
  );
}
