import { style } from "@vanilla-extract/css";

export const list = style({
  width: "100%",

  marginBottom: "3.5rem",

  display: "flex",
  alignItems: "center",

  color: "var(--Gray45)",
  fontSize: "1.6rem",
  fontStyle: "normal",
  fontWeight: "600",

  "@media": {
    "screen and (min-width: 744px)": {
      maxWidth: "45rem",
      margin: "0 auto 3.5rem auto",
    },
  },
});

export const icon = style({
  marginRight: "1.5rem",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "2.8rem",
      height: "2.8rem",
      marginRight: "1.8rem",
    },
  },
});

export const text = style({
  marginRight: "auto",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
      fontWeight: "600",
    },
  },
});

export const checkicon = style({
  "@media": {
    "screen and (min-width: 744px)": {
      width: "2.6rem",
      height: "2.6rem",
    },
  },
});
