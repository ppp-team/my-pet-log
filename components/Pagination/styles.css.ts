import { style } from "@vanilla-extract/css";

export const paginationButtons = style({
  display: "flex",
  justifyContent: "center",
  margin: "10px auto 25px ",
});

export const paginationButton = style({
  width: "10px",
  height: "10px",
  border: "1px solid #ccc",
  borderRadius: "50%",
  margin: "0 5px",
  backgroundColor: "#fff",
});

export const activePaginationButton = style({
  backgroundColor: "#ccc",
});
