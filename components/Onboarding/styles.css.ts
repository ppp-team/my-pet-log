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

export const textArea = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "10px auto 25px ",
});

export const buttonWrapper = style({
  width: "100%",
});

export const nextButton = style({
  padding: "0.9rem 0",
  borderRadius: "10px",
  backgroundColor: "#FF8743",
  fontSize: "1.6rem",
  fontWeight: "600",
  textAlign: "center",
  color: "var(--GrayF2)",
});
