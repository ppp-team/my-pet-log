import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
});

export const itemWrapper = style({
  marginTop: "0.6rem",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

export const checked = style({
  marginLeft: "0.6rem",
  fontSize: "1.4rem",
  fontWeight: "500",
  color: "var(--Gray81)",
});

export const active = style({
  color: "var(--MainOrange)",
});
