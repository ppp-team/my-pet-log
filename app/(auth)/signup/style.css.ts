import { style } from "@vanilla-extract/css";

export const container = style({
  margin: " 0 auto",
  maxWidth: "74.3rem",
  padding: "0 1.6rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const title = style({
  margin: "2rem auto 2.4rem",
  fontSize: "1.6rem",
  fontWeight: 700,
  textAlign: "center",
});

export const p = style({
  margin: "0 auto",
  fontSize: "1.6rem",
  fontWeight: "500",
  textAlign: "center",
});

export const link = style({
  paddingLeft: "1rem",

  color: "var(--MainOrange)",
  textDecoration: "underLine",
  fontWeight: "700",
  letterSpacing: "0.2px",
});
