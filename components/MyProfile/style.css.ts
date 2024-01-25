import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
});

export const profileImg = style({
  width: "7rem",
  height: "7rem",

  marginBottom: "1rem",
  marginRight: "1rem",

  borderRadius: "50%",
  backgroundColor: "#ddd",
  fontSize: "3rem",
});

export const userInfo = style({});

export const nickname = style({
  marginBottom: "0.5rem",

  fontSize: "2rem",
  color: "#333",
});

export const email = style({
  fontSize: "1.6rem",
  color: "#555",
});
