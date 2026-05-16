import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guitaratlas.app"),
  title: {
    default: "Guitar Atlas — Your map for learning guitar",
    template: "%s · Guitar Atlas",
  },
  description:
    "Guitar Atlas turns the fretboard into a map. Learn scales, chords, and pieces with an integrated practice system that grows with you.",
  openGraph: {
    title: "Guitar Atlas — Your map for learning guitar",
    description:
      "Learn scales, chords, and pieces with an integrated practice system that grows with you.",
    url: "https://guitaratlas.app",
    siteName: "Guitar Atlas",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-dark text-brand-cream">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
