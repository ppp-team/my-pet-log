import { style } from "@vanilla-extract/css";

export const submitButton = style({
  display: "flex",
  width: "100%",
  padding: "1.4rem 0",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid gray",
  borderRadius: "8px",
  backgroundColor: "white",
  color: "black",
  fontWeight: 500,
  fontSize: "1.4rem",

  selectors: {
    "&:disabled": {
      border: "none",
      backgroundColor: "lightgrey",
      cursor: "default",
    },
  },
});
