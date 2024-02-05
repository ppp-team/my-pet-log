import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({});

globalStyle(".swiper", {
  width: "100%",
  height: "100%",
});

globalStyle(".swiper-slide", {
  width: "30.5rem",
  height: "12.1rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

globalStyle(".swiper-slide img", {
  width: "100%",
  height: "100%",

  display: "block",
  objectFit: "cover",
});

globalStyle(".swiper-pagination", {
  position: "static",
});

globalStyle(".petadd", {
  borderRadius: "10px",
  backgroundColor: "#d3d3d3",
});
