import { createVar, style } from "@vanilla-extract/css";

export const borderColor = createVar();

export const label = style({
  fontSize: "1.6rem",
  fontWeight: "500",
  color: "var(--Black)",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
    },
  },
});

export const input = style({
  paddingTop: "1.1rem",
  paddingBottom: "1.1rem",
  borderBottom: `2px solid ${borderColor}`,
  backgroundColor: "transparent",
  fontSize: "1.6rem",
  fontWeight: "400",
  "::placeholder": {
    color: "var(--Gray9f)",
  },
  "@media": {
    "screen and (min-width: 744px)": { paddingTop: "2rem", paddingBottom: "1.4rem", fontSize: "2rem" },
  },
});
