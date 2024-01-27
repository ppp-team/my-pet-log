import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "100%",
  height: "100%",

  position: "fixed",
  top: "0",
  left: "0",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: "10", //추후 수정
});

export const container = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
});
