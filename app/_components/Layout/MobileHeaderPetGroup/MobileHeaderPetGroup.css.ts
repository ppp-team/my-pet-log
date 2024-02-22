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
  display: "grid",
  justifyContent: "space-between",
  gridTemplateColumns: "auto 4rem",
  width: "100vw",
  height: "5.6rem",
  padding: "0 1.6rem",
  borderBottom: "1px solid var(--GrayE8)",
  backgroundColor: "white",
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
  },
]);

export const userProfileImageTest = style({
  width: "4rem",
  height: "100%",
});
