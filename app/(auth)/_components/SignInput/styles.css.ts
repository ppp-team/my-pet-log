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

export const emailInput = style([
  styledInput,
  {
    padding: "1.3rem 15rem 1.3rem 1.6rem",
  },
]);

export const error = style({
  border: "1.5px solid var(--Red)",
  fontSize: "1.6rem",
});

export const emailContainer = style({
  position: "relative",
  width: "100%",
});

export const emailVerifyRequestButton = style({
  position: "absolute",
  right: "0.9rem",
  top: "calc(50% + 0.3rem)",
  transform: "translateY(-50%)",

  padding: "0.8rem 0.9rem",

  borderRadius: "5px",

  backgroundColor: "var(--LightOrange)",
  color: "var(--MainOrange)",

  selectors: {
    "&:disabled": {
      border: "none",
      backgroundColor: "var(--GrayB1)",
      color: "white",
      cursor: "default",
    },
  },
});

export const emailCodeVerifyButton = style([
  emailVerifyRequestButton,
  {
    top: "50%",
  },
]);
