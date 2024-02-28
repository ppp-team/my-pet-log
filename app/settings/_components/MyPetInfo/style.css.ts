import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
});

export const profile = style({
  width: "7rem",
  height: "7rem",
  minWidth: "7rem",
  minHeight: "7rem",

  marginRight: "2rem",

  borderRadius: "50%",
  backgroundSize: "contain",
  objectFit: "cover",
  "@media": {
    "screen and (min-width: 744px)": {
      width: "11rem",
      height: "11rem",
      minWidth: "11rem",
      minHeight: "11rem",

      marginRight: "3rem",
    },
  },
});

export const info = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",

  "@media": {
    "screen and (min-width: 744px)": {
      gap: "0.5rem",
    },
  },
});

export const name = style({
  fontSize: "1.8rem",
  fontWeight: "600",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2.4rem",
      fontWeight: "700",
    },
  },
});

export const breed = style({
  fontSize: "1.2rem",
  fontWeight: "500",
  wordBreak: "keep-all",
  width: "95%",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "1.6rem",
      fontWeight: "500",
    },
  },
});

export const detail = style({
  fontSize: "1.2rem",
  fontWeight: "500",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "1.6rem",
      fontWeight: "500",
    },
  },
});
