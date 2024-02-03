import { style } from "@vanilla-extract/css";

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
  background: "#E8E8E8",

  margin: "2.4rem 0",
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
  gap: "3rem",
});

export const diaryListWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const date = style({
  color: "#818181",
  fontSize: "1.4rem",
  fontWeight: "500",
});

export const diaryWrapper = style({
  display: "flex",
  gap: "1.9rem",
  justifyContent: "space-between",

  border: "1px solid #E8E8E8",
  borderRadius: "10px",

  boxShadow: " 0px 1px 4px 1px rgba(164, 164, 164, 0.15)",

  padding: "1.5rem 1.3rem",

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
  width: "9rem",
  height: "9rem",

  borderRadius: "6px",

  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const description = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  fontSize: "1.2rem",
  lineHeight: "1.6rem",
  color: "#818181",

  marginTop: "0.6rem",
});

export const writeIcon = style({
  position: "fixed",
  bottom: "1.3rem",
  right: "1.9rem",

  cursor: "pointer",
});
