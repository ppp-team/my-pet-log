import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2.4rem",

  padding: "2rem",
  width: "36rem",

  "@media": {
    "(min-width: 744px)": {
      width: "45rem",
    },
  },
});

export const search = style({
  width: "100%",
  height: "4rem",

  borderRadius: "20px",
  border: "none",
  background: "var(--GrayE8)",

  padding: "0.8rem 8rem 0.8rem 1.4rem",
});

export const deleteIcon = style({
  width: "2rem",
  height: "2rem",

  color: "var(--Gray9f)",

  cursor: "pointer",
});

export const searchIcon = style({
  display: "flex",
  gap: "1rem",
  position: "absolute",

  right: 0,
  top: "50%",
  transform: "translate(-50%,-50%)",
});

export const searchIntroWrapper = style({
  display: "flex",
  flexDirection: "row",
  gap: "2rem",

  flexWrap: "wrap",

  fontSize: "1.3rem",
});

export const recommendKey = style({
  padding: "0.8rem 1.1rem",

  borderRadius: "12px",
  border: "1px solid var(--GrayE8)",

  cursor: "pointer",
});

export const noResultWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  alignItems: "center",

  height: "100vh",

  marginTop: "7rem",
});

export const noResultText = style({
  fontSize: "2rem",
  fontWeight: "500",
  color: "var(--Gray9A)",
});
