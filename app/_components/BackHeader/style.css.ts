import { Z_INDEX } from "@/styles/zindex.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  padding: "1.55rem 1.6rem",

  position: "fixed",

  width: "100%",

  backgroundColor: "var(--White)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderBottom: "1px solid var(--GrayE2)",

  zIndex: Z_INDEX.Header,
});

export const title = style({
  fontSize: "1.6rem",
  fontWeight: "500",
  lineHeight: "2.4rem",
});

export const backIcon = style({
  position: "absolute",
  top: "50%",
  left: "1.6rem",
  transform: "translateY(-50%)",

  cursor: "pointer",
});
