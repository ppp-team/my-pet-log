import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  gap: "1rem",
});

export const wrapper = style({
  width: "7rem",
  height: "7rem",

  backgroundColor: "#f5f5f5d9",
  backgroundSize: "cover",
  position: "relative",
  backgroundPosition: "center",

  borderRadius: "6px",
});

export const input = style({
  width: "100%",
  height: "100%",

  position: "absolute",
  cursor: "pointer",
  opacity: 0,
  zIndex: 1,
});

export const closeIcon = style({
  width: "2rem",
  height: "2rem",

  position: "absolute",
  right: "-0.8rem",
  top: "-0.8rem",

  cursor: "pointer",
});
