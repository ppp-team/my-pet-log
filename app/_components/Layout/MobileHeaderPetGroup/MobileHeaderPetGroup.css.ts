import { Z_INDEX } from "@/styles/zindex.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  position: "fixed",
  top: "0",
  zIndex: Z_INDEX.AppLayout,
  display: "grid",
  gridTemplateColumns: "auto 2rem 4rem",
  alignItems: "center",
  gap: "2.4rem",
  width: "100vw",
  height: "5.6rem",
  padding: "0 1.6rem",
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
      borderRadius: "20px 20px 0 0",
    },
  },
});

const headerButtonBase = style({
  width: "4rem",
  height: "4rem",
  border: "2px solid var(--MainOrange)",
  borderRadius: "50%",
  cursor: "pointer",
});

export const userProfileLink = style({
  display: "grid",
  alignItems: "center",
  justifyItems: "flex-end",
  height: "100%",
});

export const userProfileImage = style([
  headerButtonBase,
  {
    width: "4rem",
    height: "4rem",
    objectFit: "cover",
  },
]);
