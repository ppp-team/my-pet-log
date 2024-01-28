import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "1.9rem 4.2rem",
});

/* 마이 _ 관리하기 */
export const title = style({
  fontSize: "1.6rem",
});

export const listContainer = style({
  display: "flex",
  flexDirection: "column",
});

/* 초대받은 내역 ~ 로그아웃까지의 list */
export const list = style({
  width: "100%",

  marginBottom: "1rem",

  fontSize: "1.6rem",
  fontStyle: "normal",
  fontWeight: "600",
});

export const logout = style({
  fontSize: "1.6rem",
  fontStyle: "normal",
  fontWeight: "600",
});
