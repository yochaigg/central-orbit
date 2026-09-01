import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Central Orbit | Global Commercial Gateway",
    template: "%s | Central Orbit",
  },
  description:
    "Central Orbit helps established international companies build customers, sales channels and revenue in China and Latin America.",
  keywords: [
    "China sales",
    "China market entry",
    "China distributor strategy",
    "China business development",
    "China commercial advisory",
    "Latin America market entry",
    "Uruguay business development",
    "market entry strategy",
    "distributor partnerships",
    "international business growth",
  ],
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
