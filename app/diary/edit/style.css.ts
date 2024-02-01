import { style } from "@vanilla-extract/css";

export const container = style({
  marginTop: "5rem",
  padding: "2rem",

  display: "flex",
  justifyContent: "center",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",

  minWidth: "20rem",
});

export const input = style({
  height: "3rem",
  width: "100%",
  fontSize: "1rem",

  marginTop: "0.8rem",
  marginBottom: "0.5rem",
  padding: "0.8rem 1rem",

  borderRadius: "8px",
  border: "1px solid #d9d9d9",

  ":focus": {
    outline: "none",
    border: "1px solid orange",
  },
});

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
});

export const p = style({
  fontSize: "0.8rem",
  color: "gray",
});

export const label = style({
  fontSize: "1.2rem",
  fontWeight: "600",
});

export const button = style({
  padding: "1rem",

  fontSize: "1.4rem",
  fontWeight: "500",
  color: "white",

  backgroundColor: "var(--MainOrange)",

  borderRadius: "8px",
});

export const error = style({
  color: "red",
  fontSize: "0.8rem",
});
