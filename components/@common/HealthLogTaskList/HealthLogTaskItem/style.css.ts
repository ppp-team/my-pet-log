import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "6rem",

  display: "flex",
  alignItems: "center",
  paddingLeft: "1rem",
  gap: "0.5rem",

  backgroundColor: "lightgray",

  fontSize: "1.6rem",
});
