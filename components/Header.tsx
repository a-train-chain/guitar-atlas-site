import Link from "next/link";

const nav = [
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/download", label: "Download" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-cream/10 bg-brand-dark/85 backdrop-blur supports-[backdrop-filter]:bg-brand-dark/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-brand-cream hover:text-brand-secondary transition-colors"
        >
          Guitar Atlas
        </Link>
        <nav className="flex items-center gap-8 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-brand-cream/75 hover:text-brand-cream transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
