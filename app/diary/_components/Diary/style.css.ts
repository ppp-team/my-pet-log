import { keyframes, style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
});

export const search = style({
  width: "100%",
  height: "4rem",

  borderRadius: "20px",
  border: "none",
  background: "var(--GrayE8)",

  padding: "0.8rem 1rem",
});

export const searchIcon = style({
  position: "absolute",

  right: "1rem",
  top: "50%",
  transform: "translate(-50%,-50%)",
});

export const container = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export const diaryListWrapper = style({
  display: "flex",
  flexDirection: "column",
});

export const date = style({
  color: "var(--Gray81)",
  fontSize: "1.4rem",
  fontWeight: "500",
  marginTop: "3rem",
});

export const diaryWrapper = style({
  display: "flex",
  gap: "1.9rem",
  justifyContent: "space-between",

  border: "1px solid var(--GrayE8)",
  borderRadius: "10px",

  boxShadow: " 0px 1px 4px 1px rgba(164, 164, 164, 0.15)",

  padding: "1.5rem 1.3rem",
  marginTop: "1rem",

  width: "100%",
  height: "12rem",

  cursor: "pointer",
});

export const contents = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const writer = style({
  marginRight: "0.8rem",

  padding: "0.4rem 0.8rem",

  fontSize: "1.1rem",
  fontWeight: "500",
  color: "var(--MainOrange)",

  borderRadius: "5px",

  backgroundColor: "var(--LightOrange)",
});

export const diaryImage = style({
  borderRadius: "6px",

  objectFit: "cover",
});

export const description = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  fontSize: "1.2rem",
  lineHeight: "1.6rem",
  color: "var(--Gray81)",

  marginTop: "0.6rem",
});

export const writeIcon = style({
  position: "fixed",
  bottom: "6.9rem",
  right: "1.9rem",

  cursor: "pointer",
});

const loadingAnimation = keyframes({
  "100%": { backgroundPosition: "-100% 0" },
});

export const loadingThumbnail = style({
  width: "9rem",
  height: "9rem",

  willChange: "background-position",
  background: "linear-gradient(120deg, #ffeee4 30%, #ffffff 38%, #ffffff 40%, #ffeee4 48%)",
  backgroundSize: "200% 100%",
  borderRadius: "10px",
  backgroundPosition: "100% 0",
  animation: `${loadingAnimation} 1s infinite`,
});
