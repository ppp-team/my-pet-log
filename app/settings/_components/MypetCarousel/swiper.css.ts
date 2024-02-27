import { globalStyle } from "@vanilla-extract/css";
globalStyle(".swiper-pagination-bullet", {
  backgroundColor: "var(--MainOrange) !important",
});

globalStyle(".swiper-slide", {
  width: "32.5rem !important",
  height: "15rem !important",

  borderRadius: "10px !important",

  display: "flex !important",
  justifyContent: "center !important",
  alignItems: "center !important",
  "@media": {
    "screen and (min-width: 744px)": {
      width: "45rem !important",
      height: "20.7rem !important",
    },
  },
});

globalStyle(".swiper-wrapper", {
  zIndex: "100 !important",
});

globalStyle(".swiper-slide-active", {
  backgroundColor: "var(--MainOrange) !important",
});

globalStyle(".swiper-slide-prev", {
  backgroundColor: "var(--LightOrange) !important",
});

globalStyle(".swiper-slide-next", {
  backgroundColor: "var(--LightOrange) !important",
});

globalStyle(".swiper-pagination", {
  marginTop: "1.4rem !important",
  marginBottom: "1.4rem !important",

  position: "static",

  "@media": {
    "screen and (min-width: 744px)": {
      marginTop: "2rem !important",
      marginBottom: "2rem !important",
    },
  },
});
