import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import SystemStrip from "@/components/home/SystemStrip";
import WorkCards from "@/components/home/WorkCards";
import Testimonials from "@/components/home/Testimonials";
import XFactor from "@/components/home/XFactor";
import Pricing from "@/components/home/Pricing";
import OngoingServices from "@/components/home/OngoingServices";
import ForWho from "@/components/home/ForWho";
import ClosingCTA from "@/components/home/ClosingCTA";
import WebIsDead from "@/components/home/WebIsDead";
import AboutMe from "@/components/home/AboutMe";

export const metadata: Metadata = {
  title: "X-Factor Sprint — Jakub Skupin",
  description:
    "Pojmenuju, čím jste výjimeční. A dám tomu tvar. Positioning, messaging, vizuální směr a web do 2 pracovních dní.",
};

export default function PersonalBrandPage() {
  return (
    <main id="main">
      <Hero />
      <SystemStrip />
      <WorkCards />
      <Testimonials />
      <ForWho />
      <WebIsDead />
      <XFactor />
      <Pricing />
      <AboutMe />
      <OngoingServices />
      <ClosingCTA />
    </main>
  );
}
