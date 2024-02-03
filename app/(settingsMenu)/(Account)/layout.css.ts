import { style } from "@vanilla-extract/css";

export const header = style({
  padding: "1.4rem 1.6rem",

  position: "relative",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderBottom: "1px solid #e2e2e2",
  fontSize: "1.6rem",
  fontWeight: "500",
});

export const closeIcon = style({
  position: "absolute",
  right: "1.6rem",
  top: "50%",
  transform: "translateY(-50%)",

  cursor: "pointer",
});

export const navItem = style({
  padding: "1.4rem 0",

  flex: 1,

  textAlign: "center",
  fontSize: "1.6rem",
  fontWeight: "500",
});

export const active = style([
  navItem,
  {
    color: "#000",
    borderBottom: "2px solid #FF8743",
  },
]);

export const noActive = style([
  navItem,
  {
    color: "#818181",
    borderBottom: "1px solid #e2e2e2",
  },
]);

export const navList = style({
  display: "flex",
});
