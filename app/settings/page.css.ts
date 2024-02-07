import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "0 1.6rem 1.6rem",
});

export const listContainer = style({
  padding: "2.3rem 0",

  display: "flex",
  flexDirection: "column",
});

export const logout = style({
  color: "#c2c2c2",
  fontSize: "1.4rem",
  fontWeight: "600",

  cursor: "pointer",
});
