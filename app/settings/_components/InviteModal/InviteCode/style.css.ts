import { style } from "@vanilla-extract/css";

export const title = style({
  fontSize: "1.6rem",
  fontWeight: "500",
  marginBottom: "1.1rem",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
    },
  },
});

export const codeContainer = style({
  width: "100%",

  padding: "1.5rem 1.2rem",

  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",

  borderRadius: "10px",
  background: "var(--LightOrange)",
});

export const code = style({
  fontSize: "1.4rem",
  fontWeight: "500",
  color: "var(--Gray81)",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "1.6rem",
    },
  },
});

export const copyContainer = style({
  width: "100%",
  height: "5rem",

  padding: "0.8rem 1rem 0.8rem 1.8rem",
  marginTop: "0.8rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  borderRadius: "10px",
  backgroundColor: "var(--White)",
  border: "1.5px solid var(--GrayE2)",
  "@media": {
    "screen and (min-width: 744px)": {
      height: "5.6rem",
      marginTop: "1rem",
    },
  },
});

export const copyIcon = style({
  height: "100%",

  padding: "0.8rem 0.8rem",

  display: "flex",
  alignItems: "center",
  gap: "0.4rem",

  borderRadius: "5px",
  border: "1.3px solid var(--GrayC2)",

  color: "var(--GrayC2)",
  fontSize: "1.2rem",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "1.4rem",
    },
  },
});
