import { createVar, style } from "@vanilla-extract/css";

export const borderColor = createVar();

export const label = style({
  fontSize: "1.6rem",
  fontWeight: "500",
  color: "var(--Black)",
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
});
