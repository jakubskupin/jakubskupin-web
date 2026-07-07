import type { Metadata } from "next";
import CloseFriendsLanding from "@/components/closefriends/CloseFriendsLanding";

export const metadata: Metadata = {
  title: "Pro Close Friends · Jakub Skupin",
  description:
    "Plug & work. Kapacita na obsah, kterou připojíte, když ji potřebujete. End-to-end, bez náboru a bez fixních nákladů. Pro Close Friends.",
  robots: { index: false, follow: false },
};

export default function CloseFriendsPage() {
  return (
    <main id="main">
      <CloseFriendsLanding />
    </main>
  );
}
