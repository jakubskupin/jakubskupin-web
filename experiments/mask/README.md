# Mask reveal — experimentální koncept

Interaktivní hero: split-door maska vepředu, za ní celá homepage
(Hero, Process, Services, ClosingCTA, Footer), kterou odkryješ „seškrábáním"
masky myší/dotykem. Po 150 pohybech se odemkne scroll. Debug mód: klávesa `D`.

**Bokem od živého webu** — `experiments/` je vyřazené z Next routingu
i z TypeScript buildu (`tsconfig.json` → `exclude`), takže nekomplikuje
ani nerozbíjí produkční web.

## Jak to oživit
1. Přesunout `page.tsx` zpět do `src/app/mask/page.tsx`.
2. Přesunout `MaskHero.tsx` do `src/components/home/MaskHero.tsx`
   a v `page.tsx` vrátit import na `@/components/home/MaskHero`.
3. Odebrat `experiments` z `exclude` v `tsconfig.json`.

Potřebné assety (už v `public/`): `maska.png`, `jakubskupin-hp-black.png`.
