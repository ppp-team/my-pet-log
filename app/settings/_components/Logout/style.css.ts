import { style } from "@vanilla-extract/css";

export const text = style({
  width: "100%",
  color: "var(--GrayC2)",
  fontSize: "1.4rem",
  fontWeight: "600",
  cursor: "pointer",
  maxWidth: "45rem",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "1.6rem",
      margin: "0 auto",
    },
  },
});
