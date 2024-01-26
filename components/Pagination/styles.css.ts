import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const ul = style({
  display: "flex",
  gap: "2rem",
  alignItems: "center",
});

export const li = style({
  width: "4rem",
  height: "4rem",
});

export const button = style({
  width: "100%",
  height: "100%",
  backgroundColor: "lightgray",
  borderRadius: "50%",
});

export const activeButton = style({
  backgroundColor: "black",
});
