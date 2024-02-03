import { style } from "@vanilla-extract/css";

export const container = style({
  marginTop: "2rem",
  padding: "2rem",

  display: "flex",
  justifyContent: "center",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",

  minWidth: "35.8rem",
});

export const input = style({
  height: "4.5rem",
  width: "100%",
  fontSize: "1.6rem",

  margin: "0.6rem 0",
  padding: "0.8rem 1rem",

  borderRadius: "10px",
  border: "1.5px solid #E2E2E2",

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
  fontSize: "1.2rem",
  fontWeight: "500",
  color: "#818181",
});

export const label = style({
  fontSize: "1.6rem",
  fontWeight: "600",
});

export const button = style({
  height: "4.5rem",

  padding: "1rem",

  fontSize: "1.6rem",
  fontWeight: "600",
  color: "white",

  backgroundColor: "var(--MainOrange)",

  borderRadius: "30px",
});

export const error = style({
  color: "red",
  fontSize: "1.1rem",
  fontWeight: "500",
});
