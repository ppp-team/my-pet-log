import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
  height: "6.6rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  margin: "0 1.6rem",
  gap: "0.5rem",

  fontSize: "1.2rem",

  "@media": {
    "screen and (min-width: 744px)": {
      height: "7.8rem",
    },
  },
});

export const listContainer = style({
  width: "100%",
  height: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  borderBottom: "1px solid var(--GrayC2)",

  transition: "transform 0.3s ease",
});

export const leftPart = style({
  display: "flex",
  alignItems: "center",

  gap: "1.2rem",
});

export const checkBox = style({
  display: "block",

  position: "relative",
  paddingLeft: "2.5rem",
  marginBottom: "2.5rem",

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
  border: "2px solid #c2c2c2",
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
  border: "solid #fff",
  borderWidth: "0 3px 3px 0",
  transform: "translate(-50%, -50%) rotate(45deg)",
  left: "50%",
  top: "40%",
});

// 선택된 체크박스의 스타일 정의
globalStyle(`${checkBox} input:checked + ${checkBoxOn}`, {
  backgroundColor: "var(--MainOrange)",
  borderColor: "var(--MainOrange)",
});

export const taskAndTimeBox = style({
  display: "flex",
  flexDirection: "column",

  gap: "0.3rem",
});

export const checkStar = style({
  display: "flex",
  alignItems: "center",

  gap: "0.2rem",
});

export const taskName = style({
  fontSize: "1.6rem",
});

export const time = style({
  color: "#c2c2c2",
});

export const manager = style({
  padding: "0.4rem 0.8rem",

  borderRadius: "5px",

  backgroundColor: "#FFE1D0",
  color: "#FF8743",
});

export const swipeArea = style({
  display: "flex",
  flexDirection: "column",
  overflow: "visible",
  transition: "transform 0.6s ease",
});

export const swipeButtons = style({
  display: "flex",

  marginRight: "-1.6rem",
});

export const editButton = style({
  width: "6.6rem",
  height: "6.6rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "#8E8E93",
  color: "white",
  fontSize: "1.4rem",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "7.8rem",
      height: "7.8rem",
    },
  },
});

export const deleteButton = style({
  width: "6.6rem",
  height: "6.6rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "#FF3B30",
  color: "white",
  fontSize: "1.4rem",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "7.8rem",
      height: "7.8rem",
    },
  },
});

export const logDetailContainer = style({
  margin: "1rem 1.6rem",
});
