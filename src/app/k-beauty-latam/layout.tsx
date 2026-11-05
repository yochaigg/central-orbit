import Script from "next/script";
import type { Metadata } from "next";

const title = "Is Your K-Beauty Brand Ready for LATAM?";
const description = "Eight practical questions about selling skincare in Latin America. Test your market knowledge and discover your next steps.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.central-orbit.com/k-beauty-latam/" },
  openGraph: {
    title, description, type: "website",
    url: "https://www.central-orbit.com/k-beauty-latam/",
    images: [{ url: "/images/k-beauty-latam-quiz.png", alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/k-beauty-latam-quiz.png"] },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>
    <Script src="https://cloud.umami.is/script.js" data-website-id="59cc10e2-2ec1-45b9-a0da-46e14c6dc601" strategy="afterInteractive" />
    {children}
  </>;
}
