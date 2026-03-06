"use client";

import { useEffect, useState } from "react";
import { LINKEDIN_URL } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-lg py-4"
          : "py-7"
      }`}
    >
      <div className="mx-auto flex max-w-[960px] items-center justify-between px-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-heading text-lg font-bold tracking-tight"
        >
          Jakub Skupin
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-5 py-2 text-sm font-medium text-text-secondary transition-all duration-250 hover:border-text hover:text-text"
        >
          Spolupráce ↗
        </a>
      </div>
    </nav>
  );
}
