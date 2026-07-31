import Footer from "@/components/layout/Footer";
import GrainOverlay from "@/components/motion/GrainOverlay";

// Bez navbaru: stránka je osobní dopis pro jednoho člověka,
// navigace na zbytek webu by odváděla pozornost.
export default function TomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GrainOverlay />
      {children}
      <Footer />
    </>
  );
}
