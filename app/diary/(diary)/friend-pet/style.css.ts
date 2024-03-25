import { style } from "@vanilla-extract/css";

export const profileInfo = style({
  margin: "2rem 2rem 1rem",
  display: "flex",
  justifyItems: "center",
  alignItems: "center",
  gap: "1.2rem",
});

export const text = style({
  fontSize: "1.4rem",
  fontWeight: "600",
});

export const image = style({
  width: "100%",
  height: "35rem",

  backgroundSize: "cover",
  backgroundPosition: "center",
});
