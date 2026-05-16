import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore what Guitar Atlas does: the Fretboard Map, integrated practice sessions, an Atlas curriculum of scales and chords, and a teacher studio.",
};

const features = [
  {
    section: "The Fretboard Map",
    blurb:
      "Every scale, every position, every key — laid out across the neck and connected.",
    items: [
      {
        title: "CAGED + 3NPS + Open Position",
        body: "Authored scale systems for the way different players actually think — pick the lens that matches your style.",
      },
      {
        title: "Movable shapes that transpose",
        body: "Pick a key, see the same shape relocate. Major and relative-minor view in one tap.",
      },
      {
        title: "Modes built in",
        body: "Melodic minor, harmonic minor, modal scales — with the correct mode names per position (Lydian Augmented, Dorian ♭2, …) where the theory actually demands it.",
      },
      {
        title: "Chord & arpeggio companions",
        body: "Forty-four chord qualities with correct enharmonic spelling. Arpeggio systems share the movable-shape engine.",
      },
    ],
  },
  {
    section: "Pieces & Songs",
    blurb:
      "Add any song from Spotify or YouTube and Guitar Atlas pulls together the resources for you to learn it.",
    items: [
      {
        title: "Auto-detected key & tempo",
        body: "Music Metrics integration determines key, BPM, and time signature so you can start practicing immediately.",
      },
      {
        title: "Curated tutorial videos",
        body: "Top tutorial picks alongside the official music video — flip between them without leaving the piece.",
      },
      {
        title: "Sheet music + notes + chords",
        body: "Upload PDFs, build chord charts with the integrated chord creator, and write practice notes that stick to the piece.",
      },
      {
        title: "Playlists",
        body: "Long-press to add pieces to playlists — sets, gigs, lessons, woodshedding.",
      },
    ],
  },
  {
    section: "Practice",
    blurb:
      "A practice system built around real habits, not just a metronome.",
    items: [
      {
        title: "Multi-domain sessions",
        body: "Mix pieces, fretboard map, theory, and sight reading into one session. Set how long you want on each.",
      },
      {
        title: "Spaced repetition",
        body: "Items move through a 1 → 3 → 7 → 14 → 30 → 60 → 90 day review cadence. The app reminds you when something's due.",
      },
      {
        title: "Progress wheel",
        body: "Watch the wheel fill in across all four domains as you go. A clear visual of where you've put your time.",
      },
      {
        title: "Practice history",
        body: "Every session is logged. See what you practiced, for how long, and what content you opened.",
      },
    ],
  },
  {
    section: "The Studio (for teachers)",
    blurb:
      "Run a private studio out of the same app your students use.",
    items: [
      {
        title: "Assignments",
        body: "Multi-item assignments with due dates and practice goals. Auto-shares the content with the student's library.",
      },
      {
        title: "Per-student dashboard",
        body: "See attendance, time-on-task, recent content opened, and goal progress at a glance.",
      },
      {
        title: "Monthly reports",
        body: "Generate parent-friendly summaries of a student's month — attendance, sessions, time spent.",
      },
      {
        title: "Curriculum & courses",
        body: "Build your own curriculum or assign from the Atlas library of scales, chords, and arpeggios.",
      },
    ],
  },
  {
    section: "Atlas Chat",
    blurb:
      "A music tutor built into the app — knows your pieces, your practice history, and music theory.",
    items: [
      {
        title: "Context-aware",
        body: "Ask about a specific piece you have, and it answers using that piece's key, tempo, and your notes.",
      },
      {
        title: "Theory + practice combined",
        body: "Get scale suggestions for soloing over a chord change, or a quick refresher on a mode you forgot.",
      },
      {
        title: "Your data only",
        body: "Atlas Chat only reads from your library and your practice history. Never writes anything without you asking.",
      },
    ],
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <header className="mb-20 max-w-3xl">
        <p className="font-body text-sm uppercase tracking-[0.25em] text-brand-secondary">
          Features
        </p>
        <h1 className="mt-3 text-5xl font-semibold leading-tight text-brand-cream sm:text-6xl">
          Built for how guitar actually&nbsp;works.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-brand-cream/80">
          Most apps teach one thing well — scales, or tabs, or theory. Guitar
          Atlas connects them so you stop bouncing between five tabs to learn
          one song.
        </p>
      </header>

      <div className="space-y-24">
        {features.map((f) => (
          <div key={f.section}>
            <div className="border-b border-brand-cream/15 pb-6">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-brand-secondary">
                {f.section}
              </p>
              <p className="mt-3 max-w-2xl font-display text-2xl leading-snug text-brand-cream">
                {f.blurb}
              </p>
            </div>
            <ul className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {f.items.map((item) => (
                <li key={item.title}>
                  <h3 className="text-xl font-semibold text-brand-cream">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-brand-cream/75">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
