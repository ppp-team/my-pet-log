import { style } from "@vanilla-extract/css";

export const container = style({
  width: "28rem",
  height: "16.4rem",

  padding: "2rem",

  position: "relative",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "#fff",
  borderRadius: "5px",
});

export const closeButton = style({
  position: "absolute",
  top: 0,
  right: 0,
});

export const text = style({
  textAlign: "center",
  fontSize: "16px",
  fontWeight: 400,
});

export const checkButton = style({
  width: "22.3rem",
  height: "3rem",

  backgroundColor: "#ddd",
});
