import { style } from "@vanilla-extract/css";

export const form = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  rowGap: "0.8rem",
  padding: "0 1.6rem",
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
