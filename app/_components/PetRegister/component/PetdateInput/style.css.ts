import { style } from "@vanilla-extract/css";

export const inputWrapper = style({
  // width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const input = style({
  width: "100%",
  padding: "1.3rem 1.8rem",

  borderRadius: "10px",
  border: "1.5px solid #e2e2e2",

  fontSize: "1.6rem",
  fontWeight: "600",
  cursor: "pointer",

  ":focus": {
    outline: "none",
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
