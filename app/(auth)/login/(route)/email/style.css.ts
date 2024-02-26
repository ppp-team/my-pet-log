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
  marginTop: "2rem",
  fontSize: "1.6rem",
  fontWeight: 700,
  textAlign: "center",
});

export const imgWrapper = style({
  margin: "7.3rem 0 4.8rem 0",
});
