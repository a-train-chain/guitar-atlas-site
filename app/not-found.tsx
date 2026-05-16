import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-body text-sm uppercase tracking-[0.25em] text-brand-secondary">
        404
      </p>
      <h1 className="mt-3 text-5xl font-semibold leading-tight text-brand-cream sm:text-6xl">
        Off the map.
      </h1>
      <p className="mt-5 text-lg text-brand-cream/80">
        That page doesn&apos;t exist. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-brand-primary px-6 py-3 font-body text-sm font-semibold tracking-wide text-brand-cream shadow-lg shadow-brand-primary/30 transition hover:bg-brand-primary/90"
      >
        Back home
      </Link>
    </section>
  );
}
