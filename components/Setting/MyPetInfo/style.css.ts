import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
});

export const profile = style({
  width: "7rem",
  height: "7rem",
  minWidth: "7rem",
  minHeight: "7rem",

  marginRight: "2rem",

  borderRadius: "50px",
  backgroundSize: "contain",
});

export const info = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",
});
