import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Guitar Atlas privacy policy: what we collect, how we use it, third-party services, AI features, and account deletion.",
};

export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <header className="border-b border-brand-cream/15 pb-8">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-cream/60">
          Guitar Atlas · Last updated July 16, 2026
        </p>
        <h1 className="mt-3 text-5xl font-semibold leading-tight text-brand-cream">
          Privacy Policy
        </h1>
      </header>

      <div className="prose-content space-y-12 text-brand-cream/85">
        <Section title="Overview">
          <p>
            Guitar Atlas helps users learn guitar and pedal steel, organize
            repertoire, track practice, save curriculum items, and use
            AI-assisted music theory support.
          </p>
        </Section>

        <Section title="Information We Collect">
          <p>Guitar Atlas may collect the following information when you use the app:</p>
          <ul>
            <li>Account information, such as email address and profile details you choose to provide.</li>
            <li>
              User-created learning content, such as pieces, notes, saved
              scales, saved chords, saved curriculum content, practice sessions,
              playlists, course progress, and studio-related learning data.
            </li>
            <li>Chat content you send to Atlas Chat and contextual learning data needed to answer your music-related questions.</li>
            <li>Media or file uploads you choose to add to your account.</li>
            <li>
              Purchase and subscription status for Atlas Pro (plan, renewal
              state, and expiry), so the app knows what to unlock. Payment
              details such as card numbers are handled entirely by the payment
              processors listed below and never reach our servers.
            </li>
            <li>App diagnostics and crash data when crash reporting is enabled.</li>
          </ul>
        </Section>

        <Section title="How We Use Information">
          <p>We use this information to:</p>
          <ul>
            <li>Provide account access and sync your saved learning data.</li>
            <li>Show your pieces, library items, curriculum progress, practice history, and studio content.</li>
            <li>Generate AI-assisted music theory and practice responses in Atlas Chat.</li>
            <li>Improve app reliability, diagnose crashes, and fix bugs.</li>
            <li>Maintain app security and prevent abuse.</li>
          </ul>
        </Section>

        <Section title="AI Features">
          <p>
            Atlas Chat may use your message and relevant saved learning context
            to answer music-related questions. This may include pieces you are
            working on, saved scales and chords, curriculum progress, practice
            history, and archived learning items.
          </p>
          <p>
            Do not include sensitive personal information in chat messages. AI
            responses may be inaccurate and should be treated as learning
            assistance, not professional advice.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p>Guitar Atlas uses third-party services to operate app features. These may include:</p>
          <ul>
            <li>Supabase for authentication, database, storage, and Edge Functions.</li>
            <li>Sentry for crash reporting and diagnostics.</li>
            <li>AI model providers for Atlas Chat and music analysis features.</li>
            <li>Music metadata, video, and media API providers for song discovery and enrichment features.</li>
            <li>
              RevenueCat for Atlas Pro subscription management (receives your
              account id and purchase events so your subscription unlocks
              across devices and apps).
            </li>
            <li>Apple App Store for purchases made in the iOS and macOS apps.</li>
            <li>
              Stripe for purchases made on the web (your card details go
              directly to Stripe and are never visible to us).
            </li>
          </ul>
          <p>Third-party services process data according to their own terms and privacy policies.</p>
        </Section>

        <Section title="Account Deletion">
          <p>
            You can request account deletion from inside the app. Deleting your
            account removes your account and associated saved Guitar Atlas data
            from the production backend, subject to legally required retention,
            backups, and operational logs.
          </p>
        </Section>

        <Section title="Data Security">
          <p>
            We use reasonable technical measures to protect user data, including
            authenticated access and backend authorization rules. No system can
            be guaranteed completely secure.
          </p>
        </Section>

        <Section title="Children">
          <p>
            Guitar Atlas is not intended for children under 13. Do not use the
            app if you are under 13.
          </p>
        </Section>
      </div>

      <div className="mt-16 rounded-lg border-l-2 border-brand-primary bg-brand-primary/5 p-6">
        <p className="font-semibold text-brand-cream">Contact</p>
        <p className="mt-2 text-brand-cream/85">
          For privacy questions or account support, email{" "}
          <a
            href="mailto:privacy@guitaratlas.app"
            className="text-brand-primary hover:underline"
          >
            privacy@guitaratlas.app
          </a>
          .
        </p>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <span
        aria-hidden
        className="mb-4 block h-[3px] w-8 rounded bg-brand-primary"
      />
      <h2 className="font-display text-2xl font-bold text-brand-cream">{title}</h2>
      <div className="mt-4 space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul_li]:mb-2 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
