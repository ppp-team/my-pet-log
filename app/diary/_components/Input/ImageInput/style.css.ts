import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
});

export const container = style({
  display: "flex",
  alignItems: "center",

  gap: "1rem",

  width: "100%",
  height: "11.3rem",

  overflowX: "auto",
  overflowY: "hidden",

  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const input = style({
  width: "10rem",
  height: "10rem",

  flexShrink: 0,

  backgroundColor: "var(--LightOrange)",

  position: "relative",

  cursor: "pointer",

  borderRadius: "10px",
});

export const disabledInput = style({
  cursor: "not-allowed",
});

export const preview = style({
  width: "10rem",
  minHeight: "10rem",

  backgroundSize: "cover",
  position: "relative",
  backgroundPosition: "center",

  borderRadius: "10px",
});

export const addIcon = style({
  color: "var(--MainOrange)",
  width: "2.4rem",
  height: "2.4rem",

  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
});

export const closeIcon = style({
  width: "2.3rem",
  height: "2.3rem",

  color: "var(--MainOrange)",

  position: "absolute",
  right: "-0.8rem",
  top: "-0.8rem",

  cursor: "pointer",
});

export const p = style({
  color: "var(--Gray81)",
  fontSize: "1.2rem",
  fontWeight: "500",
});

export const label = style({
  fontSize: "1.6rem",
  fontWeight: "600",
});

export const error = style({
  width: "20rem",
  height: "15rem",

  padding: "2rem",

  backgroundColor: "var(--White)",

  borderRadius: "7px",
});
