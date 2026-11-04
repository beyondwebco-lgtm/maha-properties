import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#141414",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          border: "1.5px solid #D4AF37",
        }}
      >
        <span
          style={{
            color: "#D4AF37",
            fontWeight: 900,
            fontFamily: "serif",
          }}
        >
          M
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}

