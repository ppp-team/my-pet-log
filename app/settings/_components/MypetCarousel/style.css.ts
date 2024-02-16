import { style } from "@vanilla-extract/css";

export const title = style({
  margin: "2rem 1.6rem",

  color: "var(--Gray72)",
  fontSize: "1.6rem",
  fontWeight: "600",
});

export const container = style({
  width: "100%",
  height: "100%",

  display: "flex",
  flexWrap: "wrap",

  borderRadius: "10px",
  fontSize: "18px",
});

export const petadd = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",

  fontSize: "1.4rem",
  color: "var(--White)",
});

export const button = style({
  width: "50%",

  padding: "1.3rem 0",

  borderTop: "1px solid var(--White)",

  color: "var(--White)",
  fontSize: "1.2rem",
  fontWeight: "600",
  textAlign: "center",
});

export const petButton = style([
  button,
  {
    borderRight: "1px solid var(--White)",
  },
]);

export const petMateButton = style([button]);

export const petInfoWrapper = style({
  width: "100%",
  padding: "1.5rem 0 1.5rem 2.8rem",
});
