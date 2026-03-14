import type { Metadata } from "next";
import ResearchSprintLP from "@/components/landing/ResearchSprintLP";

export const metadata: Metadata = {
  title: "Research Sprint — Jakub Skupin",
  description:
    "Hloubková rešerše za dny, ne týdny. AI analýza + 15 let zkušeností pro firmy, agentury i freelancery.",
};

export default function ResearchSprintPage() {
  return <ResearchSprintLP />;
}
