import { style } from "@vanilla-extract/css";

export const profile = style({
  width: "7rem",
  height: "7rem",
  minWidth: "7rem",
  minHeight: "7rem",

  marginLeft: "0.6rem",
  marginRight: "1.7rem",

  borderRadius: "50px",
  backgroundSize: "contain",
});

export const Container = style({
  marginRight: "0.6rem",

  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",
});
