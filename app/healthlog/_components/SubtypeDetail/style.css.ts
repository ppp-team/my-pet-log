import { Z_INDEX } from "@/styles/zindex.css";
import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
  width: "100%",

  marginTop: "1rem",
  padding: "1.8rem",
  gap: "1rem",

  display: "flex",
  flexDirection: "column",

  borderRadius: "10px",
  backgroundColor: "var(--MainOrange)",
  color: "var(--White)",
});

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",

  gap: "1rem",
});

export const inputBox = style({
  width: "100%",
  height: "4rem",

  padding: "1rem",

  borderRadius: "10px",
  border: "1.5px solid var(--White)",

  backgroundColor: "var(--MainOrange)",
  color: "var(--White)",

  "::placeholder": {
    color: "var(--White)",
  },

  ":focus": {
    backgroundColor: "var(--White)",
    color: "var(--MainOrange)",
  },
});

export const selectWrapper = style({
  display: "flex",
  flexDirection: "column",

  position: "relative",

  gap: "1rem",
});

export const selectBox = style({
  width: "100%",
  height: "4rem",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "0 1rem",

  borderRadius: "10px",
  border: "1.5px solid var(--White)",

  backgroundColor: "var(--MainOrange)",
  color: "var(--White)",
  textAlign: "left",
});

export const selectBoxOpen = style({
  backgroundColor: "var(--White)",
  color: "var(--MainOrange)",
});

export const dropdownIcon = style({
  width: "1rem",
  height: "1rem",

  fill: "var(--White)",
});

export const dropdownIconOpen = style({
  transform: "rotate(180deg)",

  fill: "var(--MainOrange)",
});

export const optionsList = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",

  position: "absolute",
  top: "7.9rem",
  left: "0",

  padding: "0",
  margin: "0",

  listStyle: "none",

  backgroundColor: "var(--White)",
  color: "var(--Black)",
  borderRadius: "10px",
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  zIndex: Z_INDEX.SubtypeDetail_optionsList,
});

export const optionButton = style({
  width: "100%",
  height: "4.8rem",

  padding: "1rem",
  textAlign: "left",

  borderRadius: "10px",
  border: "1.5px solid var(--White)",

  backgroundColor: "var(--White)",
  color: "var(--Black)",
  fontWeight: "500",

  cursor: "pointer",

  ":hover": {
    backgroundColor: "var(--LightOrange)",
    color: "var(--MainOrange)",
  },
});

export const textBox = style({
  width: "100%",
  height: "8rem",

  padding: "1rem",

  borderRadius: "10px",
  border: "1.5px solid var(--White)",

  backgroundColor: "var(--MainOrange)",
  color: "var(--White)",

  "::placeholder": {
    color: "var(--White)",
  },

  ":focus": {
    backgroundColor: "var(--White)",
    color: "var(--MainOrange)",
  },
});

export const p = style({
  fontSize: "1.2rem",
  fontWeight: "500",
  color: "var(--White)",
});

export const error = style({
  color: "var(--Red)",
  fontSize: "1.1rem",
  fontWeight: "500",
});

export const checkboxWrapper = style({
  display: "flex",
});

export const checkBox = style({
  height: "2.4rem",

  display: "flex",
  alignItems: "center",

  position: "relative",
  paddingLeft: "3rem",

  cursor: "pointer",
  userSelect: "none",
});

export const inputCheckbox = style({
  width: 0,
  height: 0,

  position: "absolute",
  opacity: 0,
});

export const checkBoxOn = style({
  width: "2.4rem",
  height: "2.4rem",

  position: "absolute",
  top: 0,
  left: 0,

  borderRadius: "50%",
  border: "1.5px solid var(--White)",
  backgroundColor: "transparent",
});

// 선택되지 않은 체크박스의 가상 요소 스타일 정의
globalStyle(`${checkBoxOn}::after`, {
  content: "",
  position: "absolute",
  display: "none",
});

// 선택된 체크박스의 가상 요소 스타일 정의
globalStyle(`${checkBox} input:checked + ${checkBoxOn}::after`, {
  content: "",
  display: "block",
  width: "0.5rem",
  height: "1rem",
  border: "solid var(--MainOrange)",
  borderWidth: "0 3px 3px 0",
  transform: "translate(-50%, -50%) rotate(45deg)",
  left: "50%",
  top: "40%",
});

// 선택된 체크박스의 스타일 정의
globalStyle(`${checkBox} input:checked + ${checkBoxOn}`, {
  backgroundColor: "var(--White)",
  borderColor: "var(--White)",
});
