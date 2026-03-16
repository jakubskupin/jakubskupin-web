"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function AboutMe() {
  return (
    <section className="mx-auto max-w-[960px] border-t border-border px-6 py-[72px] sm:py-[100px]">
      <motion.div
        className="grid gap-6 sm:grid-cols-[240px_1fr] sm:gap-12"
        {...fadeUp}
      >
        <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-text-tertiary pt-1">
          Kdo za tím stojí
        </div>
        <div className="max-w-[520px]">
          <h2 className="mb-4 font-heading text-[1.6rem] font-bold tracking-[-0.02em]">
            Jakub Skupin
          </h2>
          <p className="mb-4 text-[15px] leading-[1.7] text-text-secondary">
            Celý profesní život propojuju světy — marketing, strategii, výzkum,
            technologie. Nejsem specialista na jedno. Jsem ten, kdo vidí spojení
            mezi všemi a&nbsp;<strong className="font-medium text-text">zhmotní je do&nbsp;věci, která funguje.</strong>
          </p>
          <p className="mb-4 text-[15px] leading-[1.7] text-text-secondary">
            Pracuju s&nbsp;AI jako s&nbsp;nástrojem, ne jako s&nbsp;náhražkou
            myšlení. Moje síla není v&nbsp;promptech — je v&nbsp;tom, že vím,{" "}
            <strong className="font-medium text-text">co se ptát a&nbsp;kam to vede.</strong>
          </p>
          <p className="text-[15px] leading-[1.7] text-text-secondary">
            Miluju ten moment, kdy z&nbsp;chaosu informací najednou
            vykrystalizuje tvar. Kdy klient řekne:{" "}
            <strong className="font-medium text-text">
              „Tak tohle jsem nevěděl, že potřebuju."
            </strong>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
