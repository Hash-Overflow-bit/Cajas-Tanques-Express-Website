import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Cajas & Tanques Express: envío de cajas y tanques a República Dominicana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Share card for WhatsApp, Facebook and Google. Built once at deploy time. */
export default async function OpengraphImage() {
  const van = await readFile(join(process.cwd(), "public/cajas-tanques-express-van-transparent.png"));
  const vanSrc = `data:image/png;base64,${van.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #071a3c 0%, #0b3b85 100%)",
          color: "white",
          padding: "56px 64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 620 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, color: "#a5f3fc", fontWeight: 700 }}>Envíos puerta a puerta a República Dominicana</div>
            <div style={{ fontSize: 84, fontWeight: 900, lineHeight: 1, marginTop: 24 }}>CAJAS &amp; TANQUES</div>
            <div style={{ fontSize: 84, fontWeight: 900, lineHeight: 1, color: "#7dd3fc" }}>EXPRESS</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 30 }}>
            <div style={{ display: "flex" }}>Recogida en Yonkers, Westchester y Connecticut</div>
            <div
              style={{
                display: "flex",
                marginTop: 18,
                background: "white",
                color: "#0b2d66",
                borderRadius: 999,
                padding: "12px 28px",
                fontWeight: 800,
                alignSelf: "flex-start",
              }}
            >
              Reserve con solo $10 · (914) 510-7716
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={vanSrc} width={520} alt="" style={{ objectFit: "contain" }} />
        </div>
      </div>
    ),
    size,
  );
}
