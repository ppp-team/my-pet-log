import { style } from "@vanilla-extract/css";

export const container = style({ margin: 0, padding: "0  4.5rem", display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "39.3rem" });

export const imgWrapper = style({
  marginTop: "11.7rem",
});

export const p = style({
  marginTop: "4.8rem",
  marginBottom: "5.4rem",

  fontSize: "1.6rem",
  fontWeight: "500",
  textAlign: "center",
});

export const link = style({
  paddingLeft: "1rem",

  color: "var(--MainOrange)",
  textDecoration: "wavy underLine",
  fontWeight: "700",
});

export const buttonWrapper = style({
  width: "100%",
  margin: "0.3rem 0",
});

export const emailWrapper = style({
  width: "100%",
  margin: "0.3rem 0",
});
