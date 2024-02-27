import { style } from "@vanilla-extract/css";

export const lostPetWrapper = style({
  width: "100%",
  height: "17rem",

  display: "flex",
  flexDirection: "column",

  position: "fixed",
  bottom: "0",

  background: "var(--LightOrange)",

  "@media": {
    "screen and (min-width: 744px)": {
      height: "25rem",
    },
  },
});

export const titleWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const lostPetTitle = style({
  margin: "1.4rem 2.1rem",

  fontSize: "1.6rem",
  fontWeight: "700",
  color: "var(--Gray45)",

  "@media": {
    "screen and (min-width: 744px)": {
      margin: "2.5rem 2.9rem",

      fontSize: "2.4rem",
    },
  },
});

export const moreButton = style({
  marginRight: "2.1rem",

  fontSize: "1.2rem",
  fontWeight: "500",
  color: "var(--MainOrange)",

  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
    },
  },
});

export const lostPetCardList = style({
  display: "flex",

  marginLeft: "2.1rem",

  overflowX: "auto",
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  scrollbarWidth: "none",
  msOverflowStyle: "none",
});

export const lostPetCard = style({
  width: "21rem",
  height: "9rem",

  margin: "0 1rem",
  padding: "1.4rem",
  gap: "0.9rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderRadius: "10px",
  background: "var(--White)",
  boxShadow: "0px 2px 4px 2px rgba(164, 164, 164, 0.25)",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "26.4rem",
      height: "12rem",
    },
  },
});

export const lostPetImage = style({
  width: "6.3rem",
  height: "6.3rem",

  borderRadius: "10px",
  background: "var(--Gray81)",

  objectFit: "cover",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "8.5rem",
      height: "8.5rem",
    },
  },
});

export const lostPetCardDetail = style({
  width: "13rem",

  display: "flex",
  flexDirection: "column",

  gap: "0.2rem",

  fontSize: "1rem",
  fontWeight: "500",

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "14.5rem",

      gap: "0.8rem",

      fontSize: "1.2rem",
    },
  },
});

export const failedToLoad = style({
  fontSize: "1.2rem",
  fontWeight: "500",
  color: "var(--Gray81)",
});
