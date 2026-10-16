import Script from "next/script";
import type { Metadata } from "next";
import styles from "./guides.module.css";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  keywords: [],
  openGraph: { title: "China Skincare Guides | Central Orbit", description: "Practical field guides for online B2C skincare sales in China.", url: "https://www.central-orbit.com/china-skincare-guides/", images: [] },
  twitter: { card: "summary", title: "China Skincare Guides", description: "Practical field guides for online B2C skincare sales in China.", images: [] },
};
export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <><Script src="https://cloud.umami.is/script.js" data-website-id="59cc10e2-2ec1-45b9-a0da-46e14c6dc601" strategy="afterInteractive" /><div className={styles.editorial}><a className={styles.skip} href="#guide-content">Skip to content</a>{children}<footer className={styles.footer}><span>Yochai Golan <span aria-hidden="true">|</span> Central Orbit</span><a href="mailto:info@central-orbit.com">info@central-orbit.com â†—</a></footer></div></>;
}
