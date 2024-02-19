import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",

  marginTop: "2.4rem",

  display: "flex",
  flexDirection: "column",
});

export const title = style({
  margin: "0 auto",

  fontSize: "1.6rem",
  fontWeight: "700",
});

export const calendarBox = style({
  height: "30rem",

  margin: "2.4rem 1.6rem",
  padding: "1rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "1px solid #d9d9d9",
  borderRadius: "10px",
  boxShadow: "0px 2px 4px 2px rgba(164, 164, 164, 0.25)",
});

export const calendar = style({
  width: "100%",
  height: "100%",
});

export const quickButtonsContainer = style({
  whiteSpace: "nowrap",
  overflowX: "auto",
  margin: "1rem 0",

  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  scrollbarWidth: "none",
  msOverflowStyle: "none",
});
