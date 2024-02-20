import { style } from "@vanilla-extract/css";

export const container = style({
  paddingTop: "18.1rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.8rem",
});

export const title = style({
  color: "var(--Black)",
  fontSize: "2rem",
  fontWeight: "600",
});

export const description = style({
  width: "24.9rem",

  textAlign: "center",
  color: "var(--Gray81)",
  fontSize: "1.6rem",
  fontWeight: "500",
});
