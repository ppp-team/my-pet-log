import { style } from "@vanilla-extract/css";

export const form = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  rowGap: "0.8rem",
  color: "black",
});

export const buttonWrapper = style({
  marginTop: "2rem",
  marginBottom: "3.2rem",
});

export const container = style({
  width: "100%",
  // marginTop: "5rem",
  // padding: "2rem",

  display: "flex",
  justifyContent: "center",
});
