import { style } from "@vanilla-extract/css";

export const listcontainer = style({
  padding: "2.3rem 0",
  margin: "0 1.6rem",
  display: "flex",
  flexDirection: "column",

  "@media": {
    "screen and (min-width: 744px)": {
      padding: "3.2rem 0",
    },
  },
});

export const MenuContainer = style({
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
  width: "2.4rem",
  height: "2.4rem",

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
  width: "2.2rem",
  height: "2.2rem",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "2.6rem",
      height: "2.6rem",
    },
  },
});

export const logoutButton = style({
  width: "100%",
  color: "var(--GrayC2)",
  fontSize: "1.4rem",
  fontWeight: "600",
  cursor: "pointer",
  maxWidth: "45rem",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "1.6rem",
      margin: "0 auto",
    },
  },
});
