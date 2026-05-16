import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Guitar Atlas is built by a guitarist and teacher who wanted one app that did all of it.",
};

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-body text-sm uppercase tracking-[0.25em] text-brand-secondary">
        About
      </p>
      <h1 className="mt-3 text-5xl font-semibold leading-tight text-brand-cream sm:text-6xl">
        One app that does all of&nbsp;it.
      </h1>

      <div className="mt-12 space-y-6 text-lg leading-relaxed text-brand-cream/85">
        <p>
          Guitar Atlas started with a frustration most guitar students share:
          to actually learn something, you end up juggling a stack of apps.
          One for tabs, one for chords, one for theory, one for sheet music,
          one for tracking practice, one for the songs you&apos;re trying to
          play. Nothing knows about anything else.
        </p>
        <p>
          The goal here is simple: <span className="text-brand-cream">one
          place</span> for the whole picture. Scales that connect to the chords
          they live inside. Pieces that auto-detect their key and surface the
          right scale to practice over them. A practice timer that knows what
          you&apos;ve been working on and reminds you to review the thing you
          almost have memorized.
        </p>
        <p>
          The app is built around the idea of a <em>map</em>. The fretboard is
          a map. A piece is a path through the map. A practice routine is the
          journey. Everything you do leaves a trail on it.
        </p>
        <p>
          Guitar Atlas is also a studio. If you teach guitar, you can run your
          students through the same app — assign work, track progress, write
          notes that show up in their practice sessions. The same tool, both
          sides of the lesson.
        </p>
      </div>

      <div className="mt-16 rounded-2xl border border-brand-cream/15 bg-brand-dark-2/40 p-8">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-brand-secondary">
          Built for
        </p>
        <p className="mt-3 font-display text-2xl leading-snug text-brand-cream">
          Self-taught players who want a real map of the neck. Teachers who
          want to run a studio without juggling Google Docs and YouTube
          playlists. Anyone who&apos;s tired of starting and stopping.
        </p>
      </div>
    </section>
  );
}
