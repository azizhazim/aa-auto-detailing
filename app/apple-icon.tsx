import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #C5E4F0 0%, #89CFF0 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 22,
            right: 22,
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #F89B82 0%, #F26C4F 100%)",
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#0B2545",
            letterSpacing: -6,
            display: "flex",
            lineHeight: 1,
          }}
        >
          AA
        </div>
      </div>
    ),
    { ...size }
  );
}
