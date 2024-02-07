import { style } from "@vanilla-extract/css";

export const container = style({
  marginTop: "0.6rem",

  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const checked = style({
  fontSize: "1.1rem",
  fontWeight: "500",
  color: "var(--Green)",
});
