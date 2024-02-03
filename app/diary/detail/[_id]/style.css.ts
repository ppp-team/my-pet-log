import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
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

export const petInfo = style({
  color: "#C2C2C2",
  fontSize: "1.4rem",
  fontWeight: "500",
});

export const main = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.9rem",

  padding: "2.4rem 1.6rem 1.4rem",

  borderTop: "1px solid #E8E8E8",
  borderBottom: "1px solid #E8E8E8",

  position: "relative",
});

export const image = style({
  width: "100%",
  height: "23.8rem",

  borderRadius: "10px",
  border: "1px solid #B5B5B5",

  backgroundSize: "cover",
});

export const profile = style({
  display: "flex",
  justifyContent: "space-between",
});

export const swiperFraction = style({
  width: "3.6rem",
  height: "1.6rem",

  position: "absolute",
  right: "2.6rem",
  top: "3.7rem",

  paddingTop: "0.3rem",

  borderRadius: "8px",

  backgroundColor: "rgba(0,0,0,0.5)",

  color: "white",
  fontWeight: "500",
  textAlign: "center",

  zIndex: "2",
});

export const profileImage = style({
  width: "3rem",
  height: "3rem",
  minWidth: "3rem",
  minHeight: "3rem",

  border: "1px solid var(--MainOrange)",
  borderRadius: "50%",
});

export const content = style({
  width: "35.7rem",

  fontSize: "1.4rem",
  lineHeight: "1.8rem",
  color: "#1F1F1F",

  wordBreak: "break-word",
});

export const commentsCount = style({
  width: "100%",

  padding: "1.4rem 1.6rem",

  borderBottom: "1px solid #E8E8E8",

  fontSize: "1.4rem",
  color: "#818181",
});

export const kebab = style({
  position: "absolute",
  bottom: 0,
  right: "1.2rem",

  cursor: "pointer",
});
export const comments = style({ display: "flex" });

export const commentContainer = style({
  display: "flex",
  gap: "0.9rem",

  padding: "1.6rem",

  borderBottom: "1px solid #E8E8E8",
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

  wordBreak: "break-all",
});

const buttonCommon = {
  borderRadius: "5px",
  border: "1px solid #E2E2E2",

  color: "#818181",
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

export const commentInput = style({ display: "flex" });
