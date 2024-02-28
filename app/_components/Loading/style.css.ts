import { Z_INDEX } from "@/styles/zindex.css";
import { style } from "@vanilla-extract/css";

export const loadingContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  minWidth: "100%",
  minHeight: "100%",
  position: "fixed",
  top: "0",
  right: "0",

  backgroundColor: "rgba(255, 255, 255, 0.5)",

  zIndex: Z_INDEX.LoadingPage,
});
