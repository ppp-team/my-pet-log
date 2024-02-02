import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "2.4rem 1.5rem 0",

  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const member = style({
  padding: "1.2rem 1.6rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  borderRadius: "10px",
  border: "2px solid orange",
});

export const profileWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "1.4rem",
});

export const profileImg = style({
  width: "4rem",
  height: "4rem",

  borderRadius: "50%",
  border: "1px solid orange",
  backgroundSize: "contain",
});

export const nickname = style({
  fontSize: "1.6rem",
  fontWeight: "600",
});

export const deleteButton = style({
  color: "orange",
  fontSize: "1.6rem",
  fontWeight: "500",
});
