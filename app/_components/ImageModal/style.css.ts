import { style } from "@vanilla-extract/css";

export const container = style({
  width: "28rem",
  height: "38.3rem",

  padding: "3rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  backgroundColor: "var(--GrayF2)",
  borderRadius: "10px",
});

export const iconWrapper = style({
  width: "100%",

  display: "flex",
  justifyContent: "flex-end",
});

export const imageWrapper = style({
  display: "flex",
  alignItems: "center",
});

export const title = style({
  color: "var(--Black)",
  textAlign: "center",
  fontSize: "2rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
});

export const text = style({
  color: "var(--Gray81)",
  textAlign: "center",
  fontSize: "1.6rem",

  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});

export const button = style({
  width: "100%",

  padding: "0.9rem 0",

  color: "var(--GrayF2)",
  textAlign: "center",
  fontSize: "1.6rem",
  fontWeight: "600",
  backgroundColor: "var(--MainOrange)",
  borderRadius: "10px",
});
