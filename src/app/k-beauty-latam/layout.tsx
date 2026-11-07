import type { Metadata } from "next";

const title = "Is Your K-Beauty Brand Ready for LATAM?";
const description = "Eight practical questions about selling skincare in Latin America. Test your market knowledge and discover your next steps.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.central-orbit.com/k-beauty-latam" },
  openGraph: {
    title, description, type: "website",
    url: "https://www.central-orbit.com/k-beauty-latam",
    images: [{ url: "/images/k-beauty-latam-quiz.png", alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/k-beauty-latam-quiz.png"] },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>
    {children}
  </>;
}
