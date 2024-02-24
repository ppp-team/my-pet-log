import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "2rem 0",

  borderTop: "1px solid var(--GrayE4)",
  borderBottom: "1px solid var(--GrayE4)",
  "@media": {
    "screen and (min-width: 744px)": {
      maxWidth: "45rem",
      margin: "0 auto",
      padding: "3rem 0",
    },
  },
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
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
    },
  },
});

export const profileImg = style({
  width: "5rem",
  height: "5rem",

  border: "2px solid var(--MainOrange)",
  borderRadius: "50%",
  backgroundSize: "contain",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "5.6rem",
      height: "5.6rem",
    },
  },
});

export const nickname = style({
  marginBottom: "0.5rem",

  fontSize: "1.6rem",
  fontWeight: "700",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
    },
  },
});

export const email = style({
  fontSize: "1.3rem",
  color: "var(--Gray81)",
  fontWeight: "400",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "1.5rem",
    },
  },
});

export const checkRightIcon = style({
  position: "absolute",
  right: 0,
  "@media": {
    "screen and (min-width: 744px)": {
      width: "2.6rem",
      height: "2.6rem",
    },
  },
});
