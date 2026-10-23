import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Central Orbit | Global Commercial Gateway";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          borderLeft: "24px solid #c57132",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 700, color: "#2b5f9e" }}>
          Central Orbit
        </div>
        <div style={{ fontSize: 40, color: "#444444", marginTop: 24 }}>
          Global Commercial Gateway
        </div>
        <div style={{ fontSize: 30, color: "#c57132", marginTop: 48 }}>
          Market entry and commercial advisory for China and Latin America
        </div>
      </div>
    ),
    size,
  );
}
