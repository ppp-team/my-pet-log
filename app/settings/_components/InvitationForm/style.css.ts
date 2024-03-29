import { style, createVar } from "@vanilla-extract/css";

export const borderColor = createVar();
export const errorMessageVisibility = createVar();

export const form = style({
  display: "flex",
  flexDirection: "column",
});

export const formTitle = style({
  fontSize: "1.6rem",
  fontWeight: "500",
  color: "var(--Black)",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
    },
  },
});

export const input = style({
  paddingTop: "1.1rem",
  paddingBottom: "1.1rem",
  borderBottom: "2px solid var(--Gray81)",
  backgroundColor: "transparent",
  fontSize: "1.6rem",
  fontWeight: "400",
  "::placeholder": {
    color: "var(--Gray9f)",
  },
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
      paddingTop: "1.3rem",
      paddingBottom: "1.3rem",
    },
  },
});

export const button = style({
  margin: "2rem 0",
  padding: "0.9rem 0",
  borderRadius: "30px",
  backgroundColor: "var(--MainOrange)",
  fontSize: "1.6rem",
  fontWeight: "600",
  color: "var(--White)",
  textAlign: "center",
  "@media": {
    "screen and (min-width: 744px)": {
      margin: "4rem 0",
      padding: "1.1rem 0",
      fontSize: "2rem",
    },
  },
});
