import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "28rem",
  height: "53.6rem",
  paddingTop: "2.6rem",
  borderRadius: "10px",
  backgroundColor: "#F2F2F2",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "35rem",
      height: "75.5rem",
      paddingTop: "2.3rem",
    },
  },
});

export const closeButton = style({
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "2.3rem",

  "@media": {
    "screen and (min-width: 744px)": {
      marginRight: "2.5rem",
    },
  },
});

export const closeIcon = style({
  width: "2.4rem",
  height: "2.4rem",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "3rem",
      height: "3rem",
    },
  },
});

export const title = style({
  marginTop: "0.1rem",
  marginBottom: "3.5rem",
  fontSize: "1.6rem",
  fontWeight: "500",
  textAlign: "center",
  color: "var(--Black)",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
    },
  },
});

export const formWrapper = style({
  padding: "0 2rem",
  marginBottom: "3.5rem",

  "@media": {
    "screen and (min-width: 744px)": {
      marginBottom: "5.8rem",
      padding: "0 2.5rem",
    },
  },
});

export const form = style({
  display: "flex",
  flexDirection: "column",
});
