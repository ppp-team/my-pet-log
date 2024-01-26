import { style } from "@vanilla-extract/css";

export const container = style({
  marginTop: "5rem",
  padding: "2rem",

  display: "flex",
  justifyContent: "center",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  minWidth: "20rem",
});
