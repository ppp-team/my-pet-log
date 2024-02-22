import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "2rem 0",

  borderTop: "1px solid var(--GrayE4)",
  borderBottom: "1px solid var(--GrayE4)",
});

export const ProfileWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",

  position: "relative",
});

export const title = style({
  marginBottom: "2rem",

  color: "var(--Gray72)",
  fontSize: "1.6rem",
  fontWeight: "600",
});

export const profileImg = style({
  width: "5rem",
  height: "5rem",

  border: "2px solid var(--MainOrange)",
  borderRadius: "50%",
  backgroundSize: "contain",
});

export const nickname = style({
  marginBottom: "0.5rem",

  fontSize: "1.6rem",
  fontWeight: "700",
});

export const email = style({
  fontSize: "1.3rem",
  color: "var(--Gray81)",
  fontWeight: "400",
});

export const checkRightIcon = style({
  position: "absolute",
  right: 0,
});
