import { Z_INDEX } from "@/styles/zindex.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  position: "fixed",
  top: "0",
  zIndex: Z_INDEX.MobileLayout,
  display: "flex",
  alignItems: "center",
  width: "100vw",
  height: "5.6rem",
  paddingLeft: "1.7rem",
  border: "1px solid var(--GrayE8)",
  backgroundColor: "white",
});

export const logo = style({
  width: "3.7rem",
  height: "3.6rem",
});
