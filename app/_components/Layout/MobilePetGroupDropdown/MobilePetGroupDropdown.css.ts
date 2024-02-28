import { style } from "@vanilla-extract/css";

export const currentPetGroupContainer = style({
  display: "flex",
  alignItems: "center",
  justifySelf: "flex-start",
  height: "100%",
  cursor: "pointer",
});

const headerButtonBase = style({
  width: "4rem",
  height: "4rem",
  border: "2px solid var(--MainOrange)",
  borderRadius: "50%",
  cursor: "pointer",
});

export const currentPetGroupProfileImage = style([
  headerButtonBase,
  {
    marginRight: "1.1rem",
    objectFit: "cover",
  },
]);

export const currentPetGroupName = style({
  marginRight: "0.6rem",
  fontSize: "1.6rem",
  fontWeight: "700",
  color: "var(--Gray41)",
});

export const dropdownIcon = style({
  width: "2rem",
  height: "2rem",
});

export const dropdownMenu = style({
  borderRadius: "10px",
  border: "1px solid var(--GrayE2)",
  backgroundColor: "var(--White)",
  overflow: "hidden",
});

export const dropdownItemOverride = style({
  outline: "none",
  ":hover": {
    backgroundColor: "var(--LightOrange)",
  },
});

export const dropdownItemContainer = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "1.4rem",
  width: "15.1rem",
  padding: "0.9rem 1.4rem",
  cursor: "pointer",
});

export const petGroupProfileImage = style({
  width: "3.1rem",
  height: "3.1rem",
  borderRadius: "50%",
});

export const petGroupName = style({
  fontSize: "1.6rem",
  fontWeight: "500",
  color: "var(--Black)",
});
