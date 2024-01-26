import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",

  marginTop: "5rem",
});

export const petList = style({ display: "flex", flexDirection: "column", gap: "0.5rem" });

export const plusButton = style({ borderRadius: "10px", backgroundColor: "#d2d8fb", padding: "1rem 2rem", cursor: "pointer" });

export const container = style({
  borderRadius: "10px",
  backgroundColor: "#d2d8fb",
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  padding: "1rem 2rem",

  cursor: "pointer",
});

export const profile = style({
  width: "4rem",
  height: "4rem",

  borderRadius: "44px",

  // backgroundImage:`url("")`,
  backgroundSize: "contain",
});
