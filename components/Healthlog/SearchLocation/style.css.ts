import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",

  gap: "0.5rem",
});

export const searchContainer = style({
  display: "flex",
  alignItems: "center",
});

export const inputWrapper = style({
  width: "100%",
  height: "3rem",

  flex: 1,
  marginRight: "0.5rem",
  padding: "1rem",

  borderRadius: "10px",
  border: "1px solid #d9d9d9",

  ":focus": {
    outline: "none",
    border: "1px solid orange",
  },
});

export const searchButton = style({
  width: "8rem",
  height: "3.6rem",

  borderRadius: "50px",
  backgroundColor: "orange",
});
