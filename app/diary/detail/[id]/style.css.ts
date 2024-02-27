import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const diaryDetail = style({
  width: "100%",

  "@media": {
    "(min-width: 745px) and  (max-width: 1023px)": {
      maxWidth: "50rem",
    },
  },
});
