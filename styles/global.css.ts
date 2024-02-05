import { globalStyle } from "@vanilla-extract/css";

globalStyle(":root", {
  vars: {
    "--swiper-theme-color": "#d934f7",
  },
});

globalStyle("*", {
  boxSizing: "border-box",
  fontFamily: "Pretendard",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  fontSize: "62.5%",
  maxWidth: "100vw",
  maxHeight: "100vh",
});

globalStyle("a", {
  textDecoration: "none",

  outline: "none",

  color: "inherit",
});

globalStyle("button", {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
});

globalStyle("li, dt, dd", {
  listStyle: "none",
});
