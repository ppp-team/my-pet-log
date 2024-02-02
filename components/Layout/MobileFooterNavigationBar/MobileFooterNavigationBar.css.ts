import { style } from "@vanilla-extract/css";

export const footer = style({
  position: "fixed",
  bottom: "0",
});

export const nav = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  justifyItems: "center",
  alignItems: "center",
  width: "100vw",
  height: "6.3rem",
  backgroundColor: "white",
});

export const link = style({
  height: "6.3rem",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});
