import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A1A18",
          borderRadius: 14,
        }}
      >
        <span
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#FAFAF8",
            letterSpacing: "-0.04em",
            fontFamily: "sans-serif",
          }}
        >
          JS
        </span>
      </div>
    ),
    { ...size }
  );
}
