import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "10px auto 25px ",
});

export const wrapper = style({
  display: "flex",
  justifyContent: "center",
  margin: "10px auto 25px ",
  width: "251px",
  height: "335px",
  backgroundColor: "lightgrey",
  borderRadius: "10px",
});

export const titleSection = style({
  color: "var(--Black)",
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: "600",
  lineHeight: "2.4rem",
});

export const scriptSection = style({
  margin: "2.4rem auto 3.4rem auto",

  color: "var(--Gray81)",
  textAlign: "center",
  fontSize: "15px",
  fontWeight: "400",
  lineHeight: "20px",
});

export const textArea = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "10px auto 25px ",
});
