import { style } from "@vanilla-extract/css";

export const pcBackground = style({
  display: "none",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      objectFit: "cover",
      backgroundColor: "#fff3ec",
    },
  },
});

export const scrollArea = style({
  overflowY: "scroll",
  height: "100%",
});

export const wrapper = style({
  "@media": {
    "screen and (min-width: 1024px)": {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      zIndex: "1",
      width: "74.4rem",
      height: "calc(100vh - 12rem)",
      backgroundColor: "var(--White)",
      borderRadius: "20px",
      boxShadow: "2px 2px 4px 1px rgba(88, 88, 88, 0.20)",
      overflow: "hidden",
    },
  },
});
