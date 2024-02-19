import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "2.4rem 1.5rem 0",

  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
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
  display: "flex",
  alignItems: "center",
  gap: "1.4rem",
});

export const profileImg = style({
  borderRadius: "50%",
  border: "1px solid var(--MainOrange)",
});

export const nickname = style({
  fontSize: "1.6rem",
  fontWeight: "600",
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
  width: "5.4rem",
  height: "2.1rem",

  borderRadius: "5px",

  backgroundColor: "rgba(255, 225, 208, 1)",
  color: "var(--MainOrange)",
  textAlign: "center",
  fontSize: "1.2rem",
  fontWeight: "600",
  lineHeight: "2.1rem",
});
