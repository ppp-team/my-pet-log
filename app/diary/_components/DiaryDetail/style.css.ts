import { keyframes, style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",

  marginTop: "5.6rem",
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.8rem",

  padding: "2.4rem 0",

  position: "relative",
});

export const title = style({
  fontSize: "1.8rem",
  fontWeight: "600",

  "@media": {
    "(min-width: 744px)": {
      fontSize: "2rem",
    },
  },
});

export const date = style({
  fontSize: "1.4rem",
  color: "var(--Gray9A)",

  "@media": {
    "(min-width: 744px)": {
      fontSize: "1.6rem",
    },
  },
});
export const petInfo = style({
  color: "var(--GrayC2)",
  fontSize: "1.4rem",
  fontWeight: "500",

  "@media": {
    "(min-width: 744px)": {
      fontSize: "1.6rem",
    },
  },
});

export const main = style({
  display: "flex",
  flexDirection: "column",

  padding: "1.4rem 1.6rem",

  borderTop: "1px solid var(--GrayE8)",
  borderBottom: "1px solid var(--GrayE8)",

  position: "relative",
});

export const image = style({
  width: "100%",
  height: "35rem",

  borderRadius: "10px",
  border: "1px solid var(--GrayB5)",

  backgroundSize: "cover",
  backgroundPosition: "center",

  "@media": {
    "(min-width: 744px)": {
      height: "41.8rem",
    },
  },
});

export const profile = style({
  display: "flex",
  justifyContent: "space-between",
});

export const swiperFraction = style({
  width: "3.6rem",
  height: "2rem",

  position: "absolute",
  right: "1.5rem",
  top: "1.5rem",

  paddingTop: "0.3rem",

  borderRadius: "8px",

  backgroundColor: "rgba(0,0,0,0.5)",

  color: "var(--White)",
  textAlign: "center",
  fontSize: "1.2rem",

  zIndex: "1",
});

export const profileImage = style({
  minWidth: "3rem",
  minHeight: "3rem",

  border: "1px solid var(--MainOrange)",
  borderRadius: "50%",

  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const content = style({
  width: "100%",

  fontSize: "1.4rem",
  lineHeight: "1.8rem",
  color: "var(--Gray1F)",

  whiteSpace: "pre-wrap",

  marginTop: "0.9rem",
});

export const commentsCount = style({
  width: "100%",

  padding: "1.4rem 1.6rem",

  borderBottom: "1px solid var(--GrayE8)",

  fontSize: "1.4rem",
  color: "var(--Gray81)",
});

export const kebab = style({
  position: "absolute",
  bottom: 0,
  right: "1.2rem",

  cursor: "pointer",
});

export const comments = style({
  display: "flex",
});

export const commentsList = style({
  marginBottom: "6rem",
});

export const commentInputContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "0.9rem",
  width: "100%",

  position: "fixed",
  bottom: "5.6rem",

  padding: "1rem 1.6rem",

  backgroundColor: "var(--White)",

  "@media": {
    "(min-width: 744px)": {
      bottom: 0,
    },
  },
});

export const commentInput = style({
  width: "100%",
  height: "4rem",

  padding: "1.2rem 1.5rem",

  borderRadius: "20px",
  border: "none",

  backgroundColor: " var(--GrayF4)",

  ":focus": {
    outline: "none",
  },
});

export const sendIcon = style({
  position: "absolute",
  right: "0.7rem",
  top: "50%",

  transform: "translate(-50%,-50%)",

  cursor: "pointer",
});

export const commonKebab = style({
  width: "11rem",
  padding: "0.4rem 0.5rem",

  borderRadius: "7px",
  background: "rgba(255, 255, 255, 0.95)",
  boxShadow: "0px 4px 6px 5px rgba(105, 105, 105, 0.07)",

  zIndex: 111,
});

export const kebabModal = style([
  commonKebab,
  {
    position: "absolute",
    bottom: "-5rem",
    right: "1.2rem",
  },
]);

export const kebabList = style({
  padding: "0.6rem 2.5rem",

  borderRadius: "5px",

  fontSize: "1.4rem",
  fontWeight: "500",
  lineHeight: " 2rem",
  textAlign: "center",

  ":hover": {
    backgroundColor: "var(--LightOrange)",

    color: "var(--OrangeED)",
    fontWeight: "600",
  },
});

export const commentKebab = style([
  commonKebab,
  {
    position: "absolute",
    top: 0,
    right: "0",
  },
]);

export const commentEditForm = style({
  display: "flex",
  flexDirection: "column",
});

const bounce = keyframes({
  "0%": { transform: "scale(0.6)", transformOrigin: "center center" },
  "25%": { transform: "scale(0.9)" },
  "50%": { transform: "scale(1.1)" },
  "75%": { transform: "scale(1)" },
  "100%": { transform: "scale(0.9)", transformOrigin: "center center" },
});

export const LikeIcon = style({
  animation: `${bounce} 0.4s linear 1`,
});
