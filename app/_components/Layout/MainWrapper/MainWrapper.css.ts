import { style } from "@vanilla-extract/css";

export const wrapper = style({
  paddingTop: "5.6rem",
  paddingBottom: "6.3rem",
  "@media": {
    "screen and (min-width: 744px)": {},
    "screen and (min-width: 1024px)": {
      paddingTop: "8rem",
      paddingBottom: "0",
    },
  },
});
