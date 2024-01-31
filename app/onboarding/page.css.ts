import { style } from "@vanilla-extract/css";

export const container = style({ margin: 0, padding: "1.9rem 4.2rem", display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "39.3rem" });

export const button = style({
  borderRadius: "5px",
  border: "1px solid grey;",
  padding: "0.9rem 1.3rem",
  fontSize: "1.6rem",
  fontWeight: "400",
});

export const paginationButtons = style({
  display: "flex",
  justifyContent: "center",
  margin: "1rem auto 2.5rem ",
});

export const nextButton = style({
  width: "1rem",
  height: "1rem",
  border: "1px solid #ccc",
  borderRadius: "50%",
  margin: "0 0.5rem",
  backgroundColor: "#fff",
});

export const activePaginationButton = style({
  backgroundColor: "#ccc",
});
