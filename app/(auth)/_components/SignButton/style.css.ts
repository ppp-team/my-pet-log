import { style } from "@vanilla-extract/css";

export const signButton = style({
  width: "100%",
  height: "4.5rem",
  backgroundColor: "var(ButtonColor,--White)",
  border: "1px solid var(--GrayE2)",
  borderRadius: "6px",
  padding: "0 1.4rem",
  margin: "auto",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",

  fontSize: "1.4rem",
  fontWeight: "600",
  textAlign: "center",
});

export const kakaoButton = style({
  backgroundColor: "#FEE500",
  border: "none",
});

export const googleButton = style({});

export const emailButton = style({});

export const iconWrapper = style({
  display: "flex",
  alignItems: "center",
});

export const messageWrapper = style({
  width: "100%",
});
