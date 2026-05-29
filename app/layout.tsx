import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NICEXPLAY EXTREME — Gaming & Esports LatAm",
  description: "Tu plataforma gaming de Latinoamérica. Noticias, esports, podcasts con IA, streamers y torneos de DOTA 2, VALORANT, CS2, Free Fire y más.",
  keywords: "gaming latam, esports peru, dota 2, valorant, cs2, free fire, fortnite, noticias gaming, torneos esports, streamers peru",
  authors: [{ name: "NICEXPLAY EXTREME" }],
  creator: "NICEXPLAY EXTREME",
  publisher: "NICEXPLAY EXTREME",
  metadataBase: new URL("https://nicexplay.lat"),
  openGraph: {
    title: "NICEXPLAY EXTREME — Gaming & Esports LatAm",
    description: "Tu plataforma gaming de Latinoamérica. Noticias, esports, podcasts con IA y torneos.",
    url: "https://nicexplay.lat",
    siteName: "NICEXPLAY EXTREME",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NICEXPLAY EXTREME — Gaming & Esports LatAm",
    description: "Tu plataforma gaming de Latinoamérica. Noticias, esports, podcasts con IA y torneos.",
    creator: "@nicexplay",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://nicexplay.lat",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FF2020" />
        <meta name="geo.region" content="PE" />
        <meta name="geo.country" content="Peru" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#0B0F1A' }}>
        {children}
      </body>
    </html>
  );
}