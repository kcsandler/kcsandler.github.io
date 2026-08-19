import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Kurshan Casilen — Computer Science graduate and software developer focused on AI, data, and full-stack systems";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F6F3EE",
          color: "#1C1B19",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#8C4A2F",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Software · AI · data
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1.05 }}>
            Kurshan Casilen
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 32,
              color: "#5C5854",
            }}
          >
            Computer Science graduate · AI, NLP, and full-stack software
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
