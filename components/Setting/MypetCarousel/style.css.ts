import { globalStyle, style } from "@vanilla-extract/css";

export const title = style({
  marginBottom: "2rem",

  color: "#727272",
  fontSize: "1.6rem",
  fontWeight: "600",
});

globalStyle(".swiper-slide", {
  width: "30.5rem",
  height: "12.1rem",

  borderRadius: "10px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

globalStyle(".swiper-slide-active", {
  backgroundColor: "var(--MainOrange)",
});

globalStyle(".swiper-slide-prev", {
  backgroundColor: "var(--LightOrange)",
});

globalStyle(".swiper-slide-next", {
  backgroundColor: "var(--LightOrange)",
});

globalStyle(".swiper-pagination", {
  position: "static",
});
