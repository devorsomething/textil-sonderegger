import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Textil Sonderegger — Stoffe, Vorhänge & Polster in Bregenz",
  description:
    "Textil Sonderegger in Bregenz: Ihr Spezialist für hochwertige Textilien, maßgefertigte Vorhänge, Gardinen, Sonnenschutz und Polsterstoffe. Beratung, Vermessung und Montage inklusive.",
  keywords:
    "Textilien Bregenz, Vorhänge, Gardinen, Polsterstoffe, Sonnenschutz, Maßanfertigung, Bregenz, Vorarlberg",
  openGraph: {
    title: "Textil Sonderegger — Stoffe, Vorhänge & Polster in Bregenz",
    description:
      "Ihr Spezialist für hochwertige Textilien und maßgefertigte Vorhänge in Bregenz.",
    type: "website",
    locale: "de_AT",
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
