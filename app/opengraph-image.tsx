import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

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
          background: "#080b14",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(212,164,55,0.2), transparent)",
        }}
      >
        <div style={{ fontSize: 32, color: "#d4a437", fontWeight: 600, display: "flex" }}>
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 56,
            color: "#f0f1f5",
            fontWeight: 600,
            maxWidth: 900,
            lineHeight: 1.15,
            display: "flex",
          }}
        >
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    size
  );
}
