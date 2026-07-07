import Footer from "@/components/layout/Footer";
import GrainOverlay from "@/components/motion/GrainOverlay";
import CFNav from "@/components/closefriends/CFNav";

// Vlastní layout: sticky navbar s černým CTA, který zůstává viditelný
// po celou dobu scrollování (na rozdíl od sdíleného Navbaru, který se skrývá).
export default function CloseFriendsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GrainOverlay />
      <CFNav />
      {children}
      <Footer />
    </>
  );
}
