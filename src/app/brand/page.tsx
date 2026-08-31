import type { Metadata } from "next";
import BrandManual from "@/components/brand/BrandManual";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Brand manuál — Jakub Skupin",
  robots: { index: false, follow: false },
};

export default function BrandPage() {
  return (
    <>
      <BrandManual />
      <Footer />
    </>
  );
}
