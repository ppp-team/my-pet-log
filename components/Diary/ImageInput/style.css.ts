import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
});
export const container = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",

  width: "100%",
  height: "100%",

  marginTop: "0.8rem",
  marginBottom: "0.5rem",
});

export const input = style({
  width: "7rem",
  height: "7rem",

  backgroundColor: "var(--LightOrange)",

  position: "relative",

  cursor: "pointer",

  borderRadius: "7px",
});

export const disabledInput = style({
  cursor: "not-allowed",
});

export const preview = style({
  width: "30%",
  maxWidth: "7rem",
  minHeight: "7rem",

  backgroundColor: "#f5f5f5d9",
  backgroundSize: "cover",
  position: "relative",
  backgroundPosition: "center",

  borderRadius: "7px",
});

export const addIcon = style({
  color: "#FF8743",
  width: "2rem",
  height: "2rem",

  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
});

export const closeIcon = style({
  width: "2rem",
  height: "2rem",

  color: "#FF8743",

  position: "absolute",
  right: "-0.8rem",
  top: "-0.8rem",

  cursor: "pointer",
});

export const p = style({
  color: "gray",
  fontSize: "0.8rem",
});

export const label = style({
  fontSize: "1.2rem",
  fontWeight: "600",
});

export const error = style({
  width: "20rem",
  height: "15rem",

  padding: "2rem",

  backgroundColor: "white",

  borderRadius: "7px",
});
