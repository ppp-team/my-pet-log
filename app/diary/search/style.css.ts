import { style } from "@vanilla-extract/css";

export const search = style({
  width: "100%",
  height: "4rem",

  borderRadius: "20px",
  border: "none",
  background: "var(--GrayE8)",

  padding: "0.8rem 1rem",
});

export const searchIcon = style({
  position: "absolute",

  right: "1rem",
  top: "50%",
  transform: "translate(-50%,-50%)",
});
