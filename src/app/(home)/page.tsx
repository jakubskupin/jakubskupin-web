import type { Metadata } from "next";
import HomeRozcestnik from "@/components/home/HomeRozcestnik";

export const metadata: Metadata = {
  title: "Jakub Skupin — Personal brand × AI × Marketing",
  description:
    "Pojmenuju, čím jste výjimeční — a dám tomu tvar. Strategie, web a obsah pro experty, kteří mají co říct, ale online to není vidět.",
};

export default function HomePage() {
  return <HomeRozcestnik />;
}
