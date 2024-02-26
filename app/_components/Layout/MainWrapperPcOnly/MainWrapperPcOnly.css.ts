import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  justifyContent: "center",
  "@media": {
    "screen and (min-width: 744px)": {},
    "screen and (min-width: 1024px)": {
      paddingTop: "8rem",
      paddingBottom: "0",
      // display: "flex",
      // justifyContent: "center",
    },
  },
});
