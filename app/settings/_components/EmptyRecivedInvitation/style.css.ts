import { style } from "@vanilla-extract/css";

export const container = style({
  paddingTop: "13.2rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.8rem",
});

export const title = style({
  marginTop: "1.8rem",

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

export const button = style({
  width: "18.6rem",
  height: "4.5rem",

  marginTop: "1.8rem",

  borderRadius: "30px",
  background: "var(--MainOrange)",

  textAlign: "center",
  lineHeight: "4.5rem",
  color: "var(--White)",
  fontSize: "1.6rem",
  fontWeight: "600",
});
