import type { Metadata } from "next";
import ContentPartnerLP from "@/components/landing/ContentPartnerLP";

export const metadata: Metadata = {
  title: "Obsahový partner — Jakub Skupin",
  description:
    "Váš obsahový partner. Ne copywriter. Ne agentura. Sparring partner pro tvůrce a CEO od 35 000 Kč/měsíc.",
};

export default function ContentPartnerPage() {
  return <ContentPartnerLP />;
}
