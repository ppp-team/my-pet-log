import { Z_INDEX } from "@/styles/zindex.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "none",
    },
  },

  position: "fixed",
  top: "0",
  zIndex: Z_INDEX.AppLayout,
  display: "flex",
  alignItems: "center",
  width: "100vw",
  height: "5.6rem",
  paddingLeft: "1.7rem",
  borderBottom: "1px solid var(--GrayE8)",
  backgroundColor: "white",
});

export const logo = style({
  width: "3.7rem",
  height: "3.6rem",
});
