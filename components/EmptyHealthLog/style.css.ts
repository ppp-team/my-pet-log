import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "20rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",

  fontSize: "1.6rem",
  fontWeight: "700",
  color: "gray",
});

export const plusButton = style({
  width: "5rem",
  height: "5rem",

  border: "none",
  borderRadius: "100%",

  backgroundColor: "lightgray",
});
