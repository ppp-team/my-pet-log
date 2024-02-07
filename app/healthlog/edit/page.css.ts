import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100vw",
  height: "100vh",

  padding: "7rem 1.6rem 8.3rem 1.6rem",

  display: "flex",
  flexDirection: "column",

  overflow: "auto",
});

export const formItems = style({
  display: "flex",
  flexDirection: "column",

  gap: "1rem",

  fontSize: "1.6rem",
  fontWeight: "600",
});

export const inputWrapper = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",

  gap: "1rem",
});

export const buttonGroup = style({
  display: "flex",
  justifyContent: "space-between",

  gap: "0.8rem",
});

export const typeButton = style({
  width: "100%",
  height: "8rem",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "1rem",

  borderRadius: "10px",
  backgroundColor: "var(--GrayF2)",
  color: "var(--Gray81)",
  fontWeight: "600",
  border: "none",
  outline: "none",
  cursor: "pointer",
});

export const typeButtonSelected = style({
  backgroundColor: "var(--MainOrange)",
  color: "var(--White)",
});

export const addIcon = style({
  width: "1.6rem",
  height: "1.6rem",

  fill: "var(--GrayC2)",
});

export const addIconSelected = style({
  width: "1.6rem",
  height: "1.6rem",

  fill: "var(--White)",
});

export const submitButton = style({
  width: "100%",
  height: "4.5rem",

  borderRadius: "50px",
  backgroundColor: "var(--MainOrange)",

  fontSize: "1.6rem",
  fontWeight: "600",
  color: "var(--White)",
});
