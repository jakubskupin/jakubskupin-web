import Footer from "@/components/layout/Footer";
import GrainOverlay from "@/components/motion/GrainOverlay";

export default function HomeLayout({
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
