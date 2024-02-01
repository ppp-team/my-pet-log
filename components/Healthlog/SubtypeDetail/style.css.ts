import { style } from "@vanilla-extract/css";

export const item = style({
  display: "flex",
  flexDirection: "column",

  gap: "1rem",
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

export const textBox = style({
  width: "100%",
  height: "6rem",

  padding: "1rem",

  borderRadius: "10px",
  border: "1px solid #d9d9d9",

  ":focus": {
    outline: "none",
    border: "1px solid orange",
  },
});

export const checkBox = style({
  width: "2rem",
  height: "2rem",

  border: "1px solid #d9d9d9",
});
