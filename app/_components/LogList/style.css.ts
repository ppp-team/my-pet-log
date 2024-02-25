import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100vw",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "45rem",
    },
  },
});

export const date = style({
  padding: "2.4rem 1.6rem 0 1.6rem",

  fontSize: "1.6rem",
  fontWeight: "500",
  color: "var(--Gray81)",
});
