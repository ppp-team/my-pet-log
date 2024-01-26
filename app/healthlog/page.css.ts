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

export const calendarBox = style({
  width: "100%",
  height: "28rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "lightgoldenrodyellow",
});

export const calendar = style({
  width: "100%",
  height: "100%",
});

export const quickButtonsContainer = style({
  whiteSpace: "nowrap",
  overflowX: "auto",
  margin: "1rem 0",
});

export const date = style({
  padding: "1rem 0",

  backgroundColor: "lightgoldenrodyellow",

  fontSize: "1.4rem",
  color: "gray",
});
