import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
  justifyContent: "center",
  alignItems: "center",

  height: "100vh",
});

export const p = style({
  color: "#C2C2C2",
  textAlign: "center",
  fontWeight: "500",
  fontSize: "1.6rem",
});

export const button = style({
  width: "6rem",
  height: "6rem",

  backgroundColor: "var(--MainOrange)",

  position: "relative",

  borderRadius: "50%",
  boxShadow: "2px 4px 4px rgba(122, 122, 122, 0.25)",
});

export const addIcon = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
});
