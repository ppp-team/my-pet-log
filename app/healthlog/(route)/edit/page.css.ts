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

export const item = style({
  display: "flex",
  flexDirection: "column",

  gap: "1rem",
});
