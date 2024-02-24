import { style } from "@vanilla-extract/css";

export const text = style({
  margin: "2rem 1.6rem",
  color: "var(--Gray72)",
  fontSize: "1.6rem",
  fontWeight: "600",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
    },
  },
});
