import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";


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
  metadataBase: new URL("https://central-orbit.com"),
  title: {
    default: "Central Orbit | Global Commercial Gateway",
    template: "%s | Central Orbit",
  },
  description:
    "Central Orbit helps established international companies build customers, sales channels and revenue in China and Latin America. Market entry strategy, commercial advisory, and business development across LATAM and China.",
  keywords: [
    "China sales",
    "China market entry",
    "China distributor strategy",
    "China business development",
    "China commercial advisory",
    "Latin America market entry",
    "doing business in LATAM",
    "doing business in Latin America",
    "Uruguay business development",
    "Montevideo market entry",
    "Brazil market entry",
    "Argentina market entry",
    "market entry strategy",
    "distributor partnerships",
    "international business growth",
    "commercial advisory",
  ],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://central-orbit.com",
    title: "Central Orbit | Global Commercial Gateway",
    description:
      "Market entry strategy and commercial advisory for China and Latin America. 27 years of experience helping international companies build customers and revenue.",
    siteName: "Central Orbit",
    images: [
      {
        url: "https://central-orbit.com/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Central Orbit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Central Orbit | Global Commercial Gateway",
    description:
      "Market entry strategy and commercial advisory for China and Latin America",
    creator: "@CentralOrbit",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://central-orbit.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Global Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Central Orbit",
              url: "https://central-orbit.com",
              logo: "https://central-orbit.com/favicon.svg",
              description:
                "Commercial advisory and execution for international companies building customers, channels and revenue in China and Latin America.",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress:
                    "17th Floor, Building A, Tsinghua Tongfang Hi-Tech Plaza",
                  addressLocality: "Beijing",
                  postalCode: "100083",
                  addressCountry: "CN",
                  name: "Beijing Office",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Bv. España 1087",
                  addressLocality: "Montevideo",
                  addressRegion: "Montevideo",
                  postalCode: "11800",
                  addressCountry: "UY",
                  name: "Montevideo Office",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Business Development",
                email: "info@central-orbit.com",
              },
              sameAs: ["https://central-orbit.com"],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} bg-background text-text font-body`}
      >
        <SiteShell>
        {children}
        </SiteShell>
      </body>
    </html>
  );
}
