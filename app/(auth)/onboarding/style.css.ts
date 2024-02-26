import { style } from "@vanilla-extract/css";

export const container = style({
  margin: "1rem auto 2.5rem ",
  backgroundColor: "var--(Gray81)",
  maxWidth: "102.3rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const wrapper = style({
  margin: "0 auto",
  width: "30rem",
  height: "33.8rem",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "41.6rem",
      height: "46.9rem",
    },
  },
});

export const image = style({
  width: "30rem",
  height: "33.8rem",
  "@media": {
    "screen and (min-width: 744px)": {
      width: "41.6rem",
      height: "46.9rem",
    },
  },
});

export const titleSection = style({
  padding: "3.4rem 0 2.4rem ",
  color: "var(--Black)",

  textAlign: "center",
  fontSize: "2rem",
  fontWeight: "600",
  lineHeight: "2.4rem",

  "@media": {
    "screen and (min-width: 744px)": {
      padding: "4.7rem 0 2.4rem",
      fontSize: "3.2rem",
      lineHeight: "3.8rem",
    },
  },
});

export const scriptSection = style({
  margin: "0 auto",

  color: "var(--Gray81)",
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: "400",
  lineHeight: "2rem",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2.4rem",
      lineHeight: "2.8rem",
    },
  },
});

export const textArea = style({
  width: "100%",
  height: "13.2rem",
  margin: "1rem auto 2.5rem ",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  "@media": {
    "screen and (min-width: 744px)": {
      height: "19.1rem",
    },
  },
});
