import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",

  gap: "0.5rem",
});

export const inputBox = style({
  width: "100%",
  height: "3rem",

  padding: "1rem",

  borderRadius: "10px",
  border: "1px solid #d9d9d9",

  ":focus": {
    outline: "none",
    border: "1px solid orange",
  },
});

export const searchButton = style({
  width: "10rem",
  height: "3.6rem",

  borderRadius: "50px",
  backgroundColor: "orange",
});
