import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GrainOverlay from "@/components/motion/GrainOverlay";
import Hero from "@/components/home/Hero";
import SystemStrip from "@/components/home/SystemStrip";
import WorkCards from "@/components/home/WorkCards";
import Testimonials from "@/components/home/Testimonials";
import XFactor from "@/components/home/XFactor";
import Pricing from "@/components/home/Pricing";
import OngoingServices from "@/components/home/OngoingServices";
import ForWho from "@/components/home/ForWho";
import ClosingCTA from "@/components/home/ClosingCTA";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <Hero />
      <SystemStrip />
      <WorkCards />
      <Testimonials />
      <ForWho />
      <XFactor />
      <Pricing />
      <OngoingServices />
      <ClosingCTA />
      <Footer />
    </>
  );
}
