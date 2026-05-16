import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Guitar Atlas is launching soon on iPhone, iPad, Mac, and the web. Join the waitlist for a TestFlight invite.",
};

export default function Download() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="font-body text-sm uppercase tracking-[0.25em] text-brand-secondary">
        Download
      </p>
      <h1 className="mt-3 text-5xl font-semibold leading-tight text-brand-cream sm:text-6xl">
        Coming soon.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-brand-cream/85">
        Guitar Atlas is in pre-launch on iPhone, iPad, and Mac, with web access
        right behind. Drop your email and we&apos;ll send a TestFlight invite
        as soon as it&apos;s ready.
      </p>

      <form
        action="mailto:hello@guitaratlas.app"
        method="post"
        encType="text/plain"
        className="mx-auto mt-12 flex max-w-md flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          name="email"
          placeholder="you@email.com"
          required
          className="flex-1 rounded-full border border-brand-cream/30 bg-brand-dark-2/60 px-5 py-3 font-body text-sm text-brand-cream placeholder:text-brand-cream/40 outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
        />
        <button
          type="submit"
          className="rounded-full bg-brand-primary px-6 py-3 font-body text-sm font-semibold tracking-wide text-brand-cream shadow-lg shadow-brand-primary/30 transition hover:bg-brand-primary/90"
        >
          Join waitlist
        </button>
      </form>

      <p className="mt-4 text-xs text-brand-cream/45">
        We&apos;ll only email you about Guitar Atlas. No newsletters, no spam.
      </p>

      <div className="mt-20 grid gap-6 text-left sm:grid-cols-3">
        <PlatformCard
          name="iPhone & iPad"
          status="TestFlight invites coming soon"
        />
        <PlatformCard name="Mac" status="Available in TestFlight" />
        <PlatformCard name="Web" status="In development" />
      </div>
    </section>
  );
}

function PlatformCard({ name, status }: { name: string; status: string }) {
  return (
    <div className="rounded-2xl border border-brand-cream/15 bg-brand-dark-2/40 p-6">
      <p className="font-display text-xl text-brand-cream">{name}</p>
      <p className="mt-2 text-sm text-brand-cream/70">{status}</p>
    </div>
  );
}
