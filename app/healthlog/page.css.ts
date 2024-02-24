import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",

  marginTop: "2.4rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "screen and (min-width: 744px)": {
      padding: "0 14.7rem",
    },
  },
});

export const title = style({
  margin: "0 auto",

  fontSize: "1.6rem",
  fontWeight: "700",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
    },
  },
});
