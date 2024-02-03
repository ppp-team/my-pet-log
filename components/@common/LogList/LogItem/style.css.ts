import { style } from "@vanilla-extract/css";

export const container = style({
  height: "6.6rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  margin: "0 1.6rem",
  gap: "0.5rem",

  fontSize: "1.2rem",

  borderBottom: "1px solid #c2c2c2",
});

export const leftPart = style({
  display: "flex",
  alignItems: "center",

  gap: "1.2rem",
});

export const taskAndTimeBox = style({
  display: "flex",
  flexDirection: "column",

  gap: "0.3rem",
});

export const checkStar = style({
  display: "flex",
  alignItems: "center",

  gap: "0.2rem",
});

export const taskName = style({
  fontSize: "1.6rem",
});

export const time = style({
  color: "#c2c2c2",
});

export const manager = style({
  padding: "0.4rem 0.8rem",

  borderRadius: "5px",

  backgroundColor: "#FFE1D0",
  color: "#FF8743",
});
