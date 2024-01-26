import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  padding: "2rem",
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const diaryContainer = style({
  display: "flex",
  gap: "1rem",
  alignItems: "center",

  border: "1px solid black",
  borderRadius: "6px",

  padding: "1.5rem",

  width: "100%",

  cursor: "pointer",
});

export const headerInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const diaryImage = style({
  width: "5rem",
  height: "5rem",

  borderRadius: "6px",

  backgroundSize: "cover",
  backgroundPosition: "center",
});
