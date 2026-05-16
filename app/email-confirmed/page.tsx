import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email confirmed",
  description: "Your Guitar Atlas account is verified.",
};

export default function EmailConfirmed() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-success/15 ring-1 ring-brand-success/40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-brand-success"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h1 className="text-4xl font-semibold leading-tight text-brand-cream sm:text-5xl">
        Your email is verified.
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-brand-cream/80">
        Thanks for confirming. Head back to Guitar Atlas — the verification
        banner will disappear next time you open the app.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="/"
          className="rounded-full bg-brand-primary px-6 py-3 font-body text-sm font-semibold tracking-wide text-brand-cream shadow-lg shadow-brand-primary/30 transition hover:bg-brand-primary/90"
        >
          Back to home
        </a>
      </div>
    </section>
  );
}
