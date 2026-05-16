import Link from "next/link";
import SplineScene from "@/components/SplineScene";

export default function Home() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        {/* Mountain Spline scene */}
        <div className="absolute inset-0 -z-10">
          <SplineScene />
          {/* Gradient to keep hero copy readable on top of the 3D scene */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-brand-dark/35 via-brand-dark/25 to-brand-dark"
          />
        </div>

        <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col items-start justify-center px-6 py-24 sm:py-32">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-brand-secondary">
            Guitar Atlas
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] text-brand-cream sm:text-6xl md:text-7xl">
            Your map for learning&nbsp;guitar.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-cream/85">
            Scales, chords, and the songs you love — laid out as one connected
            map of the fretboard. Practice with purpose, see your progress, and
            actually finish what you start.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/download"
              className="rounded-full bg-brand-primary px-6 py-3 font-body text-sm font-semibold tracking-wide text-brand-cream shadow-lg shadow-brand-primary/30 transition hover:bg-brand-primary/90"
            >
              Get the App
            </Link>
            <Link
              href="/features"
              className="rounded-full border border-brand-cream/40 px-6 py-3 font-body text-sm font-semibold tracking-wide text-brand-cream transition hover:border-brand-cream hover:bg-brand-cream/5"
            >
              Explore features
            </Link>
          </div>
        </div>
      </section>

      {/* ── Three pillars ──────────────────────────────────────────── */}
      <section className="border-t border-brand-cream/10 bg-brand-dark">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-3">
          <Pillar
            kicker="The Fretboard Map"
            title="See the whole neck."
            body="Every scale, every position, every key — connected. Move smoothly between CAGED shapes, three-note-per-string patterns, and modes without losing your place."
          />
          <Pillar
            kicker="Pieces & Chords"
            title="Learn real songs."
            body="Add any piece from Spotify or YouTube. Auto-detected key, tempo, and chord changes. Tutorial videos, sheet music, and your own notes — all in one tab."
          />
          <Pillar
            kicker="Practice"
            title="Make it stick."
            body="Build practice sessions across pieces, scales, theory, and sight reading. Spaced repetition reminds you when something needs review. Watch the wheel fill in."
          />
        </div>
      </section>

      {/* ── Built for teachers ─────────────────────────────────────── */}
      <section className="border-t border-brand-cream/10 bg-brand-dark-2/40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="font-body text-sm uppercase tracking-[0.25em] text-brand-tertiary">
              For Teachers
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-brand-cream sm:text-5xl">
              A studio that runs itself.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-cream/80">
              Assign pieces, scales, and courses to students with one tap. Track
              their progress in real time, leave notes that show up in their
              practice flow, and pull a monthly report when the parents ask.
            </p>
          </div>
          <ul className="space-y-5 text-brand-cream/85">
            <Bullet>Multi-item assignments with due dates and practice goals</Bullet>
            <Bullet>Per-student dashboards with attendance and time-on-task</Bullet>
            <Bullet>Built-in spaced-repetition review schedule</Bullet>
            <Bullet>Atlas curriculum: scales, chords, arpeggios — ready to assign</Bullet>
            <Bullet>Course builder with progressions, exercises, and right-hand drills</Bullet>
          </ul>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────── */}
      <section className="border-t border-brand-cream/10 bg-brand-dark">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-4xl font-semibold leading-tight text-brand-cream sm:text-5xl">
            Start mapping the fretboard.
          </h2>
          <p className="mt-5 text-lg text-brand-cream/80">
            Guitar Atlas is coming to iPhone, iPad, Mac, and the web. Join the
            waitlist and we&apos;ll send you a TestFlight invite the moment
            it&apos;s ready.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/download"
              className="rounded-full bg-brand-primary px-6 py-3 font-body text-sm font-semibold tracking-wide text-brand-cream shadow-lg shadow-brand-primary/30 transition hover:bg-brand-primary/90"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <p className="font-body text-xs uppercase tracking-[0.25em] text-brand-secondary">
        {kicker}
      </p>
      <h3 className="mt-3 text-2xl font-semibold leading-tight text-brand-cream">
        {title}
      </h3>
      <p className="mt-3 text-brand-cream/75 leading-relaxed">{body}</p>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden
        className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary"
      />
      <span>{children}</span>
    </li>
  );
}
