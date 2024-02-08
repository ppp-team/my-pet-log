import { style } from "@vanilla-extract/css";

export const inputBox = style({
  width: "100%",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.8rem",
});

export const label = style({
  color: "#333",
  fontSize: "1.6rem",
});

export const styledInput = style({
  width: "100%",
  height: "5rem",
  padding: "1.5rem 1.6rem",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  borderRadius: "0.8rem",
  border: "1px solid #d9d9d9",
  background: "#ffffff",
  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: "#0070f3",
    },
    "&.error": {
      borderColor: "#ff0000",
    },
    "&:disabled": {
      color: "#9f9f9f",
      cursor: "default",
    },
  },
});

export const error = style({
  color: "#ff0000",
  fontSize: "1.4rem",
});

export const inputContainer = style({
  position: "relative",
  display: "flex",
});
