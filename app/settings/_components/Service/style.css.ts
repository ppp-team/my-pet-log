import { style } from "@vanilla-extract/css";

export const title = style({
  fontSize: "1.6rem",
  fontWeight: "700",
});

export const titleWrapper = style({
  width: "100%",
  height: "6.7rem",

  position: "relative",

  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const IconWrapper = style({
  display: "flex",
  alignItems: "center",
});

export const Icon = style({
  position: "absolute",
  right: "1.5rem",

  cursor: "pointer",
});

export const mainWrapper = style({
  padding: "1rem",
  fontSize: "1.6rem",
});
