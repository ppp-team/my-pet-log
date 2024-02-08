import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "5rem",

  padding: "4.8rem",
});

export const h3 = style({
  fontSize: "1.6rem",
  fontWeight: "700",
  textAlign: "center",
});

export const p = style({
  color: "var(--Gray81)",
  fontSize: "1.6rem",
  textDecorationLine: "underline",

  cursor: "pointer",
});
export const petList = style({ display: "flex", flexDirection: "column", gap: "1rem" });

export const addButton = style({ backgroundColor: "var(--MainOrange)", borderRadius: "50%", width: "3.3rem", height: "3.3rem", position: "relative" });

export const container = style({
  minWidth: "29.4rem",
  height: "11.2rem",

  display: "flex",
  alignItems: "center",
  gap: "1.3rem",

  borderRadius: "10px",

  backgroundColor: "var(--LightOrange)",

  padding: "1rem 2rem",

  cursor: "pointer",

  boxShadow: " 0px 2px 4px 2px rgba(164, 164, 164, 0.25)",
});

export const profile = style({
  minWidth: "8rem",
  height: "8rem",

  borderRadius: "50%",
  border: "2px solid var(--MainOrange)",

  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const text = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});
