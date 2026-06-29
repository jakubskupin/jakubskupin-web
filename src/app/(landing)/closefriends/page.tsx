import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CloseFriendsLanding from "@/components/closefriends/CloseFriendsLanding";

export const metadata: Metadata = {
  title: "Pro Close Friends — Jakub Skupin",
  description:
    "Vrstva konceptu a positioningu, kterou tým nepřidá produkčníma rukama. Úhel nahoře, fit na příjem dole. Pro Close Friends a MÚPI.",
  robots: { index: false, follow: false },
};

// Prototyp: na veřejném webu (produkční build) nedostupný, jen pro lokální vývoj.
// Až bude hotový, smazat tenhle guard.
const PUBLIC = process.env.NODE_ENV !== "production";

export default function CloseFriendsPage() {
  if (!PUBLIC) notFound();
  return (
    <main id="main">
      <CloseFriendsLanding />
    </main>
  );
}
