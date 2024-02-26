import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "2.4rem 1.5rem 0",

  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  "@media": {
    "screen and (min-width: 744px)": {
      maxWidth: "45rem",
      margin: "0 auto",
      padding: "2.4rem 0",
    },
  },
});

export const memberlist = style({
  padding: "1.2rem 1.6rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  borderRadius: "10px",
  border: "2px solid var(--MainOrange)",
});

export const profileWrapper = style({
  width: "70%",
  display: "flex",
  alignItems: "center",
  gap: "1.4rem",
});

export const profileImg = style({
  borderRadius: "50%",
  border: "2px solid var(--MainOrange)",
});

export const nickname = style({
  fontSize: "1.6rem",
  fontWeight: "600",
  width: "30%",
  maxWidth: "10rem",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const button = style({
  color: "var(--MainOrange)",
  fontSize: "1.6rem",
  fontWeight: "500",
});

export const header = style({
  padding: "1.8rem 1.6rem",
  backgroundColor: "var(--GrayF4)",
});

export const state = style({
  padding: "0.4rem 1rem",

  borderRadius: "5px",

  backgroundColor: "rgba(255, 225, 208, 1)",
  color: "var(--MainOrange)",
  textAlign: "center",
  fontSize: "1.2rem",
  fontWeight: "600",
  lineHeight: "2.1rem",
});
