import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-cream/10 bg-brand-dark text-brand-cream/65">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl text-brand-cream">Guitar Atlas</p>
          <p className="mt-1 text-sm">Your map for learning guitar.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:flex sm:gap-8">
          <Link href="/features" className="hover:text-brand-cream">
            Features
          </Link>
          <Link href="/about" className="hover:text-brand-cream">
            About
          </Link>
          <Link href="/download" className="hover:text-brand-cream">
            Download
          </Link>
          <Link href="/contact" className="hover:text-brand-cream">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-brand-cream">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-brand-cream">
            Terms
          </Link>
        </div>
      </div>
      <div className="border-t border-brand-cream/5">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-brand-cream/45">
          © {new Date().getFullYear()} Guitar Atlas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
