import { style } from "@vanilla-extract/css";

export const submitButton = style({
  display: "flex",
  width: "100%",
  padding: "1.3rem 0",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid var(--MainOrange)",
  borderRadius: "30px",
  backgroundColor: "var(--MainOrange)",
  color: "var(--White)",
  fontWeight: 600,
  fontSize: "1.6rem",

  selectors: {
    "&:disabled": {
      border: "none",
      backgroundColor: "var(--GrayB1)",
      cursor: "default",
    },
  },
});
