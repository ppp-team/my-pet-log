import { style } from "@vanilla-extract/css";

export const form = style({
  width: "52rem",
  display: "flex",
  flexDirection: "column",
  rowGap: "1.6rem",
  color: "black",
});

export const buttonWrapper = style({
  marginTop: "2rem",
  marginBottom: "2.4rem",
});

export const container = style({
  marginTop: "5rem",
  padding: "2rem",

  display: "flex",
  justifyContent: "center",
});
