import { style, keyframes } from "@vanilla-extract/css";

export const commentContainer = style({
  display: "flex",
  gap: "0.9rem",

  padding: "1.6rem",

  borderBottom: "1px solid var(--GrayE8)",
});

export const commentMain = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const commentHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const commentContent = style({
  fontSize: "1.4rem",
  lineHeight: "1.8rem",

  whiteSpace: "pre-wrap",
});

export const commentTextarea = style([
  commentContent,
  {
    width: "100%",

    padding: "0.8rem 1rem",

    borderRadius: "10px",
    border: "1.5px solid var(--GrayE2)",

    ":focus": {
      outline: "none",
      border: "1px solid orange",
    },
  },
]);

export const commentEditButton = style({
  color: "var(--GrayA4)",
  fontSize: " 1.3rem",
  textDecorationLine: "underline",

  marginRight: "0.8rem",
});

export const profileImage = style({
  minWidth: "3rem",
  minHeight: "3rem",

  border: "1px solid var(--MainOrange)",
  borderRadius: "50%",

  backgroundSize: "cover",
  backgroundPosition: "center",
});

const buttonCommon = {
  borderRadius: "5px",
  border: "1px solid var(--GrayE2)",

  color: "var(--Gray81)",
  fontSize: "1.3rem",
};

export const recommentButton = style({
  padding: "0.4rem 1rem",

  vars: buttonCommon,
});

export const commentLikeButton = style({
  padding: "0.3rem 0.8rem",

  display: "flex",
  alignItems: "center",
  gap: "0.3rem",

  vars: buttonCommon,

  fontSize: "1.4rem",
});

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

export const commonKebab = style({
  width: "11rem",
  padding: "0.4rem 0.5rem",

  borderRadius: "7px",
  background: "rgba(255, 255, 255, 0.95)",
  boxShadow: "0px 4px 6px 5px rgba(105, 105, 105, 0.07)",

  zIndex: 111,
});

export const commentKebab = style([
  commonKebab,
  {
    position: "absolute",
    top: 0,
    right: "0",
  },
]);

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
