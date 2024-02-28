import { style } from "@vanilla-extract/css";

export const container = style({
  minHeight: "100vh",
  margin: "0 auto",
  padding: "3.65rem 1.6rem 6.9rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  backgroundColor: "var(--GrayFA)",

  "@media": {
    "screen and (min-width: 744px)": {
      padding: "7.2rem 3rem 14rem",
    },
  },
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

  "@media": {
    "screen and (min-width: 744px)": {
      padding: "4.4rem 14.7rem 15.4rem 14.7rem",
    },
  },
});

export const bottomButton = style({
  width: "100%",
  maxWidth: "35.8rem",
  padding: "1.3rem 0",

  borderRadius: "30px",

  backgroundColor: "var(--MainOrange)",
  color: "var(--White)",
  fontSize: "1.6rem",
  fontWeight: "600",
  textAlign: "center",
});

export const link = style({
  width: "inherit",

  display: "flex",
  justifyContent: "center",
});
