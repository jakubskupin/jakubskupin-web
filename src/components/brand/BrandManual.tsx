"use client";

import { useState, useCallback } from "react";

function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-text px-5 py-2.5 text-[13px] font-semibold text-bg pointer-events-none transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {message}
    </div>
  );
}

function useCopy() {
  const [toast, setToast] = useState({ message: "", visible: false });

  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToast({ message: `${text} zkopírováno`, visible: true });
      setTimeout(() => setToast((t) => ({ ...t, visible: false })), 1800);
    });
  }, []);

  return { toast, copy };
}

/* ─── Reusable pieces ─── */

function Swatch({
  color,
  name,
  hex,
  use,
  lightBorder,
  onCopy,
}: {
  color: string;
  name: string;
  hex: string;
  use: string;
  lightBorder?: boolean;
  onCopy: (t: string) => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card-bg">
      <div
        className="h-20"
        style={{
          background: color,
          borderBottom: lightBorder ? "1px solid var(--border)" : undefined,
        }}
      />
      <div className="px-4 py-3.5">
        <div className="text-sm font-bold">{name}</div>
        <button
          onClick={() => onCopy(hex)}
          className="group mt-0.5 inline-flex items-center gap-1.5 font-mono text-[13px] font-semibold text-text-secondary transition-colors hover:text-text"
        >
          {hex}
          <span className="text-xs opacity-0 transition-opacity group-hover:opacity-100">
            kopírovat
          </span>
        </button>
        <div className="mt-1 text-xs leading-snug text-text-tertiary">{use}</div>
      </div>
    </div>
  );
}

function CopyBox({
  label,
  value,
  onCopy,
}: {
  label: string;
  value: string;
  onCopy: (t: string) => void;
}) {
  return (
    <button
      onClick={() => onCopy(value)}
      className="group mb-2 flex w-full items-center justify-between gap-3 rounded-lg border border-border bg-card-bg px-3.5 py-2.5 font-mono text-[13px] transition-colors hover:border-text-tertiary"
    >
      <span className="min-w-[70px] text-left font-sans text-[11px] font-semibold uppercase tracking-wide text-text-tertiary">
        {label}
      </span>
      <span className="flex-1 text-left font-semibold text-text">{value}</span>
      <span className="font-sans text-[11px] font-semibold text-text-tertiary opacity-0 transition-opacity group-hover:opacity-100">
        kopírovat
      </span>
    </button>
  );
}

function Rule({
  type,
  label,
  children,
}: {
  type: "do" | "dont";
  label: string;
  children: React.ReactNode;
}) {
  const borderColor = type === "do" ? "border-l-[#2D6A4F]" : "border-l-[#991B1B]";
  const labelColor = type === "do" ? "text-[#2D6A4F]" : "text-[#991B1B]";
  return (
    <div
      className={`rounded-xl border border-border border-l-[3px] ${borderColor} bg-card-bg p-5`}
    >
      <div
        className={`mb-2 text-[11px] font-bold uppercase tracking-wider ${labelColor}`}
      >
        {label}
      </div>
      <p className="text-[13px] leading-relaxed text-text-secondary">{children}</p>
    </div>
  );
}

function Spec({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="inline-block rounded-md bg-[#E8E6E1] px-2.5 py-0.5 font-mono text-xs font-semibold text-text transition-colors hover:bg-[#D8D6D1]"
      >
        {children}
      </button>
    );
  }
  return (
    <span className="text-xs text-text-tertiary">{children}</span>
  );
}

function Example({
  previewStyle,
  previewContent,
  label,
  specs,
}: {
  previewStyle: React.CSSProperties;
  previewContent: React.ReactNode;
  label: string;
  specs: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card-bg">
      <div
        className="border-b border-border bg-bg px-6 py-5"
        style={previewStyle}
      >
        {previewContent}
      </div>
      <div className="px-6 py-3.5">
        <div className="mb-2 text-xs font-bold uppercase tracking-wide text-text-tertiary">
          {label}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">{specs}</div>
      </div>
    </div>
  );
}

/* ─── Main component ─── */

export default function BrandManual() {
  const { toast, copy } = useCopy();

  return (
    <div className="mx-auto max-w-[800px] px-6">
      {/* HEADER */}
      <header className="border-b border-border pb-10 pt-14 max-sm:pb-8 max-sm:pt-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-bg">
            v1.2
          </span>
          <span className="inline-block rounded-full bg-[#E8E6E1] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-text-secondary">
            10. března 2026
          </span>
        </div>
        <h1 className="mb-2 font-heading text-[clamp(28px,5vw,40px)] font-bold leading-tight">
          Brand manuál
        </h1>
        <p className="max-w-[560px] text-[15px] text-text-secondary">
          Barvy, typografie a pravidla použití pro jakubskupin.cz. Všechno na
          jednom místě, připravené ke zkopírování do Canvy, Figmy nebo kódu.
        </p>
      </header>

      {/* 01 BARVY */}
      <section
        id="barvy"
        className="border-b border-border py-14 max-sm:py-10"
      >
        <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-text-tertiary">
          01 &mdash; Barvy
        </div>
        <h2 className="mb-2 font-heading text-[clamp(22px,4vw,30px)] font-bold leading-tight">
          Barevná paleta
        </h2>
        <p className="mb-8 max-w-[560px] text-[15px] text-text-secondary">
          7 barev. Kliknutím na hex kód ho zkopírujete do schránky.
        </p>

        <h3 className="mb-4 font-heading text-[17px] font-bold">
          Základní barvy
        </h3>
        <div className="mb-8 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 max-sm:grid-cols-2">
          <Swatch color="#FAFAF8" name="Pozadí" hex="#FAFAF8" use="Pozadí celého webu a OG image. V Canvě: barva pozadí." lightBorder onCopy={copy} />
          <Swatch color="#1A1A18" name="Text" hex="#1A1A18" use="Hlavní text, nadpisy, logo. Téměř černá s teplým nádechem." onCopy={copy} />
          <Swatch color="#6B6964" name="Text sekundární" hex="#6B6964" use="Odstavce, popisy, delší texty. Hlavní barva body copy." onCopy={copy} />
          <Swatch color="#96948E" name="Text terciární" hex="#96948E" use="Labels, meta info, čísla kroků, pomocný text." onCopy={copy} />
        </div>

        <h3 className="mb-4 font-heading text-[17px] font-bold">
          Povrchy a ohraničení
        </h3>
        <div className="mb-8 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 max-sm:grid-cols-2">
          <Swatch color="#FFFFFF" name="Karta" hex="#FFFFFF" use="Pricing karta, tooltip, karty služeb." lightBorder onCopy={copy} />
          <Swatch color="#E8E6E1" name="Ohraničení" hex="#E8E6E1" use="Bordery karet, linky, oddělovače. Teplá šedá." onCopy={copy} />
          <Swatch color="rgba(26, 26, 24, 0.06)" name="Accent soft" hex="rgba(26, 26, 24, 0.06)" use="Jemné pozadí pro hover stavy, aktivní prvky." lightBorder onCopy={copy} />
        </div>

        <h3 className="mb-4 font-heading text-[17px] font-bold">
          Rychlé kopírování
        </h3>
        <CopyBox label="Pozadí" value="#FAFAF8" onCopy={copy} />
        <CopyBox label="Text" value="#1A1A18" onCopy={copy} />
        <CopyBox label="Secondary" value="#6B6964" onCopy={copy} />
        <CopyBox label="Tertiary" value="#96948E" onCopy={copy} />
        <CopyBox label="Karta" value="#FFFFFF" onCopy={copy} />
        <CopyBox label="Border" value="#E8E6E1" onCopy={copy} />
      </section>

      {/* 02 TYPOGRAFIE */}
      <section
        id="typografie"
        className="border-b border-border py-14 max-sm:py-10"
      >
        <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-text-tertiary">
          02 &mdash; Typografie
        </div>
        <h2 className="mb-2 font-heading text-[clamp(22px,4vw,30px)] font-bold leading-tight">
          Fonty
        </h2>
        <p className="mb-8 max-w-[560px] text-[15px] text-text-secondary">
          Dva fonty. Syne pro nadpisy, Manrope pro tělo. Oba z Google Fonts,
          oba zdarma.
        </p>

        {/* SYNE card */}
        <div className="mb-4 rounded-xl border border-border bg-card-bg p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold text-bg">
              Syne
            </span>
            <span className="rounded-full bg-[#E8E6E1] px-2.5 py-0.5 text-[11px] font-semibold text-text-secondary">
              Heading
            </span>
            <span className="rounded-full bg-[#E8E6E1] px-2.5 py-0.5 text-[11px] font-semibold text-text-secondary">
              Bold 700
            </span>
            <span className="rounded-full bg-[#E8E6E1] px-2.5 py-0.5 text-[11px] font-semibold text-text-secondary">
              Google Fonts
            </span>
          </div>
          <div className="mb-4">
            <div className="font-heading text-[32px] font-bold leading-tight tracking-[-0.03em]">
              Pojmenuju, čím jste výjimeční
            </div>
          </div>

          <h3 className="mb-4 font-heading text-[17px] font-bold">
            Kde se používá
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr>
                  <th className="border-b border-border pb-2 text-left text-[11px] font-bold uppercase tracking-wide text-text-tertiary">
                    Element
                  </th>
                  <th className="border-b border-border pb-2 text-left text-[11px] font-bold uppercase tracking-wide text-text-tertiary">
                    Velikost
                  </th>
                  <th className="border-b border-border pb-2 text-left text-[11px] font-bold uppercase tracking-wide text-text-tertiary">
                    Poznámka
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-border py-2 font-semibold">Hero headline</td>
                  <td className="border-b border-border py-2 text-text-secondary">clamp(34px, 5.5vw, 52px)</td>
                  <td className="border-b border-border py-2 text-text-secondary">Bold 700, tracking -0.03em, leading 1.12</td>
                </tr>
                <tr>
                  <td className="border-b border-border py-2 font-semibold">Sekce headline</td>
                  <td className="border-b border-border py-2 text-text-secondary">clamp(28px, 4vw, 38px)</td>
                  <td className="border-b border-border py-2 text-text-secondary">Bold 700, tracking -0.03em</td>
                </tr>
                <tr>
                  <td className="border-b border-border py-2 font-semibold">Karta headline</td>
                  <td className="border-b border-border py-2 text-text-secondary">17&ndash;20px</td>
                  <td className="border-b border-border py-2 text-text-secondary">Bold 700, tracking -0.01em</td>
                </tr>
                <tr>
                  <td className="border-b border-border py-2 font-semibold">Logo &bdquo;Jakub Skupin&ldquo;</td>
                  <td className="border-b border-border py-2 text-text-secondary">18px (text-lg)</td>
                  <td className="border-b border-border py-2 text-text-secondary">Bold 700, tight tracking</td>
                </tr>
                <tr>
                  <td className="border-b border-border py-2 font-semibold">Pricing číslo</td>
                  <td className="border-b border-border py-2 text-text-secondary">36px</td>
                  <td className="border-b border-border py-2 text-text-secondary">Bold 700, tracking -0.03em</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mb-4 mt-8 font-heading text-[17px] font-bold">
            Kopírovat do Canvy / Figmy
          </h3>
          <CopyBox label="Název" value="Syne" onCopy={copy} />
          <CopyBox label="Google" value="https://fonts.google.com/specimen/Syne" onCopy={copy} />
          <CopyBox label="Weight" value="700 (Bold)" onCopy={copy} />
        </div>

        {/* MANROPE card */}
        <div className="mb-4 rounded-xl border border-border bg-card-bg p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold text-bg">
              Manrope
            </span>
            <span className="rounded-full bg-[#E8E6E1] px-2.5 py-0.5 text-[11px] font-semibold text-text-secondary">
              Body
            </span>
            <span className="rounded-full bg-[#E8E6E1] px-2.5 py-0.5 text-[11px] font-semibold text-text-secondary">
              400 / 500 / 600 / 700
            </span>
            <span className="rounded-full bg-[#E8E6E1] px-2.5 py-0.5 text-[11px] font-semibold text-text-secondary">
              Google Fonts
            </span>
          </div>
          <div className="mb-4">
            <div className="text-base leading-[1.65] text-text-secondary">
              Pro experty a tvůrce, kteří mají co říct &mdash; ale online to
              není vidět. Pojmenuju, čím jste výjimeční, a dám tomu tvar.
            </div>
          </div>

          <h3 className="mb-4 font-heading text-[17px] font-bold">
            Kde se používá
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr>
                  <th className="border-b border-border pb-2 text-left text-[11px] font-bold uppercase tracking-wide text-text-tertiary">
                    Element
                  </th>
                  <th className="border-b border-border pb-2 text-left text-[11px] font-bold uppercase tracking-wide text-text-tertiary">
                    Velikost
                  </th>
                  <th className="border-b border-border pb-2 text-left text-[11px] font-bold uppercase tracking-wide text-text-tertiary">
                    Weight
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-border py-2 font-semibold">Body text</td>
                  <td className="border-b border-border py-2 text-text-secondary">15&ndash;16px</td>
                  <td className="border-b border-border py-2 text-text-secondary">400 Regular</td>
                </tr>
                <tr>
                  <td className="border-b border-border py-2 font-semibold">Body text (zvýrazněný)</td>
                  <td className="border-b border-border py-2 text-text-secondary">15&ndash;16px</td>
                  <td className="border-b border-border py-2 text-text-secondary">700 Bold</td>
                </tr>
                <tr>
                  <td className="border-b border-border py-2 font-semibold">Labels (uppercase)</td>
                  <td className="border-b border-border py-2 text-text-secondary">11&ndash;13px</td>
                  <td className="border-b border-border py-2 text-text-secondary">600&ndash;700, tracking 0.06em</td>
                </tr>
                <tr>
                  <td className="border-b border-border py-2 font-semibold">Pricing &bdquo;Kč&ldquo; jednotka</td>
                  <td className="border-b border-border py-2 text-text-secondary">14px</td>
                  <td className="border-b border-border py-2 text-text-secondary">500 Medium, #96948E</td>
                </tr>
                <tr>
                  <td className="border-b border-border py-2 font-semibold">CTA button</td>
                  <td className="border-b border-border py-2 text-text-secondary">14px</td>
                  <td className="border-b border-border py-2 text-text-secondary">500&ndash;600 Medium/SemiBold</td>
                </tr>
                <tr>
                  <td className="border-b border-border py-2 font-semibold">Testimonial citát</td>
                  <td className="border-b border-border py-2 text-text-secondary">16&ndash;17px</td>
                  <td className="border-b border-border py-2 text-text-secondary">400 Regular, italic</td>
                </tr>
                <tr>
                  <td className="border-b border-border py-2 font-semibold">Footer / meta</td>
                  <td className="border-b border-border py-2 text-text-secondary">13px</td>
                  <td className="border-b border-border py-2 text-text-secondary">400&ndash;600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mb-4 mt-8 font-heading text-[17px] font-bold">
            Kopírovat do Canvy / Figmy
          </h3>
          <CopyBox label="Název" value="Manrope" onCopy={copy} />
          <CopyBox label="Google" value="https://fonts.google.com/specimen/Manrope" onCopy={copy} />
          <CopyBox label="Weights" value="400, 500, 600, 700" onCopy={copy} />
        </div>

        {/* Font pairing */}
        <h3 className="mb-4 font-heading text-[17px] font-bold">
          Font pairing &mdash; proč tato kombinace
        </h3>
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <Rule type="do" label="Proč Syne">
            Geometrický, sebevědomý, moderní. Nízký x-height vytváří vizuální
            napětí. Funguje skvěle pro krátké, silné nadpisy. Česká diakritika
            je čistá.
          </Rule>
          <Rule type="do" label="Proč Manrope">
            Neutrální geometrický sans-serif s jemným humanistickým nádechem.
            Výborná čitelnost i v malých velikostech. Dobré kerning s českou
            diakritikou.
          </Rule>
        </div>
      </section>

      {/* 03 PRAVIDLA */}
      <section
        id="pravidla"
        className="border-b border-border py-14 max-sm:py-10"
      >
        <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-text-tertiary">
          03 &mdash; Pravidla
        </div>
        <h2 className="mb-2 font-heading text-[clamp(22px,4vw,30px)] font-bold leading-tight">
          Jak používat
        </h2>
        <p className="mb-8 max-w-[560px] text-[15px] text-text-secondary">
          Stručná pravidla pro konzistentní vizuál napříč kanály.
        </p>

        <h3 className="mb-4 font-heading text-[17px] font-bold">Barvy</h3>
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <Rule type="do" label="Ano">
            Pozadí vždy #FAFAF8 (teplá bílá). Text na pozadí #1A1A18.
            Sekundární text pro delší odstavce. Karty na bílém pozadí #FFFFFF s
            borderem #E8E6E1.
          </Rule>
          <Rule type="dont" label="Ne">
            Čistě bílé pozadí (#FFFFFF) pro celou stránku. Výrazné barvy,
            gradienty, neonové akcenty. Šedý text na šedém pozadí (nedostatečný
            kontrast).
          </Rule>
        </div>

        <h3 className="mb-4 mt-8 font-heading text-[17px] font-bold">
          Typografie
        </h3>
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <Rule type="do" label="Ano">
            Syne pouze pro nadpisy (H1&ndash;H3) a logo. Manrope pro vše
            ostatní. Labels vždy uppercase s letter-spacing 0.06em. Velký
            kontrast velikostí (52px headline vs 13px label).
          </Rule>
          <Rule type="dont" label="Ne">
            Syne pro body text nebo dlouhé odstavce. Manrope jako heading font.
            Více než 2 fonty. Syne v light/regular weightu (používat pouze Bold
            700).
          </Rule>
        </div>

        <h3 className="mb-4 mt-8 font-heading text-[17px] font-bold">
          Canva &mdash; rychlý setup
        </h3>
        <div className="overflow-x-auto">
          <table className="mt-3 w-full border-collapse text-[13px]">
            <thead>
              <tr>
                <th className="border-b border-border pb-2 text-left text-[11px] font-bold uppercase tracking-wide text-text-tertiary">
                  Co
                </th>
                <th className="border-b border-border pb-2 text-left text-[11px] font-bold uppercase tracking-wide text-text-tertiary">
                  Hodnota
                </th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border-b border-border py-2 font-semibold">Barva pozadí</td><td className="border-b border-border py-2 text-text-secondary">#FAFAF8</td></tr>
              <tr><td className="border-b border-border py-2 font-semibold">Barva hlavního textu</td><td className="border-b border-border py-2 text-text-secondary">#1A1A18</td></tr>
              <tr><td className="border-b border-border py-2 font-semibold">Barva popisků</td><td className="border-b border-border py-2 text-text-secondary">#96948E</td></tr>
              <tr><td className="border-b border-border py-2 font-semibold">Heading font</td><td className="border-b border-border py-2 text-text-secondary">Syne &mdash; Bold</td></tr>
              <tr><td className="border-b border-border py-2 font-semibold">Body font</td><td className="border-b border-border py-2 text-text-secondary">Manrope &mdash; Regular / SemiBold</td></tr>
              <tr><td className="border-b border-border py-2 font-semibold">Label font</td><td className="border-b border-border py-2 text-text-secondary">Manrope &mdash; SemiBold, uppercase, spacing +6%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 04 PŘÍKLADY Z WEBU */}
      <section
        id="priklady"
        className="border-b border-border py-14 max-sm:py-10"
      >
        <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-text-tertiary">
          04 &mdash; Příklady z webu
        </div>
        <h2 className="mb-2 font-heading text-[clamp(22px,4vw,30px)] font-bold leading-tight">
          Reálné elementy
        </h2>
        <p className="mb-8 max-w-[560px] text-[15px] text-text-secondary">
          Přesné hodnoty každého textového elementu na webu. Kliknutím
          zkopírujete celý řádek.
        </p>

        {/* Nadpisy */}
        <h3 className="mb-4 font-heading text-[17px] font-bold">Nadpisy</h3>
        <div className="mb-8 flex flex-col gap-3">
          <Example
            previewStyle={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 36, letterSpacing: "-0.03em", lineHeight: 1.12, color: "#1A1A18" }}
            previewContent="Pojmenuju, čím jste výjimeční"
            label="Hero headline"
            specs={<>
              <Spec onClick={() => copy("Syne")}>Syne</Spec>
              <Spec onClick={() => copy("700")}>Bold 700</Spec>
              <Spec onClick={() => copy("clamp(34px, 5.5vw, 52px)")}>clamp(34–52px)</Spec>
              <Spec onClick={() => copy("#1A1A18")}>#1A1A18</Spec>
              <Spec>tracking -0.03em · leading 1.12</Spec>
            </>}
          />
          <Example
            previewStyle={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 26, letterSpacing: "-0.03em", lineHeight: 1.2, color: "#1A1A18" }}
            previewContent="Za 2 dny máte funkční základ"
            label="Sekce headline"
            specs={<>
              <Spec onClick={() => copy("Syne")}>Syne</Spec>
              <Spec onClick={() => copy("700")}>Bold 700</Spec>
              <Spec onClick={() => copy("clamp(28px, 4vw, 38px)")}>clamp(28–38px)</Spec>
              <Spec onClick={() => copy("#1A1A18")}>#1A1A18</Spec>
              <Spec>tracking -0.03em</Spec>
            </>}
          />
          <Example
            previewStyle={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: "-0.01em", lineHeight: 1.2, color: "#1A1A18" }}
            previewContent="Research a strategie"
            label="Karta / krok headline"
            specs={<>
              <Spec onClick={() => copy("Syne")}>Syne</Spec>
              <Spec onClick={() => copy("700")}>Bold 700</Spec>
              <Spec onClick={() => copy("17px")}>17px</Spec>
              <Spec onClick={() => copy("#1A1A18")}>#1A1A18</Spec>
              <Spec>tracking -0.01em</Spec>
            </>}
          />
        </div>

        {/* Labels */}
        <h3 className="mb-4 font-heading text-[17px] font-bold">Labels</h3>
        <div className="mb-8 flex flex-col gap-3">
          <Example
            previewStyle={{ fontWeight: 600, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "#96948E" }}
            previewContent="Personal brand × AI × Marketing"
            label="Hero label"
            specs={<>
              <Spec onClick={() => copy("Manrope")}>Manrope</Spec>
              <Spec onClick={() => copy("600")}>SemiBold 600</Spec>
              <Spec onClick={() => copy("13px")}>13px</Spec>
              <Spec onClick={() => copy("#96948E")}>#96948E</Spec>
              <Spec>uppercase · tracking 0.06em</Spec>
            </>}
          />
          <Example
            previewStyle={{ fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#96948E" }}
            previewContent="01"
            label="Čísla kroků"
            specs={<>
              <Spec onClick={() => copy("Manrope")}>Manrope</Spec>
              <Spec onClick={() => copy("700")}>Bold 700</Spec>
              <Spec onClick={() => copy("12px")}>12px</Spec>
              <Spec onClick={() => copy("#96948E")}>#96948E</Spec>
              <Spec>uppercase · tracking 0.08em</Spec>
            </>}
          />
          <Example
            previewStyle={{ fontWeight: 600, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "#96948E" }}
            previewContent="Jak pracuji"
            label="Sekce label"
            specs={<>
              <Spec onClick={() => copy("Manrope")}>Manrope</Spec>
              <Spec onClick={() => copy("600")}>SemiBold 600</Spec>
              <Spec onClick={() => copy("13px")}>13px</Spec>
              <Spec onClick={() => copy("#96948E")}>#96948E</Spec>
              <Spec>uppercase · tracking 0.06em</Spec>
            </>}
          />
        </div>

        {/* Body text */}
        <h3 className="mb-4 font-heading text-[17px] font-bold">Body text</h3>
        <div className="mb-8 flex flex-col gap-3">
          <Example
            previewStyle={{ fontWeight: 400, fontSize: 16, lineHeight: 1.65, color: "#6B6964", maxWidth: 480 }}
            previewContent="Pro experty a tvůrce, kteří mají co říct — ale online to není vidět."
            label="Hero popis"
            specs={<>
              <Spec onClick={() => copy("Manrope")}>Manrope</Spec>
              <Spec onClick={() => copy("400")}>Regular 400</Spec>
              <Spec onClick={() => copy("18px")}>18px (text-lg)</Spec>
              <Spec onClick={() => copy("#6B6964")}>#6B6964</Spec>
              <Spec>leading 1.65</Spec>
            </>}
          />
          <Example
            previewStyle={{ fontWeight: 400, fontSize: 14, lineHeight: 1.6, color: "#6B6964", maxWidth: 480 }}
            previewContent="Rešerše trhu, cílových skupin a tonality. AI analýza + lidský úsudek."
            label="Krok / karta popis"
            specs={<>
              <Spec onClick={() => copy("Manrope")}>Manrope</Spec>
              <Spec onClick={() => copy("400")}>Regular 400</Spec>
              <Spec onClick={() => copy("14px")}>14px</Spec>
              <Spec onClick={() => copy("#6B6964")}>#6B6964</Spec>
              <Spec>leading 1.6</Spec>
            </>}
          />
          <Example
            previewStyle={{ fontWeight: 400, fontSize: 14, lineHeight: 1.6, color: "#96948E", textAlign: "center" as const }}
            previewContent={<>Jeden člověk, <strong className="font-bold text-text-secondary">2 dny</strong>.</>}
            label="SystemStrip text"
            specs={<>
              <Spec onClick={() => copy("Manrope")}>Manrope</Spec>
              <Spec onClick={() => copy("400")}>Regular 400</Spec>
              <Spec onClick={() => copy("14px")}>14px</Spec>
              <Spec onClick={() => copy("#96948E")}>#96948E</Spec>
              <Spec>zvýrazněné: Bold 700 v #6B6964</Spec>
            </>}
          />
        </div>

        {/* Speciální elementy */}
        <h3 className="mb-4 font-heading text-[17px] font-bold">
          Speciální elementy
        </h3>
        <div className="flex flex-col gap-3">
          <Example
            previewStyle={{ fontWeight: 600, fontSize: 14, lineHeight: 1.6, color: "#6B6964" }}
            previewContent={<>Výzkum <span className="text-[13px] text-text-tertiary">&rarr;</span> Strategie <span className="text-[13px] text-text-tertiary">&rarr;</span> Design <span className="text-[13px] text-text-tertiary">&rarr;</span> Web</>}
            label="Process strip"
            specs={<>
              <Spec onClick={() => copy("Manrope")}>Manrope</Spec>
              <Spec onClick={() => copy("600")}>SemiBold 600</Spec>
              <Spec onClick={() => copy("14px")}>14px</Spec>
              <Spec onClick={() => copy("#6B6964")}>#6B6964</Spec>
              <Spec>šipky: 13px v #96948E</Spec>
            </>}
          />
          <Example
            previewStyle={{}}
            previewContent={
              <span className="inline-block rounded-full border border-border px-5 py-2 text-sm font-medium text-text-secondary">
                Spolupráce ↗︎
              </span>
            }
            label="CTA button (navbar)"
            specs={<>
              <Spec onClick={() => copy("Manrope")}>Manrope</Spec>
              <Spec onClick={() => copy("500")}>Medium 500</Spec>
              <Spec onClick={() => copy("14px")}>14px</Spec>
              <Spec onClick={() => copy("#6B6964")}>#6B6964</Spec>
              <Spec>border #E8E6E1 · pill shape</Spec>
            </>}
          />
          <Example
            previewStyle={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em", color: "#1A1A18" }}
            previewContent="Jakub Skupin"
            label="Logo (text)"
            specs={<>
              <Spec onClick={() => copy("Syne")}>Syne</Spec>
              <Spec onClick={() => copy("700")}>Bold 700</Spec>
              <Spec onClick={() => copy("18px")}>18px</Spec>
              <Spec onClick={() => copy("#1A1A18")}>#1A1A18</Spec>
              <Spec>tight tracking</Spec>
            </>}
          />
          <Example
            previewStyle={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 36, letterSpacing: "-0.03em", color: "#1A1A18" }}
            previewContent={<>42 500 <span className="text-sm font-medium text-text-tertiary" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>Kč</span></>}
            label="Pricing číslo"
            specs={<>
              <Spec onClick={() => copy("Syne")}>Syne</Spec>
              <Spec onClick={() => copy("700")}>Bold 700</Spec>
              <Spec onClick={() => copy("36px")}>36px</Spec>
              <Spec onClick={() => copy("#1A1A18")}>#1A1A18</Spec>
              <Spec>&bdquo;Kč&ldquo;: Manrope 14px Medium v #96948E</Spec>
            </>}
          />
        </div>
      </section>

      {/* 05 KALKULACE */}
      <section id="kalkulace" className="py-14 max-sm:py-10">
        <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-text-tertiary">
          05 &mdash; Dokumenty
        </div>
        <h2 className="mb-2 font-heading text-[clamp(22px,4vw,30px)] font-bold leading-tight">
          Kalkulace / nabídka
        </h2>
        <p className="mb-8 max-w-[560px] text-[15px] text-text-secondary">
          A4 formát pro cenové nabídky klientům. Stejná paleta a typografie jako
          web &mdash; klient pozná, že dokument patří ke značce.
        </p>

        <h3 className="mb-4 font-heading text-[17px] font-bold">
          Struktura dokumentu
        </h3>
        <div className="mb-8 flex flex-col gap-3">
          <Example
            previewStyle={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.8 }}
            previewContent={
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wide text-text-tertiary">KALKULACE</span><br />
                <span className="text-[10px] text-text-tertiary">10. března 2026</span><br />
                <span className="font-heading text-[22px] font-bold tracking-[-0.03em] text-text">Název projektu</span><br />
                <span className="text-[11px] text-text-secondary">odkaz-na-hotovou-praci.vercel.app</span>
              </div>
            }
            label="Hlavička"
            specs={<>
              <Spec onClick={() => copy("Manrope SemiBold 11px uppercase")}>Label</Spec>
              <Spec onClick={() => copy("Syne Bold 30px")}>Název: Syne 30px</Spec>
              <Spec onClick={() => copy("Manrope 10px")}>Datum: 10px</Spec>
              <Spec>URL hotové práce pod názvem</Spec>
            </>}
          />
          <Example
            previewStyle={{ fontSize: 13, lineHeight: 1.8 }}
            previewContent={
              <div>
                <span className="text-[10px] font-semibold tracking-wide text-text-tertiary">01</span><br />
                <span className="font-heading text-[15px] font-bold text-text">Název položky</span><br />
                <span className="block border-b border-border py-1 text-[11px] text-text-secondary">Popis řádku · detail</span>
                <span className="block border-b border-border py-1 text-[11px] text-text-secondary">Další řádek · detail</span>
                <span className="mt-2 inline-block rounded-md bg-[#F0EFEB] px-2.5 py-1 text-[13px] font-bold text-text">35 000 Kč</span>
              </div>
            }
            label="Sekce s položkami"
            specs={<>
              <Spec onClick={() => copy("Syne Bold 17px")}>Nadpis: Syne 17px</Spec>
              <Spec onClick={() => copy("Manrope 11px")}>Řádky: 11px</Spec>
              <Spec onClick={() => copy("#F0EFEB")}>Cenovka: #F0EFEB pill</Spec>
              <Spec>řádky oddělené border #E8E6E1</Spec>
            </>}
          />
          <Example
            previewStyle={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            previewContent={
              <>
                <span className="font-heading text-[17px] font-bold text-text">Celkem</span>
                <span className="inline-block rounded-lg bg-text px-3.5 py-1.5 text-base font-bold text-bg">57 500 Kč</span>
              </>
            }
            label="Celková cena"
            specs={<>
              <Spec onClick={() => copy("Syne Bold 20px")}>Label: Syne 20px</Spec>
              <Spec onClick={() => copy("#1A1A18 bg + #FAFAF8 text")}>Dark pill</Spec>
              <Spec onClick={() => copy("Manrope Bold 22px")}>Cena: 22px</Spec>
              <Spec>jediný tmavý akcent na celé stránce</Spec>
            </>}
          />
        </div>

        <h3 className="mb-4 font-heading text-[17px] font-bold">
          Pravidla formátu
        </h3>
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <Rule type="do" label="Ano">
            A4, pozadí #FAFAF8. Padding 50/60/42/60. Footer vždy dole (jméno,
            IČO, DIČ, web). Datum vystavení. URL hotové práce. Poznámky
            kurzívou v #96948E. Jedna tmavá pill na celkovou cenu.
          </Rule>
          <Rule type="dont" label="Ne">
            Víc než jeden tmavý element. Barevné akcenty. Loga nebo grafika.
            Tučný text v poznámkách. Více než 2 úrovně fontové hierarchie v
            tabulce.
          </Rule>
        </div>

        <h3 className="mb-4 mt-8 font-heading text-[17px] font-bold">
          Typografická hierarchie
        </h3>
        <div className="overflow-x-auto">
          <table className="mt-3 w-full border-collapse text-[13px]">
            <thead>
              <tr>
                <th className="border-b border-border pb-2 text-left text-[11px] font-bold uppercase tracking-wide text-text-tertiary">Element</th>
                <th className="border-b border-border pb-2 text-left text-[11px] font-bold uppercase tracking-wide text-text-tertiary">Font</th>
                <th className="border-b border-border pb-2 text-left text-[11px] font-bold uppercase tracking-wide text-text-tertiary">Velikost</th>
                <th className="border-b border-border pb-2 text-left text-[11px] font-bold uppercase tracking-wide text-text-tertiary">Barva</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border-b border-border py-2 font-semibold">Label (KALKULACE, 01, 02)</td><td className="border-b border-border py-2 text-text-secondary">Manrope SemiBold</td><td className="border-b border-border py-2 text-text-secondary">10&ndash;11px, uppercase</td><td className="border-b border-border py-2 text-text-secondary">#96948E</td></tr>
              <tr><td className="border-b border-border py-2 font-semibold">Název projektu</td><td className="border-b border-border py-2 text-text-secondary">Syne Bold</td><td className="border-b border-border py-2 text-text-secondary">30px</td><td className="border-b border-border py-2 text-text-secondary">#1A1A18</td></tr>
              <tr><td className="border-b border-border py-2 font-semibold">Název sekce</td><td className="border-b border-border py-2 text-text-secondary">Syne Bold</td><td className="border-b border-border py-2 text-text-secondary">17px</td><td className="border-b border-border py-2 text-text-secondary">#1A1A18</td></tr>
              <tr><td className="border-b border-border py-2 font-semibold">Řádky položek</td><td className="border-b border-border py-2 text-text-secondary">Manrope Regular</td><td className="border-b border-border py-2 text-text-secondary">11px</td><td className="border-b border-border py-2 text-text-secondary">#6B6964</td></tr>
              <tr><td className="border-b border-border py-2 font-semibold">Cenovka (sekce)</td><td className="border-b border-border py-2 text-text-secondary">Manrope Bold</td><td className="border-b border-border py-2 text-text-secondary">16px</td><td className="border-b border-border py-2 text-text-secondary">#1A1A18 na #F0EFEB pill</td></tr>
              <tr><td className="border-b border-border py-2 font-semibold">Celková cena</td><td className="border-b border-border py-2 text-text-secondary">Manrope Bold</td><td className="border-b border-border py-2 text-text-secondary">22px</td><td className="border-b border-border py-2 text-text-secondary">#FAFAF8 na #1A1A18 pill</td></tr>
              <tr><td className="border-b border-border py-2 font-semibold">Poznámky</td><td className="border-b border-border py-2 text-text-secondary">Manrope Regular Italic</td><td className="border-b border-border py-2 text-text-secondary">11px</td><td className="border-b border-border py-2 text-text-secondary">#96948E</td></tr>
              <tr><td className="border-b border-border py-2 font-semibold">Patička</td><td className="border-b border-border py-2 text-text-secondary">Syne Bold + Manrope</td><td className="border-b border-border py-2 text-text-secondary">8&ndash;10px</td><td className="border-b border-border py-2 text-text-secondary">#1A1A18 / #96948E</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-[13px] text-text-tertiary">
        Brand manuál v1.2 &mdash; 10. března 2026 &mdash; Jakub Skupin
      </footer>

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}
