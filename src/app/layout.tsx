import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turkkilainen parturi Vefa",
  description: "Hiusten ja parran leikkausta ystävällisellä ammattitaidolla Espoossa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <head>
        <title>{String(metadata.title) ?? ""}</title>
        <meta name="description" content={String(metadata.description) ?? ""} />
        <meta name="keywords" content="parturi, hiustenleikkaus, parranleikkaus, Espoo, Suurpelto, ammattitaito, ystävällinen, parran ajo" />
        <meta name="author" content="Turkkilainen parturi Vefa" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        <meta property="og:title" content={String(metadata.title) ?? ""} />
        <meta property="og:description" content={metadata.description ?? ""} />
        <meta property="og:url" content="https://www.turkkilainenparturivefa.fi/" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="rZftcnffDNAm3iD2Kh7IdxPFzbSi6YzTexjLQOxwNJM" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#181818]`}
      >
        {children}
      </body>
    </html>
  );
}