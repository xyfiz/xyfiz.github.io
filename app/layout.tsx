import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kanav Miglani — Engineer · PM · Trader · Frontend Dev",
  description:
    "BTech Engineer at IIT Ropar. Product Manager. Intraday Trader. Frontend Developer. JEE Mains 99.76 percentile — AIR #3717.",
  keywords: ["Kanav Miglani", "IIT Ropar", "Product Manager", "JEE", "Frontend Developer"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-void text-snow antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
