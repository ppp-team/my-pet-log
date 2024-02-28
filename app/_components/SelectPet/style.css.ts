import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "5rem",

  padding: "4.8rem",
});

export const h3 = style({
  fontSize: "1.6rem",
  fontWeight: "700",
  textAlign: "center",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2.4rem",
    },
  },
});

export const p = style({
  color: "var(--Gray81)",
  fontSize: "1.6rem",
  textDecorationLine: "underline",

  cursor: "pointer",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2.4rem",
    },
  },
});
export const petList = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const addButton = style({
  backgroundColor: "var(--MainOrange)",
  borderRadius: "50%",
  width: "3.3rem",
  height: "3.3rem",
  position: "relative",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "4.5rem",
      height: "4.5rem",
    },
  },
});

export const container = style({
  minWidth: "29.4rem",
  height: "11.2rem",

  display: "flex",
  alignItems: "center",
  gap: "1.3rem",

  borderRadius: "10px",

  backgroundColor: "var(--LightOrange)",

  padding: "1rem 2rem",

  cursor: "pointer",

  boxShadow: " 0px 2px 4px 2px rgba(164, 164, 164, 0.25)",

  overflow: "hidden",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "45rem",
      height: "17rem",
      gap: "1.7rem",
    },
  },
});

export const profile = style({
  minWidth: "8rem",
  height: "8rem",

  borderRadius: "50%",
  border: "2px solid var(--MainOrange)",

  backgroundSize: "cover",
  backgroundPosition: "center",
  "@media": {
    "screen and (min-width: 744px)": {
      minWidth: "11rem",
      height: "11rem",
    },
  },
});

export const text = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const addIcon = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "3rem",
      height: "3rem",
    },
  },
});

export const petName = style({
  fontSize: "1.6rem",
  fontWeight: "700",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2.4rem",
    },
  },
});

export const petInfo = style({
  fontSize: "1.3rem",
  fontWeight: "500",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "1.6rem",
    },
  },
});
