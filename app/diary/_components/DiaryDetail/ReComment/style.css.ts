import { style } from "@vanilla-extract/css";

export const replyContainer = style({
  marginLeft: "2rem",
  borderLeft: "2px solid var(--GrayE8)",
  paddingLeft: "1rem",
  paddingTop: "1rem",
  paddingBottom: "1rem",
});

export const replyContent = style({
  fontSize: "1.2rem",
  lineHeight: "1.6rem",
  color: "var(--Gray81)",
});

export const profileImage = style({
  minWidth: "3rem",
  minHeight: "3rem",

  border: "1px solid var(--MainOrange)",
  borderRadius: "50%",

  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const commentHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
