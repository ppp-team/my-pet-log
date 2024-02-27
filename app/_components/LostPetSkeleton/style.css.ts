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
  width: "21rem",
  height: "9rem",

  marginBottom: "4.06rem",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "26.4rem",
      height: "12rem",
    },
  },
});

export const skeletonShine = style({
  willChange: "background-position",
  width: "100%",
  height: "100%",
  background: "linear-gradient(120deg, #ffeee4 30%, #ffffff 38%, #ffffff 40%, #ffeee4 48%)",
  boxShadow: "0px 2px 4px 2px rgba(164, 164, 164, 0.25)",
  backgroundSize: "200% 100%",
  borderRadius: "10px",
  backgroundPosition: "100% 0",
  animation: `${loadingAnimation} 1s infinite`,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  fontSize: "1.2rem",
  fontWeight: "500",
  color: "var(--MainOrange)",
});
