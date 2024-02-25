import { style } from "@vanilla-extract/css";

export const wrapper = style({
  "@media": {
    "screen and (min-width: 744px)": {},
    "screen and (min-width: 1024px)": {
      paddingTop: "8rem",
      paddingBottom: "0",
    },
  },
});
