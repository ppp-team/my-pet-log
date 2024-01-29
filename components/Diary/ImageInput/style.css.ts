import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",

  width: "100%",
  height: "100%",
});

export const wrapper = style({
  minWidth: "30%",
  minHeight: "7rem",

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

export const p = style({
  color: "gray",
  fontSize: "0.8rem",
});

export const label = style({
  fontSize: "1.2rem",
  fontWeight: "600",
});

export const error = style({
  width: "20rem",
  height: "15rem",

  padding: "2rem",

  backgroundColor: "white",

  borderRadius: "7px",
});
