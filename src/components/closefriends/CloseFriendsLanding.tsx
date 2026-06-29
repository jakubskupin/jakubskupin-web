"use client";

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

const archetypes = [
  {
    title: "Nenapodobitelná persona",
    insight:
      "X-factor je sama osoba. Nezkopíruješ ji, ale ani nedoškáluješ. Systém se staví kolem člověka, ne člověk kolem systému.",
    names: ["Mikýř", "Koběrský", "Kovy"],
  },
  {
    title: "Vlastník formátu",
    insight:
      "Distinctive není tvář, ale formát. To se přenáší a škáluje dál.",
    names: ["Čestmír", "Veselovský"],
  },
  {
    title: "Niche autorita",
    insight:
      "Malé publikum, vysoká konverze. Pravý opak honby za dosahem.",
    names: ["Tom Brzobohatý", "Vojta Žižka"],
  },
  {
    title: "Systematik a edukátor",
    insight:
      "Monetizuje metodu, ne pozornost. Tím obchází past, kdy dosah neznamená příjem.",
    names: ["Rob Lennon", "Ruben Hassid", "Losekoot", "Rostecký"],
  },
];

const proofQuotes = [
  {
    quote: "Nejlepší příprava ever.",
    author: "Vilém Franěk",
    role: "spoluzakladatel, Close Friends",
    big: true,
  },
  {
    quote: "Švýcarský nožík.",
    author: "Petr Rubáček",
    role: "",
    big: false,
  },
  {
    quote: "Unicorn. Pokrývá 98 % toho, co potřebuju.",
    author: "Martin Vymětal",
    role: "co-founder, Boomerang Communication",
    big: false,
  },
];

const cases = [
  {
    title: "Alice Hejzlarová",
    desc: "Strategická rešerše a osobní web pro advokátku s HNW klientelou. Za 2 dny, bez zapojení klientky.",
  },
  {
    title: "BUGA",
    desc: "30sekční strategická analýza slow-fashion značky. Přesně ten reusovatelný artefakt, který tým spustí znovu pro každého.",
  },
  {
    title: "Markéta Fáberová / Šimrání",
    desc: "Obsahová a vizuální identita pro intimní, osobní téma. Důkaz, že umím dát formu citlivému materiálu.",
  },
];

const pilots = [
  {
    num: "01",
    title: "Koncepty a rešerše — váš přípravář",
    desc: "30sekční strategická analýza tvůrce nebo segmentu za 1 až 2 dny. Podklady před produkcí. Na tohle už jsme jednu schůzku měli, tady bych přirozeně pokračoval.",
    href: "/research-sprint",
    linkLabel: "AI Research Sprint",
  },
  {
    num: "02",
    title: "X-Factor onboarding artefakt",
    desc: "Pojmenuju, čím je tvůrce nebo projekt výjimečný. Úhel, obsahové pilíře, tvar. Reusovatelný podklad pro každého nového člověka, kterého berete.",
    href: "/personal-brand",
    linkLabel: "X-Factor Sprint",
  },
];

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
        Pro Close Friends × MÚPI
      </div>
      <h1 className="mb-7 font-heading text-[clamp(34px,5.5vw,52px)] font-bold leading-[1.12] tracking-[-0.03em]">
        Vy škálujete dosah.
        <br />
        Já hlídám úhel.
      </h1>
      <p className="mb-9 max-w-[560px] text-lg leading-[1.65] text-text">
        Vyhlásili jste 4 produkční pozice. Do žádné se nehodím, a je to
        schválně. Píšu na to, co inzerát nepokrývá: koncept a positioning,
        dřív než se začne natáčet.
      </p>
      <a
        href={CTA}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-text px-8 py-3.5 text-sm font-bold text-bg transition-all duration-250 hover:opacity-85"
      >
        {"Pojďme na kafe ↗︎"}
      </a>
    </motion.section>
  );
}

function Why() {
  return (
    <motion.section
      className="mx-auto max-w-[600px] px-6 mb-[80px] sm:mb-[120px]"
      {...fadeUp}
    >
      <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
        Proč vám píšu
      </div>
      <p className="mb-5 text-xl leading-[1.6]">
        Creator economy mě netáhne jako gig. Je to téma, ke kterému se vracím
        roky. Mapuju ho, sleduju, kdo v něm jak hraje. Tohle je svět, ve kterém
        chci být.
      </p>
      <p className="text-base leading-[1.7] text-text-secondary">
        S Vildou jsme spolu už mluvili. O mojí přípravě řekl „nejlepší příprava
        ever". Tohle není studený pitch, je to pokračování toho rozhovoru.
      </p>
    </motion.section>
  );
}

function CreatorMap() {
  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[140px]">
      <motion.div className="mb-10 sm:mb-12" {...fadeUp}>
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Jak čtu creator trh
        </div>
        <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em] max-w-[600px]">
          Nesleduju tvůrce.
          <br />
          Čtu, čím je kdo nenahraditelný
        </h2>
        <p className="max-w-[520px] text-base leading-[1.6] text-text">
          Trh mám rozsekaný podle toho, na čem stojí hodnota každého tvůrce. Ne
          podle počtu sledujících.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {archetypes.map((a, i) => (
          <motion.div
            key={a.title}
            className="rounded-3xl border border-border bg-card-bg p-6"
            {...stagger(i)}
          >
            <h3 className="mb-2.5 font-heading text-[18px] font-bold tracking-[-0.01em]">
              {a.title}
            </h3>
            <p className="mb-4 text-[14px] leading-[1.6] text-text-secondary">
              {a.insight}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {a.names.map((n) => (
                <span
                  key={n}
                  className="rounded-md bg-accent-soft px-2.5 py-1 text-[11px] font-semibold tracking-[0.02em] text-text-tertiary"
                >
                  {n}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 rounded-3xl border border-border bg-card-bg p-7 sm:p-8"
        {...fadeUp}
      >
        <p className="mb-5 text-[15px] leading-[1.65] text-text">
          <strong className="font-bold">
            3,46 milionu zhlédnutí a 18 platících předplatitelů.
          </strong>{" "}
          Dosah a příjem nejsou totéž. Tohle napětí mě na trhu baví nejvíc,
          protože koncept, který ho neřeší, je jen hezká nula.
        </p>
        <div className="h-px w-full bg-border" />
        <p className="mt-5 text-[15px] leading-[1.65] text-text">
          A Tom Brzobohatý není náhoda. Je to scouting niche autority dřív, než
          ji najde trh. Tu samou connecting-dots vrstvu dělám systematicky a
          před produkcí.
        </p>
      </motion.div>
    </section>
  );
}

function Layer() {
  const points = [
    {
      label: "Nahoře — úhel",
      text: "Čím je tenhle tvůrce vlastně výjimečný. Váš vlastní slib zní „najdeme, v čem jste unikátní“. Tohle dělám jako hloubkový positioning ještě před natáčením: úhel, obsahové pilíře, tvar formátu.",
    },
    {
      label: "Dole — fit na příjem",
      text: "Proč zrovna tahle pozornost povede k penězům. Nedělám hezký koncept pro hezký koncept. Dělám koncept, který ví, jak se pozornost mění v příjem.",
    },
    {
      label: "Napříč — jeden směr",
      text: "Vás je víc a tvůrců ještě víc. Umím z pěti názorů udělat jeden směr a držet ho i tam, kde se to rozjíždí na dvě značky. A když má být tvůrce před kamerou zranitelný, vytvářím klid, u kterého neztuhne. To mi nezávisle potvrdil kdekdo.",
    },
  ];
  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[140px]">
      <motion.div className="mb-10 sm:mb-12" {...fadeUp}>
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Kde do vás zapadám
        </div>
        <h2 className="mb-3 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em] max-w-[600px]">
          Co se nedá
          <br />
          doškálovat rukama
        </h2>
        <p className="max-w-[540px] text-base leading-[1.6] text-text">
          Close Friends rostou produkcí a dosahem přes víc tvůrců. Dvě věci v tom
          modelu nepřidáte produkčníma rukama. Jsem ta třetí.
        </p>
      </motion.div>

      <div className="relative ml-4 md:ml-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
        <div className="space-y-9">
          {points.map((p, i) => (
            <motion.div key={p.label} className="relative pl-10" {...stagger(i)}>
              <div className="absolute left-0 top-1 flex h-[15px] w-[15px] items-center justify-center">
                <div className="h-[7px] w-[7px] rounded-full bg-text" />
              </div>
              <h3 className="mb-2 font-heading text-[17px] font-bold tracking-[-0.01em]">
                {p.label}
              </h3>
              <p className="max-w-[520px] text-[14px] leading-[1.65] text-text">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[140px]">
      <motion.div
        className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary"
        {...fadeUp}
      >
        Důkazy
      </motion.div>

      <motion.div className="mb-12 max-w-[600px]" {...fadeUp}>
        <p className="mb-4 font-heading text-[clamp(24px,3.4vw,32px)] font-bold leading-[1.2] tracking-[-0.02em]">
          „Nejlepší příprava ever."
        </p>
        <div className="text-sm font-semibold">{proofQuotes[0].author}</div>
        <div className="text-[13px] text-text-tertiary">
          {proofQuotes[0].role}
        </div>
      </motion.div>

      <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {proofQuotes.slice(1).map((q, i) => (
          <motion.div
            key={q.author}
            className="rounded-3xl border border-border bg-card-bg p-6"
            {...stagger(i)}
          >
            <p className="mb-3 text-lg leading-[1.5]">„{q.quote}"</p>
            <div className="text-sm font-semibold">{q.author}</div>
            {q.role && (
              <div className="text-[13px] text-text-tertiary">{q.role}</div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {cases.map((c, i) => (
          <motion.div key={c.title} className="rounded-3xl border border-border bg-card-bg p-6" {...stagger(i)}>
            <h3 className="mb-2 font-heading text-[16px] font-bold tracking-[-0.01em]">
              {c.title}
            </h3>
            <p className="text-[13.5px] leading-[1.55] text-text-secondary">
              {c.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[140px]">
      <motion.div className="mb-10 sm:mb-12 max-w-[600px]" {...fadeUp}>
        <div className="mb-8 text-[13px] font-semibold uppercase tracking-[0.06em] text-text-tertiary">
          Vyber, jak mě zkusit
        </div>
        <p className="text-base leading-[1.65] text-text">
          Beru surový materiál, tvůrce, projekt nebo nápad, a dávám mu tvar a
          slova. Vlastním jeden úsudek od konceptu po finální podobu. Dva
          nízkorizikové způsoby, jak to vyzkoušet:
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {pilots.map((p, i) => (
          <motion.div
            key={p.num}
            className="flex flex-col rounded-3xl border border-border bg-card-bg p-6"
            {...stagger(i)}
          >
            <div className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-text-tertiary">
              {p.num}
            </div>
            <h3 className="mb-2.5 font-heading text-[18px] font-bold tracking-[-0.01em]">
              {p.title}
            </h3>
            <p className="mb-5 flex-1 text-[14px] leading-[1.6] text-text-secondary">
              {p.desc}
            </p>
            <a
              href={p.href}
              className="text-[13px] font-semibold underline decoration-border underline-offset-2 transition-colors hover:decoration-text-tertiary"
            >
              {p.linkLabel} →
            </a>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-6 text-[14px] leading-[1.6] text-text-tertiary"
        {...fadeUp}
      >
        A taky: případovky pro váš web, LinkedIn a thought leadership jako
        ghostwriter, landing pages a osobní weby. Stejná páteř, jiný povrch.{" "}
        <a
          href="/content-partner"
          className="font-semibold text-text-secondary underline decoration-border underline-offset-2 transition-colors hover:decoration-text-tertiary"
        >
          Creator partner →
        </a>
      </motion.p>
    </section>
  );
}

function Closing() {
  return (
    <motion.section
      className="mx-auto max-w-[960px] px-6 mb-[80px] sm:mb-[140px] text-center"
      {...fadeUp}
    >
      <h2 className="mb-4 font-heading text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.03em]">
        Pojďme na kafe
      </h2>
      <p className="mx-auto mb-8 max-w-[440px] text-base leading-[1.6] text-text">
        Nebo si rovnou vyberte jeden pilot. Cíl je rozhovor, ne závazek.
      </p>
      <a
        href={CTA}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-text px-8 py-3.5 text-sm font-bold text-bg transition-all duration-250 hover:opacity-85"
      >
        {"Napsat Jakubovi ↗︎"}
      </a>
      <p className="mt-10 text-[13px] uppercase tracking-[0.12em] text-text-tertiary">
        Vznikne to. A pak vynikne.
      </p>
    </motion.section>
  );
}

export default function CloseFriendsLanding() {
  return (
    <>
      <Hero />
      <Why />
      <CreatorMap />
      <Layer />
      <Proof />
      <Menu />
      <Closing />
    </>
  );
}
