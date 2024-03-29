import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
  minHeight: "15rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",

  fontSize: "1.6rem",
  fontWeight: "500",
  color: "gray",
});
