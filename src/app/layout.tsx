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
  title: "Parturi Vefa",
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
        <meta name="description" content={metadata.description ?? ""} />
        <meta name="keywords" content="parturi, hiustenleikkaus, parranleikkaus, Espoo, Suurpelto, ammattitaito, ystävällinen, parran ajo" />
        <meta name="author" content="Parturi Vefa" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        <meta property="og:title" content={String(metadata.title) ?? ""} />
        <meta property="og:description" content={metadata.description ?? ""} />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://oma-domain.com" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#181818]`}
      >
        {children}
      </body>
    </html>
  );
}