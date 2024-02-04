import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",

  padding: "10.4rem 1.6rem 8.3rem",

  display: "flex",
  flexDirection: "column",
});

export const title = style({
  margin: "2.2rem auto",

  fontSize: "1.6rem",
  fontWeight: "700",
});

export const formItems = style({
  display: "flex",
  flexDirection: "column",

  gap: "1rem",

  fontSize: "1.4rem",
  fontWeight: "700",
});

export const inputWrapper = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",

  gap: "1rem",
});

export const buttonGroup = style({
  display: "flex",
  justifyContent: "space-between",

  gap: "0.8rem",
});

export const typeButton = style({
  width: "100%",
  height: "8rem",

  borderRadius: "10px",
  backgroundColor: "#d9d9d9",
});

export const typeButtonSelected = style({
  backgroundColor: "orange",
});

export const textBox = style({
  width: "100%",
  height: "8rem",

  padding: "1rem",

  borderRadius: "10px",
  border: "1px solid #d9d9d9",
});

export const submitButton = style({
  width: "23.6rem",
  height: "3.6rem",

  borderRadius: "50px",
  backgroundColor: "orange",
});
