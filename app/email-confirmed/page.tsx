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
        Your email is confirmed.
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-brand-cream/80">
        Welcome to Guitar Atlas. You can now open the app and sign in with your
        email and password.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="/download"
          className="rounded-full bg-brand-primary px-6 py-3 font-body text-sm font-semibold tracking-wide text-brand-cream shadow-lg shadow-brand-primary/30 transition hover:bg-brand-primary/90"
        >
          Open the app
        </a>
        <a
          href="/"
          className="rounded-full border border-brand-cream/40 px-6 py-3 font-body text-sm font-semibold tracking-wide text-brand-cream transition hover:border-brand-cream hover:bg-brand-cream/5"
        >
          Back to home
        </a>
      </div>
    </section>
  );
}
