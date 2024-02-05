import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: "2rem",

  backgroundColor: "orange",
  borderRadius: "10px",

  fontSize: "1.6rem",
  color: "white",
});

export const wrapper = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export const editButton = style({
  width: "8rem",
  padding: "0.4rem 1.2rem",

  backgroundColor: "#FFE1D0",
  color: "orange",

  borderRadius: "5px",
});
