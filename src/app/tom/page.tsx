import type { Metadata } from "next";
import TomLanding from "@/components/tom/TomLanding";

export const metadata: Metadata = {
  title: "Pro Toma · Jakub Skupin",
  description:
    "Ukázky founder-led obsahu a náčrt přemýšlení o pen.dev. Neveřejná stránka pro Toma Krchu.",
  robots: { index: false, follow: false },
};

export default function TomPage() {
  return (
    <main id="main">
      <TomLanding />
    </main>
  );
}
