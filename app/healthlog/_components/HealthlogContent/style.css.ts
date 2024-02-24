import { style } from "@vanilla-extract/css";

export const calendarBox = style({
  width: "100%",
  maxWidth: "35rem",

  margin: "2.4rem 1.6rem",
  padding: "1rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "1px solid #d9d9d9",
  borderRadius: "10px",
  boxShadow: "0px 2px 4px 2px rgba(164, 164, 164, 0.25)",

  "@media": {
    "screen and (min-width: 744px)": {
      maxWidth: "45rem",
      height: "37rem",
    },
  },
});

export const calendar = style({
  width: "100%",
  height: "100%",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "45rem",
    },
  },
});

export const quickButtonsContainer = style({
  width: "100vw",

  whiteSpace: "nowrap",
  overflowX: "scroll",
  margin: "1rem 0",

  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  scrollbarWidth: "none",
  msOverflowStyle: "none",
});
