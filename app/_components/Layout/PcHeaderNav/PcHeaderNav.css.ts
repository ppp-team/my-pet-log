import { style } from "@vanilla-extract/css";

export const nav = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "121.4rem",
  height: "8rem",
  margin: "0 auto",
});

export const logo = style({
  width: "3.7rem",
  height: "3.6rem",
});

export const centerMenuList = style({
  display: "flex",
  alignItems: "center",
  gap: "6.4rem",
  marginLeft: "3.65rem",
});

export const menu = style({
  fontSize: "2rem",
  fontWeight: "600",
  color: "var(--Gray45)",
});

export const rightMenuList = style({
  display: "flex",
  gap: "3.6rem",
});

export const linkBase = style({
  display: "block",
  width: "8.9rem",
  height: "3.5rem",
  padding: "1rem 0 0.8rem 0",
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: "5px",
  fontSize: "1.4rem",
  fontWeight: "600",
  textAlign: "center",
});

export const linkSignUp = style([
  linkBase,
  {
    color: "var(--MainOrange)",
    borderColor: "var(--MainOrange)",
  },
]);

export const linkLogin = style([
  linkBase,
  {
    color: "var(--White)",
    backgroundColor: "var(--MainOrange)",
  },
]);
