import { style } from "@vanilla-extract/css";

export const lostPetWrapper = style({
  width: "100%",
  height: "17rem",

  display: "flex",
  flexDirection: "column",

  position: "fixed",
  bottom: "0",

  background: "var(--LightOrange)",
});

export const titleWrapper = style({
  display: "flex",
  justifyContent: "space-between",
});

export const lostPetTitle = style({
  margin: "1.4rem 2.1rem",

  fontSize: "1.6rem",
  fontWeight: "700",
  color: "var(--Gray45)",
});

export const moreButton = style({
  marginRight: "2.1rem",

  fontSize: "1.2rem",
  fontWeight: "500",
  color: "var(--MainOrange)",
});

export const lostPetCardList = style({
  display: "flex",

  marginLeft: "2.1rem",
  gap: "2rem",

  overflow: "auto",
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  scrollbarWidth: "none",
  msOverflowStyle: "none",
});

export const lostPetCard = style({
  width: "19.7rem",
  height: "9rem",

  padding: "1.4rem",
  gap: "0.9rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderRadius: "10px",
  background: "var(--White)",
  boxShadow: "0px 2px 4px 2px rgba(164, 164, 164, 0.25)",
});

export const lostPetImage = style({
  width: "6.3rem",
  height: "6.3rem",

  borderRadius: "10px",
  background: "var(--Gray81)",
});

export const lostPetCardDetail = style({
  width: "12rem",

  display: "flex",
  flexDirection: "column",

  gap: "0.2rem",

  fontSize: "1rem",
  fontWeight: "500",
});
