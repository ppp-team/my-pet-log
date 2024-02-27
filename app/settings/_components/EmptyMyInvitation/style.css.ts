import { style } from "@vanilla-extract/css";

export const container = style({
  paddingTop: "18.1rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.8rem",

  "@media": {
    "screen and (min-width: 744px)": {
      gap: "2.4rem",
    },
  },
});

export const title = style({
  color: "var(--Black)",
  fontSize: "2rem",
  fontWeight: "600",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2.4rem",
    },
  },
});

export const description = style({
  width: "26rem",

  textAlign: "center",
  color: "var(--Gray81)",
  fontSize: "1.6rem",
  fontWeight: "500",
  "@media": {
    "screen and (min-width: 744px)": {
      width: "33rem",
      fontSize: "2rem",
    },
  },
});
