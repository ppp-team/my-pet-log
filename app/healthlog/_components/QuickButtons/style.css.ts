import { style } from "@vanilla-extract/css";

export const buttonContainer = style({
  display: "flex",
  justifyContent: "flex-start",

  paddingLeft: "1.6rem",
  gap: "1.6rem",

  "@media": {
    "screen and (min-width: 744px)": {
      justifyContent: "center",

      paddingLeft: "0",
      gap: "2.2rem",
    },
  },
});

export const buttonWrapper = style({
  width: "5.6rem",
  height: "auto",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  gap: "1rem",
});

export const button = style({
  width: "5.6rem",
  height: "5.6rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  border: "none",
  borderRadius: "50%",
  backgroundColor: "#F2E1AE",
  cursor: "pointer",

  boxShadow: "0px 4px 4px 2px rgba(132, 132, 132, 0.10)",
});

export const secondColorButton = style({
  backgroundColor: "#B0D1D9",
});

export const thirdColorButton = style({
  backgroundColor: "#F2BBA7",
});

export const buttonText = style({
  fontSize: "1.2rem",
  color: "#535353",
});
