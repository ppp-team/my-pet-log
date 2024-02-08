import { style } from "@vanilla-extract/css";

export const codeContainer = style({
  width: "100%",

  padding: "1.5rem 1.2rem",

  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",

  borderRadius: "10px",
  background: "var(--LightOrange)",
});

export const copyContainer = style({
  width: "100%",
  height: "4.5rem",

  padding: "0.8rem 1rem 0.8rem 1.8rem",
  marginTop: "0.8rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  borderRadius: "10px",
  backgroundColor: "var(--White)",
  border: "1.5px solid var(--GrayE2)",
});

export const copyIcon = style({
  height: "100%",

  padding: "0 0.6rem",

  display: "flex",
  alignItems: "center",
  gap: "0.4rem",

  borderRadius: "5px",
  border: "1.5px solid var(--GrayE2)",

  color: "var(--GrayC2)",
});
