import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* Plus Jakarta Sans is loaded for the hero H1 only. */
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simplifyne, We build around your business growth.",
  description:
    "From websites and applications to AI-powered workflows and search growth, we build digital solutions around your business and its growth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      {/* The header is transparent and shares the hero's blue field, so the
          brand colour is carried by the document background as well. */}
      <body className="flex min-h-full flex-col bg-brand font-sans">
        {children}
      </body>
    </html>
  );
}
