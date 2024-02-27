import { Z_INDEX } from "@/styles/zindex.css";
import { style } from "@vanilla-extract/css";

export const header = style({
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

  "@media": {
    "screen and (min-width: 1024px)": {
      position: "fixed",
      top: "6rem",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: "2",
      width: "74.4rem",
      borderRadius: "20px 20px 0",
    },
  },
});

export const logo = style({
  width: "3.7rem",
  height: "3.6rem",
});
