import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "10rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
});

export const plusButton = style({
  width: "3rem",
  height: "3rem",

  border: "none",
  borderRadius: "100%",

  backgroundColor: "lightgray",
});
