export default function Footer() {
  return (
    <footer className="mx-auto max-w-[960px] px-6 mb-10 flex items-center justify-center border-t border-border py-12">
      <p className="text-[13px] text-text-tertiary">© {new Date().getFullYear()} Jakub Skupin</p>
    </footer>
  );
}
