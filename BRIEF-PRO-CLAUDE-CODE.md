# Landing page pro jakubskupin.cz

## Instrukce pro Claude Code

Potřebuji vytvořit novou landing page pro můj web jakubskupin.cz (Next.js + Vercel). Přiložený HTML soubor `landing-reference.html` je kompletní prototyp se vším — layoutem, styly, obsahem, responzivitou. Použij ho jako referenci.

### Co udělat:
1. Převeď přiložený HTML prototyp do Next.js stránky (page.tsx)
2. Zachovej přesně tento design — fonty, barvy, spacing, layout
3. Screenshoty v case study kartách jsou zatím placeholder — nech tam `<Image>` tag s alt textem, doplním později
4. CTA buttony zatím nikam neodkazují — přidej `href="#"` 
5. Fonty Syne + Manrope načítej přes next/font/google

### Design tokens:
```
--bg: #FAFAF8
--text: #1A1A18
--text-secondary: #86847E
--text-tertiary: #ADABA5
--border: #E8E6E1
--card-bg: #FFFFFF
--radius: 16px
--radius-lg: 24px
```

### Fonty:
- Headlines: Syne (700)
- Body: Manrope (400, 500, 600, 700)

### Struktura stránky:
1. Nav (logo + CTA link)
2. Hero (label + headline + subheadline)
3. Vybraná práce (2 karty s browser chrome mockupy)
4. Testimonial
5. Pricing (3 tiery)
6. Průběžná spolupráce (4 service karty)
7. Footer

---

## Obsah

### Hero
- Label: `Marketing × AI × Realizace`
- Headline: `Stavím značky a obsahové systémy, které dávají náskok`
- Subheadline: `Propojuji to, co ostatní dělají odděleně — research, strategii, obsah i web`

### Vybraná práce

**Karta 1:**
- URL v browser chrome: martinvymetal.cz
- Screenshot: placeholder (dodám)
- Název: Martin Vymětal
- Popis: Personal brand a web pro marketéra a podcastera.
- Tag: Strategie → Web

**Karta 2:**
- URL v browser chrome: simrani.cz
- Screenshot: placeholder (dodám)
- Název: Šimrání
- Popis: Brand strategie, vizuální identita a web pro podcast o intimitě.
- Tag: Research → Brand → Web

### Testimonial
- Citát: „Pošlete mu SMS a máte web. Nadiktujete zadání v autě a dostanete první návrh projektu. Umí přerámovat vaši vizi tak, aby začala fungovat."
- Autor: Martin Vymětal
- Role: Marketér, podcaster

### Pricing

**Tier 1 — Research Sprint**
- Cena: 15 000 Kč / za jeden sprint
- Tagline: Hloubková rešerše s vizuálním výstupem do 48 hodin.
- Features:
  - Desk research + AI analýza
  - Syntéza klíčových insightů
  - Vizuálně zpracovaný dokument
  - Váš kontext zapracován
- Delivery: Do 48 hodin
- CTA: Domluvit sprint (outline styl)
- Mimo rozsah: Strategie, positioning, vizuální identita, web

**Tier 2 — Starter Pack (highlighted, "Nejčastější volba")**
- Cena: 27 000 Kč / jednorázově
- Tagline: Research, positioning, vizuální směr — vše v jednom dokumentu.
- Features:
  - Vše z Research Sprintu
  - Cílové skupiny a jejich jazyk
  - Positioning a klíčové sdělení
  - Tone of voice a obsahový směr
  - Vizuální směr a moodboard z referencí
  - Doporučení formátů a kanálů
- Delivery: Do 5 pracovních dní
- CTA: Začít spolupráci (solid styl, tmavé pozadí)
- Mimo rozsah: Vizuální identita, web, exekuce obsahu

**Tier 3 — Brand & Web**
- Cena: od 56 000 Kč / dle rozsahu
- Tagline: Kompletní značka — od strategie přes identitu po funkční web.
- Features:
  - Vše ze Starter Packu
  - Vizuální identita a systém
  - Konverzní landing page nebo web
  - Ukázkový obsah (3–5 postů)
  - Brand guidelines
  - Iterace na základě zpětné vazby
- Delivery: 2–4 týdny
- CTA: Poptat projekt (outline styl)
- Mimo rozsah: Správa obsahu, placená reklama, SEO

### Průběžná spolupráce
- Nadpis sekce: A pak?
- Headline: Průběžná spolupráce
- Popis: Navazuje na kterýkoliv balíček — nebo funguje samostatně. Rozsah a cenu řešíme individuálně.

4 karty:
1. **Copywriting** — LinkedIn posty, webové texty, newslettery v tone of voice vaší značky.
2. **Slide decky** — Pitch decky, sales decky, interní prezentace. Struktura i vizuál.
3. **Instagram** — Vizuální obsah, carousely, stories. Konzistentní brand na sítích.
4. **Podcasty & video** — Zpracování epizod, reelsy, krátká videa. Od nahrávky k obsahu.

### Footer
- © 2026 Jakub Skupin
- LinkedIn odkaz: https://www.linkedin.com/in/jakubskupin/
