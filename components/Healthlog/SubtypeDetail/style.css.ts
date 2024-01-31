import { style } from "@vanilla-extract/css";

export const item = style({
  display: "flex",
  flexDirection: "column",

  gap: "1rem",
});

export const inputBox = style({
  width: "100%",
  height: "4rem",

  padding: "1rem",

  borderRadius: "10px",
  border: "1px solid #818181",
});

export const textBox = style({
  width: "100%",
  height: "8rem",

  padding: "1rem",

  borderRadius: "10px",
  border: "1px solid #818181",
});

export const checkBox = style({
  width: "2rem",
  height: "2rem",

  border: "1px solid #818181",
});
