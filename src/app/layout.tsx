import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RCF UNILAG | The Chosen Generation",
  description:
    "We are RCF UNILAG, the campus fellowship of Christ the Redeemer's Ministry (RCCG). We are unapologetically Christ-centred, we carry a mandate to illuminate our world, from this campus to the world. We are the Chosen Generation."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="favicon" content="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}
      >
        <div>
          <header className="fixed top-0 left-0 w-full z-99">
            <Navigation />
          </header>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
