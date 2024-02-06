import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",

  gap: "1rem",
});

export const searchContainer = style({
  display: "flex",
  alignItems: "center",
});

export const inputWrapper = style({
  width: "100%",
  height: "4rem",

  flex: 1,
  marginRight: "1rem",
  padding: "1rem",

  borderRadius: "10px",
  border: "1.5px solid var(--White)",
});

export const searchButton = style({
  width: "8rem",
  height: "4rem",

  borderRadius: "10px",
  backgroundColor: "white",
});
