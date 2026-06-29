import type { Metadata } from "next";
import CloseFriendsLanding from "@/components/closefriends/CloseFriendsLanding";

export const metadata: Metadata = {
  title: "Pro Close Friends — Jakub Skupin",
  description:
    "Vrstva konceptu a positioningu, kterou tým nepřidá produkčníma rukama. Úhel nahoře, fit na příjem dole. Pro Close Friends a MÚPI.",
  robots: { index: false, follow: false },
};

export default function CloseFriendsPage() {
  return (
    <main id="main">
      <CloseFriendsLanding />
    </main>
  );
}
