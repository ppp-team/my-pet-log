import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginTop: "0.6rem",
});

export const icon = style({
  width: "1.2rem",
  height: "1.2rem",
});

export const confirm = style({
  fontSize: "1.1rem",
  fontWeight: "500",
  color: "var(--Green)",
});
