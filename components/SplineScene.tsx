"use client";

/**
 * Mountain Spline scene used on the homepage + login page of the Flutter app.
 * Embedded via iframe so we don't need the splinecode URL — matches what the
 * app does in `homepage_widget.dart` and `login_page_widget.dart`.
 *
 * The scene is interactive (mouse/touch) and renders as a full-bleed background
 * behind the hero copy. `pointer-events-none` on the wrapper would disable
 * interactivity — we leave it on so visitors can scroll/pan the mountains.
 */
export default function SplineScene({ className = "" }: { className?: string }) {
  return (
    <iframe
      title="Guitar Atlas mountains"
      src="https://my.spline.design/untitled-e699f557753025a6e24130a5fce138a7/"
      className={`pointer-events-none absolute inset-0 h-full w-full border-0 ${className}`}
      allow="autoplay; fullscreen; xr-spatial-tracking"
      loading="eager"
    />
  );
}
