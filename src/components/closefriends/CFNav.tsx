"use client";

import { useEffect, useRef, useState } from "react";
import { LINKEDIN_URL } from "@/lib/data";

// Varianta navbaru pro /closefriends: zůstává viditelná po celou dobu
// scrollování a nese černé CTA. Sdílený Navbar se při scrollu dolů skrývá.
export default function CFNav() {
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const next = scrolledRef.current ? y > 20 : y > 40;
      if (next !== scrolledRef.current) {
        scrolledRef.current = next;
        setScrolled(next);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 py-4 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[960px] items-center justify-between px-6">
        <a href="/" className="font-heading text-lg font-bold tracking-tight">
          Jakub Skupin
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-text px-5 py-2 text-sm font-bold text-bg transition-all duration-250 hover:opacity-85"
        >
          {"Spolu na kafe ↗︎"}
        </a>
      </div>
    </nav>
  );
}
