import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "39.3rem",
  margin: "0 auto",
  padding: "9.6rem 1.6rem 6.9rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  backgroundColor: "var(--GrayFA)",
});

export const skipButtonWrapper = style({
  width: "100%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "flex-end",
});

export const skipButton = style({
  padding: "0.9rem 1.3rem",

  borderRadius: "5px",
  border: "1px solid var(--GrayE2)",
  color: "var(--Gray81)",
  fontSize: "1.6rem",
  fontWeight: "400",
});

export const paginationButtons = style({
  margin: "1rem auto 2.5rem ",

  display: "flex",
  justifyContent: "center",
});

export const nextButton = style({
  width: "1rem",
  height: "1rem",
  margin: "0 0.5rem",

  border: "1px solid var(--GrayE2)",
  borderRadius: "50%",

  backgroundColor: "var(--GrayE2)",
});

export const activePaginationButton = style({
  border: "var(--MainOrange)",

  backgroundColor: "var(--MainOrange)",
});

export const bottomButtonWrapper = style({
  width: "100%",
  margin: "0 auto",

  display: "flex",
  justifyContent: "center",
});

export const bottomButton = style({
  width: "100%",
  padding: "1.3rem 0",

  borderRadius: "30px",

  backgroundColor: "var(--MainOrange)",
  color: "var(--White)",
  fontSize: "1.6rem",
  fontWeight: "600",
  textAlign: "center",
});
