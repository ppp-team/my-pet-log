import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100vw",

  margin: "6.7rem 1.6rem",

  display: "flex",
  flexDirection: "column",

  overflow: "auto",

  "@media": {
    "screen and (min-width: 744px)": {
      maxWidth: "45rem",
      margin: "10.3rem 14.7rem",
    },
  },
});

export const formItems = style({
  display: "flex",
  flexDirection: "column",

  gap: "1rem",

  fontSize: "1.6rem",
  fontWeight: "600",
});

export const inputWrapper = style({
  width: "100%",

  gap: "0.6rem",

  display: "flex",
  flexDirection: "column",
});

export const buttonGroup = style({
  display: "flex",
  justifyContent: "space-between",

  gap: "0.8rem",
});

export const typeButton = style({
  width: "100%",
  height: "8rem",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "1.4rem",

  borderRadius: "10px",
  backgroundColor: "var(--GrayF2)",
  color: "var(--Gray81)",
  fontWeight: "600",
  border: "none",
  outline: "none",
  cursor: "pointer",

  "@media": {
    "screen and (min-width: 744px)": {
      height: "10.1rem",

      padding: "1.75rem",
    },
  },
});

export const typeButtonSelected = style({
  backgroundColor: "var(--MainOrange)",
  color: "var(--White)",
});

export const addIcon = style({
  width: "1.6rem",
  height: "1.6rem",

  color: "var(--Gray81)",
  fontWeight: "600",
});

export const addIconSelected = style({
  width: "1.6rem",
  height: "1.6rem",

  color: "var(--White)",
  fontWeight: "600",
});

export const submitButton = style({
  width: "100%",
  height: "4.5rem",

  marginTop: "3rem",

  borderRadius: "50px",
  backgroundColor: "var(--MainOrange)",

  fontSize: "1.6rem",
  fontWeight: "600",
  color: "var(--White)",
});
