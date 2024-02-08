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
  backgroundColor: "white",
});
