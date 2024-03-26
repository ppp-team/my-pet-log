import { style } from "@vanilla-extract/css";

export const container = style({
  height: "80vh",
  margin: "0 auto",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.8rem",
});

export const title = style({
  color: "var(--Black)",
  fontSize: "2rem",
  fontWeight: "600",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2.8rem",
    },
  },
});

export const icon = style({
  "@media": {
    "screen and (min-width: 744px)": {
      width: "28rem",
      height: "27rem",
    },
  },
});

export const description = style({
  width: "26rem",

  textAlign: "center",
  color: "var(--Gray81)",
  fontSize: "1.6rem",
  fontWeight: "500",

  whiteSpace: "pre-wrap",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "31rem",
      fontSize: "2rem",
    },
  },
});

export const button = style({
  width: "18.6rem",
  height: "4.5rem",

  marginTop: "1.8rem",

  borderRadius: "30px",
  background: "var(--MainOrange)",

  textAlign: "center",
  lineHeight: "4.5rem",
  color: "var(--White)",
  fontSize: "1.6rem",
  fontWeight: "600",
  "@media": {
    "screen and (min-width: 744px)": {
      width: "25.4rem",
      height: "4.5rem",

      marginTop: "4.8rem",

      fontSize: "2rem",
    },
  },
});
