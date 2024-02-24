import { style } from "@vanilla-extract/css";

export const button = style({
  padding: "0.9rem 0",
  borderRadius: "30px",
  backgroundColor: "var(--MainOrange)",
  fontSize: "1.6rem",
  fontWeight: "600",
  color: "var(--White)",
  textAlign: "center",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
    },
  },
});
