import { style } from "@vanilla-extract/css";

export const formContainer = style({
  width: "100%",
  maxWidth: "45rem",

  margin: "0 auto",
  padding: "3rem 1.5rem",

  display: "flex",
  flexDirection: "column",
  "@media": {
    "screen and (min-width: 744px)": {
      paddingTop: "3.2rem",
    },
  },
});

export const label = style({
  marginBottom: "1rem",
  marginTop: "1rem",

  fontSize: "1.6rem",
  fontWeight: "600",
  "@media": {
    "screen and (min-width: 744px)": {
      marginTop: "2.4rem",
    },
  },
});

export const input = style({
  padding: "1.3rem 1.8rem",

  borderRadius: "10px",
  border: "1.5px solid var(--GrayE2)",

  fontSize: "1.6rem",
  fontWeight: "500",
  color: "var(--Gray81)",

  ":focus": {
    outline: "none",
    border: "1.5px solid var(--MainOrange)",
  },
});

export const inputError = style({
  border: "1.5px solid var(--Red)",
});

export const button = style({
  padding: "1.3rem 0",
  marginTop: "2.4rem",

  borderRadius: "30px",

  color: "var(--White)",
  backgroundColor: "var(--MainOrange)",
  "@media": {
    "screen and (min-width: 744px)": {
      marginTop: "3.2rem",
    },
  },
});
