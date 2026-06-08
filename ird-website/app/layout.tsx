import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inland Revenue Division | Solomon Islands",
  description:
    "The Solomon Islands Inland Revenue Division — collecting more than 60% of government revenue to fund healthcare, education, law and order, and infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans bg-white text-on-surface antialiased`}>
        {children}
      </body>
    </html>
  );
}
