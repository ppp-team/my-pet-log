import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  position: "relative",
});

export const bg = style({
  width: "100%",
  height: "auto",

  marginTop: "7.6rem",

  "@media": {
    "screen and (min-width: 744px)": {
      marginTop: "9.7rem",
    },
  },
});

export const header = style({
  width: "100%",
  height: "5.6rem",

  position: "fixed",
  padding: "1.55rem 1.6rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media": {
    "screen and (min-width: 744px)": {
      padding: "5rem 3.9rem",
    },
  },
});

export const backIcon = style({
  position: "absolute",
  top: "50%",
  left: "1.6rem",
  transform: "translateY(-50%)",

  cursor: "pointer",
});

export const backHomeWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  position: "absolute",
  top: "40%",
  gap: "2rem",
});

export const illust = style({
  width: "20rem",
  height: "auto",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "30rem",
      height: "auto",
    },
  },
});

export const backHomeText = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  fontSize: "2rem",
  fontWeight: "600",
  lineHeight: "2.8rem",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2.6rem",
      lineHeight: "3.6rem",
    },
  },
});

export const homeButton = style({
  width: "21.1rem",
  height: "4.5rem",

  borderRadius: "30px",
  background: "var(--MainOrange)",

  fontSize: "1.6rem",
  fontWeight: "600",
  color: "var(--White)",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "28.1rem",
      height: "6rem",

      fontSize: "2rem",
    },
  },
});

export const titleWrapper = style({
  display: "flex",
  justifyContent: "space-between",
});
