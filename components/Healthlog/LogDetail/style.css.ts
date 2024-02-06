import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: "2rem",

  backgroundColor: "var(--MainOrange)",
  borderRadius: "10px",

  fontSize: "1.6rem",
  color: "var(--White)",
});

export const wrapper = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export const editButton = style({
  padding: "0.4rem 1.1rem",

  borderRadius: "5px",

  backgroundColor: "#FFE1D0",
  color: "var(--MainOrange)",
  fontSize: "1.2rem",
  fontWeight: "600",
});
