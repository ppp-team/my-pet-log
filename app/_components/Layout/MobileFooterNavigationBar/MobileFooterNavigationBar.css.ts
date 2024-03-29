import { Z_INDEX } from "@/styles/zindex.css";
import { style } from "@vanilla-extract/css";

export const footer = style({
  position: "fixed",
  bottom: "0",
  zIndex: Z_INDEX.AppLayout,
  borderRadius: "10px 10px 0px 0px",
  backgroundColor: "var(--White)",
  boxShadow: "0px -3px 3px 0px rgba(163, 163, 163, 0.20)",
  width: "100vw",
  height: "6.3rem",
  overflow: "hidden",

  "@media": {
    "screen and (min-width: 1024px)": {
      position: "fixed",
      bottom: "6rem",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: "2",
      width: "74.4rem",
      borderRadius: "10px 10px 20px 20px",
    },
  },
});

export const nav = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  justifyItems: "center",
  alignItems: "center",
  backgroundColor: "white",
});

export const link = style({
  display: "grid",
  alignContent: "center",
  justifyItems: "center",
  gap: "0.2rem",
  width: "100%",
  height: "6.3rem",
});

export const menuIcon = style({
  width: "2.8rem",
  height: "2.7rem",
});

export const menuNameBase = style({
  fontSize: "1rem",
  fontWeight: "600",
});

export const activeMenuName = style([
  menuNameBase,
  {
    color: "var(--MainOrange)",
  },
]);

export const noActiveMenuName = style([
  menuNameBase,
  {
    color: "var(--GrayC2)",
  },
]);
