import { style } from "@vanilla-extract/css";

export const container = style({
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  marginBottom: "2.1rem",

  "@media": {
    "screen and (min-width: 744px)": {
      marginBottom: "3.3rem",
    },
  },
});

export const petProfileImage = style({
  width: "18rem",
  height: "18rem",
  marginBottom: "2rem",
  borderRadius: "50%",
  border: "5px solid var(--MainOrange)",
  objectFit: "cover",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "25.4rem",
      height: "25.4rem",
      marginBottom: "2.4rem",
    },
  },
});

export const petName = style({
  marginBottom: "1rem",
  fontSize: "2rem",
  fontWeight: "700",
  color: "var(--Black)",

  "@media": {
    "screen and (min-width: 744px)": {
      marginBottom: "1.2rem",
      fontSize: "2.4rem",
    },
  },
});

export const petInfo = style({
  marginBottom: "2rem",
  fontSize: "1.6rem",
  fontWeight: "500",
  color: "var(--Black)",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
    },
  },
});

export const subtitle = style({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.4rem",
  padding: "0.4rem 3.2rem",
  borderRadius: "14.5px",
  backgroundColor: "var(--MainOrange)",
  fontSize: "1.4rem",
  fontWeight: "600",
  color: "var(--White)",

  "@media": {
    "screen and (min-width: 744px)": {
      gap: "0.8rem",
      fontSize: "1.6rem",
    },
  },
});
