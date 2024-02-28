import { keyframes, style } from "@vanilla-extract/css";

const loadingAnimation = keyframes({
  "100%": { backgroundPosition: "-100% 0" },
});

export const container = style({
  padding: "2rem 0",
  margin: "0 1.6rem",
  borderBottom: "1px solid var(--GrayE4)",

  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  position: "relative",

  "@media": {
    "screen and (min-width: 744px)": {
      maxWidth: "45rem",
      margin: "0 auto",
      padding: "3rem 0",
    },
  },
});

export const profile = style({
  width: "5rem",
  height: "5rem",
  backgroundColor: "var(--LightOrange)",
  borderRadius: "50%",

  willChange: "background-position",

  background: "linear-gradient(120deg, #ffeee4 30%, #ffffff 38%, #ffffff 40%, #ffeee4 48%)",
  backgroundSize: "200% 100%",
  backgroundPosition: "100% 0",
  animation: `${loadingAnimation} 1s infinite`,
  "@media": {
    "screen and (min-width: 744px)": {
      width: "5.6rem",
      height: "5.6rem",
    },
  },
});

export const nickname = style({
  width: "12rem",
  height: "1.93rem",

  marginBottom: "0.5rem",

  willChange: "background-position",

  background: "linear-gradient(120deg, #ffeee4 30%, #ffffff 38%, #ffffff 40%, #ffeee4 48%)",
  backgroundSize: "200% 100%",
  borderRadius: "10px",
  backgroundPosition: "100% 0",
  animation: `${loadingAnimation} 1s infinite`,
  "@media": {
    "screen and (min-width: 744px)": {
      width: "14rem",
      height: "2.4rem",
    },
  },
});

export const email = style({
  width: "17rem",
  height: "1.6rem",

  willChange: "background-position",

  background: "linear-gradient(120deg, #ffeee4 30%, #ffffff 38%, #ffffff 40%, #ffeee4 48%)",
  backgroundSize: "200% 100%",
  borderRadius: "10px",
  backgroundPosition: "100% 0",
  animation: `${loadingAnimation} 1s infinite`,
  "@media": {
    "screen and (min-width: 744px)": {
      width: "18.5rem",
      height: "2.4rem",
    },
  },
});

export const checkRightIcon = style({
  width: "2.2rem",
  height: "2.2rem",
  position: "absolute",
  right: 0,
  "@media": {
    "screen and (min-width: 744px)": {
      width: "2.6rem",
      height: "2.6rem",
    },
  },
});
