"use client";

import { useRef, useState } from "react";
import { motion, type Easing } from "framer-motion";
import { LINKEDIN_URL } from "@/lib/data";
import postsData from "./posts.json";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as Easing },
};

function stagger(index: number) {
  return {
    ...fadeUp,
    transition: { ...fadeUp.transition, delay: index * 0.08 },
  };
}

/* ---------------------------------------------------------------- */
/*  Data                                                            */
/* ---------------------------------------------------------------- */

type PostMedia = {
  type: string;
  src: string;
  w: number;
  h: number;
  docTitle?: string;
};

type PostData = {
  text: string;
  time: string;
  reactions: number;
  comments: number;
  media: PostMedia;
};

type Sample = {
  title: string;
  body: React.ReactNode;
  tool: React.ReactNode;
  activityId: string;
  url: string;
};

const posts = postsData as Record<string, PostData>;

const samples: Sample[] = [
  {
    title: "Vizuál, který v timeline zastaví",
    body: "Záměr: zaujmout a odprezentovat hodnoty firmy tak, aby podpořily hiring.",
    tool: (
      <>
        Vizuál generovaný v <strong>Midjourney</strong>
      </>
    ),
    activityId: "7444715726898253824",
    url: "https://www.linkedin.com/posts/haasrobert_p%C5%99em%C3%BD%C5%A1l%C3%ADm-nad-kompetencemi-kter%C3%A9-do-symbio-activity-7444715726898253824-JbEV",
  },
  {
    title: "Video s titulky z produktu",
    body: (
      <>
        Souvisí s{" "}
        <a
          href="https://www.symbio.blog/molekula-engaged"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-border underline-offset-2 transition-colors hover:decoration-text-tertiary"
        >
          walkthrough videem M°lekuly
        </a>
        .
      </>
    ),
    tool: (
      <>
        Natočené v <strong>Loomu</strong>, střih a titulky v{" "}
        <strong>Descriptu</strong>
      </>
    ),
    activityId: "7274687288230502400",
    url: "https://www.linkedin.com/posts/haasrobert_m%C2%BAlekula-marketing-design-system-v-13-activity-7274687288230502400-bRIa",
  },
  {
    title: "POV při spuštění nového webu",
    body: "Příležitost říct nahlas, čím se firma liší od zbytku trhu.",
    tool: (
      <>
        Video vytvořené v <strong>Claude</strong>
      </>
    ),
    activityId: "7442122308581814272",
    url: "https://www.linkedin.com/posts/haasrobert_vid%C3%ADm-kolem-sebe-nej%C4%8Dast%C4%9Bji-dva-typy-agentur-activity-7442122308581814272-tpyH",
  },
  {
    title: "Repurpose podcastu",
    body: "Jeden natočený rozhovor, víc výstupů. Klip nese jednu myšlenku a stojí sám o sobě, bez kontextu celého záznamu.",
    tool: (
      <>
        Střih a titulky v <strong>Descriptu</strong>
      </>
    ),
    activityId: "7386032502047649792",
    url: "https://www.linkedin.com/posts/haasrobert_v-%C4%8Dem-vid%C3%ADme-v-symbio-agency-budoucnost-jinak-activity-7386032502047649792-74tM",
  },
  {
    title: "Report jako carousel",
    body: "Zjednodušený report z Figma Config 2025. Carousel odvypráví podstatu v timeline, hloubka čeká na blogu.",
    tool: (
      <>
        Carousel vyrobený ve <strong>Figmě</strong>
      </>
    ),
    activityId: "7331245119880192000",
    url: "https://www.linkedin.com/posts/haasrobert_symbio-figma-config-2025-activity-7331245119880192000-aq3c",
  },
  {
    title: "PR článek vlastním hlasem",
    body: "Vyšel článek v médiích? Nestačí ho nasdílet. Founder k němu přidá vlastní úhel.",
    tool: (
      <>
        Prezentace článku z <strong>CzechCrunch</strong>
      </>
    ),
    activityId: "7285624669896929281",
    url: "https://www.linkedin.com/posts/haasrobert_p%C5%99i-expanzi-do-zahrani%C4%8Dn%C3%AD-si-nezapome%C5%88te-activity-7285624669896929281-xI_W",
  },
];

const pillars = [
  {
    num: "01",
    title: "Vize",
    hint: "Kam jde tvorba designu: smrt multiplayeru, kolaps triády, design as code. Myšlenky, které teď držíš v hlavě. Buduje autoritu a dosah.",
  },
  {
    num: "02",
    title: "Důkaz",
    hint: "Building pen.dev in public: co jste tenhle týden shipli a co jste se naučili. Buduje důvěru a konvertuje.",
  },
];

const reasons = [
  {
    num: "01",
    title: "Na dálku, asynchronně",
    body: "Nepotřebuju meetingy. Funguju přes zprávy a shipnuté drafty, ke kterým se vyjádříš, kdy se ti to hodí.",
  },
  {
    num: "02",
    title: "End-to-end",
    body: "Od myšlenky po publikovanou věc: koncept, text, vizuál, video, střih, titulky. Všechny ukázky výše jsou takhle dotažené.",
  },
  {
    num: "03",
    title: "X-factor",
    body: "Dlouhodobě se zajímám o personal branding tvůrců. Snažím se popsat a zviditelnit, čím jsou výjimeční.",
  },
];

/* ---------------------------------------------------------------- */
/*  Inline přehrávač: Taste z Lenny's Greatest Hits. Streamuje se   */
/*  z jejich originu, nic nehostujeme.                              */
/* ---------------------------------------------------------------- */

function TastePlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="mt-8 flex max-w-full items-center gap-3 rounded-full border border-border bg-card-bg py-2 pr-5 pl-2 sm:inline-flex">
      <audio
        ref={audioRef}
        src="https://lennys-greatest-hits.vercel.app/audio/taste.mp3"
        preload="none"
        onEnded={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pauza" : "Přehrát Taste"}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-text text-bg transition-transform hover:scale-105"
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
      <span className="text-sm">
        <span className="font-semibold">Pusť si tenhle song.</span>
        <span className="text-text-tertiary"> Uvidíš proč.</span>
      </span>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Replika LinkedIn feed karty. Oficiální embed neumí zkrácený     */
/*  text s „…více", proto kartu skládáme sami z dat postu           */
/*  (posts.json + média v /public/tom). Počty reakcí jsou snímek    */
/*  k 31. 7. 2026.                                                  */
/* ---------------------------------------------------------------- */

const LI_FONT =
  '-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

function GlobeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm4.9 6H10.9a12.3 12.3 0 00-.7-3.5A5 5 0 0112.9 7zM8 13c-.6 0-1.6-1.5-1.9-4h3.8C9.6 11.5 8.6 13 8 13zM6.1 7C6.4 4.5 7.4 3 8 3s1.6 1.5 1.9 4zM5.8 3.5A12.3 12.3 0 005.1 7H3.1a5 5 0 012.7-3.5zM3.1 9h2a12.3 12.3 0 00.7 3.5A5 5 0 013.1 9zm7.1 3.5a12.3 12.3 0 00.7-3.5h2a5 5 0 01-2.7 3.5z" />
    </svg>
  );
}

function PlayOverlay() {
  return (
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden>
          <path d="M8 5.5v13l11-6.5z" />
        </svg>
      </span>
    </span>
  );
}

function LinkedInPostCard({ sample }: { sample: Sample }) {
  const post = posts[sample.activityId];
  const [expanded, setExpanded] = useState(false);

  const commentsLabel =
    post.comments === 0
      ? null
      : post.comments === 1
        ? "1 komentář"
        : post.comments <= 4
          ? `${post.comments} komentáře`
          : `${post.comments} komentářů`;

  return (
    <div className="min-w-0">
      <div
        className="overflow-hidden rounded-lg border border-[#e0dfdc] bg-white text-[rgba(0,0,0,0.9)] shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
        style={{ fontFamily: LI_FONT }}
      >
        {/* Hlavička */}
        <a
          href={sample.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-start gap-2.5 px-4 pt-3"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/tom/robert.png"
            alt="Robert Haas"
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 rounded-full"
          />
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-tight">
              Robert Haas
            </span>
            <span className="block truncate text-xs leading-tight text-[rgba(0,0,0,0.6)]">
              Helping Tech-Forward Companies design and Innovate Brands &amp;
              Digital Products | Co-founder Symbio
            </span>
            <span className="mt-0.5 flex items-center gap-1 text-xs text-[rgba(0,0,0,0.6)]">
              {post.time} · <GlobeIcon />
            </span>
          </span>
        </a>

        {/* Text postu */}
        <div className="px-4 pt-2 pb-3 text-sm leading-[1.4] break-words">
          <a href={sample.url} target="_blank" rel="noopener noreferrer">
            <p
              className={
                expanded
                  ? "whitespace-pre-line"
                  : "line-clamp-3 whitespace-pre-line"
              }
            >
              {post.text}
            </p>
          </a>
          {!expanded && (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="text-[rgba(0,0,0,0.6)] hover:text-[#0a66c2] hover:underline"
            >
              …více
            </button>
          )}
        </div>

        {/* Médium */}
        <a
          href={sample.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block bg-black"
        >
          {post.media.docTitle && (
            <span className="block border-b border-[#e0dfdc] bg-[#f4f2ee] px-4 py-2 text-xs font-semibold text-[rgba(0,0,0,0.7)]">
              {post.media.docTitle} · dokument
            </span>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.media.src}
            alt={sample.title}
            width={post.media.w}
            height={post.media.h}
            className="block h-auto w-full max-w-full"
            style={{ maxHeight: 560, objectFit: "cover" }}
            loading="lazy"
          />
          {post.media.type === "video" && <PlayOverlay />}
        </a>

        {/* Reakce */}
        <div className="flex items-center justify-between px-4 py-2.5 text-xs text-[rgba(0,0,0,0.6)]">
          <span className="flex items-center gap-1.5">
            <span className="flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/tom/react-like.svg" alt="" width={16} height={16} className="relative z-30 rounded-full ring-1 ring-white" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/tom/react-empathy.svg" alt="" width={16} height={16} className="relative z-20 -ml-1 rounded-full ring-1 ring-white" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/tom/react-appreciation.svg" alt="" width={16} height={16} className="relative z-10 -ml-1 rounded-full ring-1 ring-white" />
            </span>
            {post.reactions}
          </span>
          {commentsLabel && <span>{commentsLabel}</span>}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Component                                                       */
/* ---------------------------------------------------------------- */

export default function TomLanding() {
  return (
    <div className="mx-auto max-w-6xl overflow-x-hidden px-5 md:px-8">
      {/* ---- Hero ---- */}
      <section className="pt-16 pb-14 md:pt-24 md:pb-20">
        <motion.p
          {...fadeUp}
          className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-tertiary"
        >
          Founder-led pro Toma Krchu
        </motion.p>
        <motion.h1
          {...stagger(1)}
          className="max-w-3xl font-heading text-[clamp(32px,5.5vw,52px)] font-bold leading-[1.08] tracking-[-0.03em]"
        >
          Backlog jste zrušili. Jeden ti ale zbyl
        </motion.h1>
        <motion.p
          {...stagger(2)}
          className="mt-6 text-lg leading-relaxed text-text-secondary"
        >
          Ten v tvé hlavě.
        </motion.p>
        <motion.blockquote
          {...stagger(3)}
          className="mt-8 max-w-2xl border-l-2 border-text pl-6"
        >
          <p className="text-lg leading-relaxed">
            &bdquo;Občas to hrozně držím v sobě. Je to chyba.&ldquo;
          </p>
        </motion.blockquote>
        <motion.p
          {...stagger(4)}
          className="mt-8 max-w-2xl text-lg font-semibold leading-relaxed"
        >
          <a
            href="#designeri"
            className="underline decoration-border underline-offset-4 transition-colors hover:decoration-text-tertiary"
          >
            Pomůžu ti publikovat myšlenky, které pomohou designérům najít směr
            v nejisté době.
          </a>
        </motion.p>
        <motion.div {...stagger(5)}>
          <TastePlayer />
        </motion.div>
      </section>

      {/* ---- Ukázky ---- */}
      <section className="border-t border-border py-14 md:py-20">
        <motion.h2
          {...fadeUp}
          className="font-heading text-[clamp(24px,3.5vw,32px)] font-bold leading-tight tracking-[-0.02em]"
        >
          Šest ukázek z founder-led spolupráce
        </motion.h2>
        <motion.p
          {...stagger(1)}
          className="mt-4 max-w-2xl leading-relaxed text-text-secondary"
        >
          Founder-led obsah je vždycky spolupráce. Founder dodá myšlenku,
          postoj a mandát. Já dodám zbytek: koncept, text, vizuál, video,
          publikaci. U všech postů níže to fungovalo přesně takhle a stejný
          model nabízím tobě.
        </motion.p>

        <div className="mt-12 space-y-14 md:space-y-16">
          {samples.map((sample, i) => (
            <motion.article
              key={sample.activityId}
              {...stagger(1)}
              className="grid items-start gap-6 md:grid-cols-[1fr_520px] md:gap-12"
            >
              <div className="min-w-0 md:pt-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-tertiary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold leading-snug tracking-[-0.01em]">
                  {sample.title}
                </h3>
                <p className="mt-3 leading-relaxed text-text-secondary">
                  {sample.body}
                </p>
                <p className="mt-4 text-base leading-relaxed text-text-secondary [&>strong]:font-semibold [&>strong]:text-text">
                  {sample.tool}
                </p>
                <a
                  href={sample.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-text-tertiary underline decoration-border underline-offset-2 transition-colors hover:text-text-secondary"
                >
                  Otevřít post na LinkedInu ↗
                </a>
              </div>
              <LinkedInPostCard sample={sample} />
            </motion.article>
          ))}
        </div>
      </section>

      {/* ---- Kaskáda ---- */}
      <section className="border-t border-border py-14 md:py-20">
        <motion.div {...fadeUp} className="flex flex-wrap items-center gap-3">
          <h2 className="font-heading text-[clamp(24px,3.5vw,32px)] font-bold leading-tight tracking-[-0.02em]">
            Obsahové pilíře
          </h2>
          <span className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-tertiary">
            Draft
          </span>
        </motion.div>

        <motion.blockquote
          {...stagger(1)}
          className="mt-10 max-w-3xl border-l-2 border-text pl-6 font-heading text-[clamp(20px,3vw,28px)] font-bold leading-snug tracking-[-0.02em]"
        >
          Neprodáváš nástroj. Prodáváš tezi o budoucnosti tvorby designu.
          Pen.dev je důkaz té teze, ne její předmět.
        </motion.blockquote>

        <motion.p
          {...stagger(2)}
          className="mt-8 max-w-2xl leading-relaxed text-text-secondary"
        >
          Z toho plyne dělení obsahu na dvě vrstvy, které se nesmí míchat
          v jednom postu:
        </motion.p>

        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              {...stagger(i)}
              className={
                pillar.num === "01"
                  ? "bg-card-bg p-5 outline-2 -outline-offset-2 outline-text"
                  : "bg-card-bg p-5"
              }
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-tertiary">
                {pillar.num}
              </p>
              <h3 className="mt-2 font-heading text-base font-bold leading-snug">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {pillar.hint}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Spojnice: pilíř 01 (1. sloupec ze 3, střed na 16,6 %) → detail níže */}
        <div
          aria-hidden
          className="ml-6 h-10 w-px bg-text md:ml-[25%]"
        />

        {/* Pilíř 01 rozvedený: ukázka hloubky, kotva z hero */}
        <motion.div
          {...fadeUp}
          id="designeri"
          className="scroll-mt-10 rounded-2xl border-2 border-text bg-card-bg p-6 md:p-8"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-tertiary">
            01 do hloubky · takhle stavím a rozvíjím tvoje myšlenky
          </p>
          <h3 className="mt-3 font-heading text-2xl font-bold leading-snug tracking-[-0.02em]">
            Jak se designéři právě teď cítí
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-text-secondary">
            Tvoje teze o kolapsu triády není jen technologická. Má publikum,
            které ji právě prožívá:
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <p className="font-heading text-4xl font-bold tracking-[-0.02em]">
                63&nbsp;%
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                designérů se cítí overwhelmed, nejhorší sentiment v oboru
                druhý rok po sobě.{" "}
                <a
                  href="https://www.lennysnewsletter.com/p/how-tech-workers-are-feeling-in-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-2 transition-colors hover:text-text"
                >
                  Lenny&apos;s survey
                </a>
                , 5&nbsp;332 respondentů.
              </p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold tracking-[-0.02em]">
                75&nbsp;%
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                úkolů, které designéři řeší s AI, leží mimo design. Role se
                jim nezmenšuje, roztahuje se do inženýrství.{" "}
                <a
                  href="https://openai.com/index/how-ai-is-expanding-what-people-do-at-work/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-2 transition-colors hover:text-text"
                >
                  OpenAI, Work at the Frontier
                </a>
                , 800&nbsp;000+ pracovních konverzací.
              </p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold tracking-[-0.02em]">
                1,7&nbsp;%
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                jen tolik designu si opačným směrem berou ostatní profese.
                Craft a taste zůstávají vzácné. To je ta dobrá zpráva.{" "}
                <a
                  href="https://openai.com/index/how-ai-is-expanding-what-people-do-at-work/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-2 transition-colors hover:text-text"
                >
                  Stejná studie
                </a>
                .
              </p>
            </div>
          </div>
        </motion.div>

      </section>

      {/* ---- Proč já ---- */}
      <section className="border-t border-border py-14 md:py-20">
        <motion.h2
          {...fadeUp}
          className="font-heading text-[clamp(24px,3.5vw,32px)] font-bold leading-tight tracking-[-0.02em]"
        >
          Proč se mnou
        </motion.h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div key={reason.num} {...stagger(i)}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-tertiary">
                {reason.num}
              </p>
              <h3 className="mt-2 font-heading text-lg font-bold leading-snug">
                {reason.title}
              </h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                {reason.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-[clamp(26px,4vw,38px)] font-bold leading-tight tracking-[-0.02em]">
              Ukázaná platí
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-secondary">
              Pošli mi 2 až 3 myšlenky, které ti teď leží v hlavě, a nahrň ke
              mně kusy podkladů, klidně neučesané. Zpracuju je a vrátím ti
              hotový draft. Jak pracuju, uvidíš rovnou na své věci.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-text px-7 py-3.5 font-semibold text-bg transition-transform hover:scale-[1.02]"
            >
              Odepsat, kde si píšeme
            </a>
          </motion.div>
          <motion.div
            {...stagger(1)}
            className="rounded-2xl border border-border bg-card-bg p-6 md:p-8"
          >
            <h3 className="font-heading text-xl font-bold leading-snug">
              Nebo napřed lidsky
            </h3>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Krátký poznávací video-call. A kdyby ses o víkendu pohyboval po
              Praze, klidně kafe nebo brunch. Jsem z Holešovic.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
