import { style } from "@vanilla-extract/css";

export const backDropContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  width: "100vw",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
});

export const modalContainer = style({
  width: "30vw",
  height: "30%",
  backgroundColor: "white",
});
