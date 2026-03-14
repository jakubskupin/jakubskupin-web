import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GrainOverlay from "@/components/motion/GrainOverlay";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
