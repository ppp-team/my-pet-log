import { style } from "@vanilla-extract/css";

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
});

export const label = style({
  fontSize: "1.6rem",
  fontWeight: "600",
});

export const input = style({
  height: "4.5rem",
  width: "100%",

  fontSize: "1.6rem",
  fontWeight: "500",

  margin: "0.6rem 0",
  padding: "0.8rem 1rem",

  borderRadius: "10px",
  border: "1.5px solid var(--GrayE2)",

  ":focus": {
    outline: "none",
    border: "1.5px solid var(--MainOrange)",
  },
});

export const calendarWrapper = style({
  width: "100%",
  height: "100%",

  margin: "1rem 0",
  padding: "1rem",

  borderRadius: "10px",
  border: "none",
  boxShadow: "0px 2px 4px 2px rgba(164, 164, 164, 0.25)",
});
