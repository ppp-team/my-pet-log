import { Z_INDEX } from "@/styles/zindex.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  position: "fixed",
  top: "0",
  zIndex: Z_INDEX.MobileLayout,
  display: "grid",
  justifyContent: "space-between",
  gridTemplateColumns: "auto 4rem",
  alignItems: "center",
  width: "100vw",
  height: "5.6rem",
  backgroundColor: "white",
});

export const currentPetGroupContainer = style({
  display: "flex",
  alignItems: "center",
  justifySelf: "flex-start",
});

export const petGroupIcon = style({
  width: "4rem",
  height: "4rem",
});

export const dropdownItemContainer = style({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
});
