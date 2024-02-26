import { globalStyle } from "@vanilla-extract/css";

globalStyle(".swiper-pagination-bullet", {
  backgroundColor: "var(--MainOrange)",
});

globalStyle(".swiper-slide", {
  width: "32.5rem",
  height: "15rem",

  borderRadius: "10px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    "screen and (min-width: 744px)": {
      width: "45rem",
      height: "20.7rem",
    },
  },
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

  "@media": {
    "screen and (min-width: 744px)": {
      marginTop: "2rem",
      marginBottom: "2rem",
    },
  },
});
