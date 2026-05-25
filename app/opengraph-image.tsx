import { ImageResponse } from "next/og";

export const alt = "A&A Auto Detailing - Premium Car Detailing in Central Texas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0B2545 0%, #134074 60%, #0B2545 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 60,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #F89B82 0%, #F26C4F 100%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#A8D8EA",
              color: "#0B2545",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: 0,
            }}
          >
            AA
          </div>
          <div
            style={{
              color: "#B5C8D6",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Central Texas Premium Detailing
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 110,
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1,
              letterSpacing: 0,
              display: "flex",
            }}
          >
            A&amp;A <span style={{ color: "#F26C4F", marginLeft: 18, display: "flex" }}>Auto Detailing</span>
          </div>
          <div
            style={{
              fontSize: 38,
              color: "#8DA9C4",
              fontWeight: 600,
              display: "flex",
            }}
          >
            Renew Your Ride, Refresh Your Drive.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#B5C8D6",
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex" }}>Austin, Buda, Kyle, San Marcos</div>
          <div style={{ display: "flex" }}>anaautodetailing.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
