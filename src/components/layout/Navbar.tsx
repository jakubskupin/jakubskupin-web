"use client";

import { useEffect, useRef, useState } from "react";
import { LINKEDIN_URL } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const scrolledRef = useRef(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // Background blur
      const next = scrolledRef.current ? y > 20 : y > 40;
      if (next !== scrolledRef.current) {
        scrolledRef.current = next;
        setScrolled(next);
      }

      // Show/hide based on scroll direction
      const delta = y - lastY.current;
      if (y < 100) {
        // Near top — always show
        setVisible(true);
      } else if (delta < -5) {
        // Scrolling up
        setVisible(true);
      } else if (delta > 10) {
        // Scrolling down (larger threshold to avoid jitter)
        setVisible(false);
      }

      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 py-4 transition-[background-color,border-color,backdrop-filter,transform,opacity] duration-500 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      } ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
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
          {"Spolupráce \u2197\uFE0E"}
        </a>
      </div>
    </nav>
  );
}
