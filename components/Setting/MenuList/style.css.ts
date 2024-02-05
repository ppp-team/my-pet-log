import { style } from "@vanilla-extract/css";

/* 초대받은 내역 ~ 로그아웃까지의 list */
export const list = style({
  width: "100%",

  marginBottom: "1rem",

  display: "flex",
  alignItems: "center",

  color: "#454545",
  fontSize: "1.6rem",
  fontStyle: "normal",
  fontWeight: "600",
});
