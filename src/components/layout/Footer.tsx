import { LINKEDIN_URL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[960px] px-6 mb-10 flex items-center justify-between border-t border-border py-12">
      <p className="text-[13px] text-text-tertiary">© {new Date().getFullYear()} Jakub Skupin</p>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[13px] font-semibold text-text"
      >
        {"LinkedIn \u2197\uFE0E"}
      </a>
    </footer>
  );
}
