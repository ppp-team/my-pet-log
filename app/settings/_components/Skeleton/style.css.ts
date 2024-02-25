import { keyframes, style } from "@vanilla-extract/css";

const loadingAnimation = keyframes({
  "100%": { backgroundPosition: "-100% 0" },
});

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const skeleton = style({
  width: "32.5rem",
  height: "15rem",

  marginBottom: "4rem",
  "@media": {
    "screen and (min-width: 744px)": {
      width: "45rem",
      height: "20.7rem",

      marginBottom: "5.2rem",
    },
  },
});

export const skeletonShine = style({
  willChange: "background-position",
  width: "100%",
  height: "100%",
  background: "linear-gradient(120deg, #ffeee4 30%, #ffffff 38%, #ffffff 40%, #ffeee4 48%)",
  backgroundSize: "200% 100%",
  borderRadius: "10px",
  backgroundPosition: "100% 0",
  animation: `${loadingAnimation} 1s infinite`,
});
