import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Textil Sonderegger — Stoffe, Vorhänge & Polster in Bregenz",
  description:
    "Textil Sonderegger in Bregenz: Ihr Spezialist für hochwertige Textilien, maßgefertigte Vorhänge, Gardinen, Sonnenschutz und Polsterstoffe. Beratung, Vermessung und Montage inklusive.",
  keywords:
    "Textilien Bregenz, Vorhänge, Gardinen, Polsterstoffe, Sonnenschutz, Maßanfertigung, Bregenz, Vorarlberg",
  openGraph: {
    title: "Textil Sonderegger Bregenz",
    description: "Stoffe, Vorhänge & Polster in Bregenz — Maßanfertigung vom Profi",
    images: [
      {
        url: '/og?name=Textil%20Sonderegger&tagline=Stoffe%20%C2%B7%20Vorh%C3%A4nge%20%C2%B7%20Polster&color=%23B8860B',
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "de_AT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Textil Sonderegger Bregenz",
    description: "Stoffe, Vorhänge & Polster in Bregenz — Maßanfertigung vom Profi",
    images: ['/og'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
