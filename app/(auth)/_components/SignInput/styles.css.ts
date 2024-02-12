// styles.css.ts

import { style } from "@vanilla-extract/css";

export const inputBox = style({
  width: "100%",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const label = style({
  color: "var(--Black)",
  fontSize: "1.6rem",
  fontWeight: 600,
});

export const styledInput = style({
  width: "100%",
  padding: "1.3rem 1.6rem",
  marginTop: "0.6rem",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  borderRadius: "0.8rem",
  border: "1.5px solid var(--GrayE2)",

  fontSize: "1.6rem",
  background: "var(--White)",
  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: "var(--MainOrange)",
    },
    "&.error": {
      borderColor: "var(--Red)",
    },
  },
});

export const error = style({
  border: "1.5px solid var(--Red)",
  fontSize: "1.6rem",
});

export const inputContainer = style({
  position: "relative",
  display: "flex",
  flexDirection: "row",
});
