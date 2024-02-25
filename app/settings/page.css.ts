import { style } from "@vanilla-extract/css";

export const text = style({
  margin: "2rem 1.6rem",
  color: "var(--Gray72)",
  fontSize: "1.6rem",
  fontWeight: "600",

  "@media": {
    "screen and (min-width: 744px)": {
      maxWidth: "45rem",
      fontSize: "2rem",
      margin: "4.4rem auto 2.1rem",
    },
  },
});

export const listcontainer = style({
  padding: "2.3rem 0",
  display: "flex",
  flexDirection: "column",

  "@media": {
    "screen and (min-width: 744px)": {
      padding: "3.2rem 0",
    },
  },
});
