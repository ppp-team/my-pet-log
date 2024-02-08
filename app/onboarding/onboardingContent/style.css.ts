import { style } from "@vanilla-extract/css";

export const container = style({
  margin: "1rem auto 2.5rem ",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const wrapper = style({
  width: "100%",
  margin: "0 auto",

  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
});

export const titleSection = style({
  padding: "3.4rem 0 2.4rem ",
  color: "var(--Black)",

  textAlign: "center",
  fontSize: "2rem",
  fontWeight: "600",
  lineHeight: "2.4rem",
});

export const scriptSection = style({
  margin: "0 auto",

  color: "var(--Gray81)",
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: "400",
  lineHeight: "2rem",
});

export const textArea = style({
  width: "100%",
  height: "13.2rem",
  margin: "1rem auto 2.5rem ",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
