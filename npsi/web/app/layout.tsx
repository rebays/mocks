import type { Metadata } from "next";
import { Source_Sans_3, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--font-sans-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "National Parliament of Solomon Islands",
    template: "%s | National Parliament of Solomon Islands",
  },
  description:
    "The official website of the National Parliament of Solomon Islands — the supreme legislative body of the nation.",
  keywords: ["Solomon Islands", "Parliament", "Legislation", "Democracy", "Pacific"],
  openGraph: {
    title: "National Parliament of Solomon Islands",
    description: "The supreme legislative body of the nation.",
    locale: "en_SB",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${playfair.variable}`}>
      <body className="bg-white min-h-screen flex flex-col font-[family-name:var(--font-sans-body)]">
        <Header />
        <main id="main-content" className="flex-1 pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
