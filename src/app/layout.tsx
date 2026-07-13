import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

// [INIT]: Google Fonts declarative initialization
const fontSyne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
});

const fontJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600"],
});

const fontSpaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "D`cafee | Specialty Decaf Coffee Roasters",
  description: "Great coffee. Safe heart. Sweet dreams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* [STYLE]: Injecting global font variables into the document root */}
      <body
        className={`${fontSyne.variable} ${fontJakarta.variable} ${fontSpaceMono.variable} antialiased bg-brand-cream`}
      >
        {children}
      </body>
    </html>
  );
}
