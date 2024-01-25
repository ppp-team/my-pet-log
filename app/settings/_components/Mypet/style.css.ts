import { globalStyle } from "@vanilla-extract/css";

globalStyle(".swiper", {
  width: "100%",
  height: "100%",
});

globalStyle(".swiper-slide", {
  textAlign: "center",
  fontSize: "18px",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

globalStyle(".swiper-slide img", {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
