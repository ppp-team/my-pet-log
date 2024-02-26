import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: "3.6rem 0",
  "@media": {
    "screen and (min-width: 744px)": {
      padding: "6rem 0",
    },
  },
});
