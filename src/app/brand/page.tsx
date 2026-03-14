import type { Metadata } from "next";
import BrandManual from "@/components/brand/BrandManual";

export const metadata: Metadata = {
  title: "Brand manuál — Jakub Skupin",
  robots: { index: false, follow: false },
};

export default function BrandPage() {
  return <BrandManual />;
}
