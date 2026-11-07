import { ImageResponse } from "next/og";
import { CLUSTERS, getArticle, getStaticSlugs } from "@/content/insights";

export const dynamic = "force-static";
export const alt = "Central Orbit Insights";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getStaticSlugs();
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  const title = a?.title ?? "Insights";
  const label = a ? CLUSTERS[a.cluster].label : "Insights";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ffffff",
          borderLeft: "24px solid #c57132",
        }}
      >
        <div style={{ fontSize: 30, color: "#c57132", textTransform: "uppercase", letterSpacing: 3 }}>
          {label}
        </div>
        <div style={{ fontSize: title.length > 80 ? 48 : 60, fontWeight: 700, color: "#2b5f9e", lineHeight: 1.15 }}>
          {title}
        </div>
        <div style={{ fontSize: 30, color: "#444444" }}>Central Orbit | Insights</div>
      </div>
    ),
    size,
  );
}
