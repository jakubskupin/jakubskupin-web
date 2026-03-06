import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { CaseStudy } from "@/lib/types";
import martinVymetal from "@/content/work/martin-vymetal";
import simrani from "@/content/work/simrani";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GrainOverlay from "@/components/motion/GrainOverlay";
import CaseStudyContent from "@/components/work/CaseStudyContent";

const caseStudies: Record<string, CaseStudy> = {
  "martin-vymetal": martinVymetal,
  simrani: simrani,
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) return {};
  return {
    title: `${cs.title} — Jakub Skupin`,
    description: cs.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) notFound();

  const slugs = Object.keys(caseStudies);
  const currentIndex = slugs.indexOf(slug);
  const nextSlug = slugs[(currentIndex + 1) % slugs.length];
  const nextCs = caseStudies[nextSlug];

  return (
    <>
      <GrainOverlay />
      <Navbar />
      <CaseStudyContent cs={cs} nextCs={nextCs} nextSlug={nextSlug} />
      <Footer />
    </>
  );
}
