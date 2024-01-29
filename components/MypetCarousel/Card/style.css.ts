import { style } from "@vanilla-extract/css";

// 공통 container 스타일
const commonContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const container = style([
  commonContainer,
  {
    width: "100%",
    height: "100%",

    padding: "2rem",

    borderRadius: "10px",
    fontSize: "18px",
  },
]);

export const profile = style({
  width: "7rem",
  height: "7rem",

  marginRight: "1rem",

  borderRadius: "50px",
  border: "2px solid white",

  backgroundSize: "contain",
});

export const petInfo = style({});

export const iconsContainer = style([
  commonContainer,
  {
    flexDirection: "column",
  },
]);
