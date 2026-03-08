import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Jakub Skupin — Pojmenuju, čím jste výjimeční";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const fontsDir = join(process.cwd(), "src/app/fonts");
  const [syne, manropeBold, manropeSemibold] = await Promise.all([
    readFile(join(fontsDir, "Syne-Bold.woff")),
    readFile(join(fontsDir, "Manrope-Bold.woff")),
    readFile(join(fontsDir, "Manrope-SemiBold.woff")),
  ]);

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
          backgroundColor: "#FAFAF8",
        }}
      >
        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Syne",
              fontSize: 56,
              fontWeight: 700,
              color: "#1A1A18",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              maxWidth: 850,
            }}
          >
            To nejlepší na vás je to, co považujete za samozřejmé.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div
              style={{
                fontFamily: "Manrope",
                fontSize: 22,
                fontWeight: 700,
                color: "#1A1A18",
              }}
            >
              Jakub Skupin
            </div>
            <div
              style={{
                fontFamily: "Manrope",
                fontSize: 13,
                fontWeight: 600,
                color: "#ADABA5",
                letterSpacing: "0.06em",
              }}
            >
              PERSONAL BRAND × AI × MARKETING
            </div>
          </div>
          <div
            style={{
              fontFamily: "Manrope",
              fontSize: 14,
              fontWeight: 600,
              color: "#ADABA5",
            }}
          >
            jakubskupin.cz
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Syne", data: syne, weight: 700, style: "normal" as const },
        {
          name: "Manrope",
          data: manropeBold,
          weight: 700,
          style: "normal" as const,
        },
        {
          name: "Manrope",
          data: manropeSemibold,
          weight: 600,
          style: "normal" as const,
        },
      ],
    }
  );
}
