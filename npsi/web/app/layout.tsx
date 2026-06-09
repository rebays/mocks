import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
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
    <html lang="en" className={roboto.variable}>
      <body className="bg-white min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
