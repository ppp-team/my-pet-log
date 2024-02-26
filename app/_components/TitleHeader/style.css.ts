import { style } from "@vanilla-extract/css";

export const header = style({
  padding: "1.4rem 1.6rem",

  position: "relative",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderBottom: "1px solid var(--GrayE2)",
  fontSize: "1.6rem",
  fontWeight: "500",
  "@media": {
    "screen and (min-width: 744px)": {
      padding: "2rem 0",

      fontSize: "2rem",
    },
  },
});

export const closeIcon = style({
  position: "absolute",
  right: "1.6rem",
  top: "50%",
  transform: "translateY(-50%)",

  cursor: "pointer",
});
