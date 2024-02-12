import { style } from "@vanilla-extract/css";

export const form = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  rowGap: "0.8rem",
  color: "var(--Black)",
});

export const buttonWrapper = style({
  marginTop: "2rem",
  marginBottom: "3.2rem",
});

export const container = style({
  width: "100%",

  display: "flex",
  justifyContent: "center",
});
