import { Z_INDEX } from "@/styles/zindex.css";
import { style } from "@vanilla-extract/css";

export const button = style({
  width: "6rem",
  height: "6rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "fixed",
  bottom: "9.6rem",
  right: "1.6rem",

  border: "none",
  borderRadius: "50%",
  backgroundColor: "var(--MainOrange)",
  cursor: "pointer",

  boxShadow: "2px 4px 4px rgba(122, 122, 122, 0.25);",
  zIndex: Z_INDEX.LogWriteButton_button,
});
