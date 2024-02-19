import { globalStyle } from "@vanilla-extract/css";

globalStyle(".swiper-pagination-bullet", {
  backgroundColor: "var(--MainOrange)",
});

globalStyle(".swiper-slide", {
  width: "30.5rem",
  height: "14.6rem",

  borderRadius: "10px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

globalStyle(".swiper-wrapper", {
  zIndex: "100",
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
  marginTop: "1.4rem",
  marginBottom: "1.4rem",

  position: "static",
});
