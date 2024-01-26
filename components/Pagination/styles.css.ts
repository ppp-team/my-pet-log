import { style } from "@vanilla-extract/css";

export const paginationButtons = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
});

export const paginationButton = style({
  width: "30px",
  height: "30px",
  border: "2px solid #ccc",
  borderRadius: "50%",
  margin: "0 5px",
  backgroundColor: "#fff",
});

export const activePaginationButton = style({
  backgroundColor: "#ccc",
});
