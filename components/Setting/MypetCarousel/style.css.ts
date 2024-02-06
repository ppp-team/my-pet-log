import { style } from "@vanilla-extract/css";

export const title = style({
  margin: "0 1.6rem 2rem",

  color: "#727272",
  fontSize: "1.6rem",
  fontWeight: "600",
});

export const container = style({
  width: "100%",
  height: "100%",

  padding: "2rem",

  display: "flex",
  alignItems: "center",
  gap: "1rem",

  borderRadius: "10px",
  fontSize: "18px",
});
