import { style } from "@vanilla-extract/css";

//타이틀 헤더
export const header = style({
  padding: "1.8rem 1.6rem",

  position: "relative",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderBottom: "1px solid var(--GrayE2)",
  fontSize: "1.6rem",
  fontWeight: "500",
});

export const backIcon = style({
  position: "absolute",
  top: "50%",
  left: "1.6rem",
  transform: "translateY(-50%)",

  cursor: "pointer",
});

export const closeIcon = style({
  position: "absolute",
  right: "1.6rem",
  top: "50%",
  transform: "translateY(-50%)",

  cursor: "pointer",
});

//폼
export const formContainer = style({
  padding: "5rem 1.6rem",
  width: "100%",

  display: "flex",
  flexDirection: "column",

  overflowY: "auto",
  "::-webkit-scrollbar": {
    width: "1px",
    height: "5px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "var(--White)",
  },
});

//프로필
export const profile = style({
  marginBottom: "5rem",

  display: "flex",
  justifyContent: "center",

  position: "relative",
});

export const image = style({
  width: "12.6rem",
  height: "12.6rem",

  position: "relative",

  borderRadius: "50%",

  backgroundSize: "cover",
  backgroundPosition: "center",

  cursor: "pointer",
});

export const cameraWrapper = style({
  width: "100%",
});

export const fileUploadInput = style({
  width: "100%",
});

export const cameraIcon = style({
  position: "absolute",
  right: "0",
  bottom: "0.5rem",

  padding: "0.4rem",

  borderRadius: "50%",
  border: "3px solid #fff",
  backgroundColor: "#f2f2f2",

  cursor: "pointer",
});

//공통 라벨, 인풋
export const label = style({
  marginTop: "0.8rem",
  marginBottom: "0.6rem",

  fontSize: "1.6rem",
  fontWeight: "600",
});

export const input = style({
  padding: "1.3rem 1.8rem",

  borderRadius: "10px",
  border: "1.5px solid #e2e2e2",

  fontSize: "1.6rem",
  fontWeight: "600",

  ":focus": {
    outline: "none",
  },
});

export const writeInput = style([
  input,
  {
    ":focus": {
      border: "1.5px solid  var(--MainOrange)",
    },
  },
]);

export const button = style({
  padding: "1.3rem 0",
  marginTop: "3.1rem",

  borderRadius: "30px",

  color: "#fff",
  backgroundColor: "var(--MainOrange)",

  ":disabled": {
    backgroundColor: "var(--GrayB1)",
  },
});

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
});

// 타입, 품종
export const selectBox = style({
  width: "100%",
  padding: "1.3rem 1.8rem",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "10px",
  border: "1.5px solid #e2e2e2",

  color: "var(--Gray81)",
  fontSize: "1.6rem",
  fontWeight: "600",
});

export const inputBox = style({
  width: "100%",
  height: "4rem",

  padding: "1rem",

  borderRadius: "10px",
  border: "1.5px solid var(--White)",

  backgroundColor: "var(--MainOrange)",
  color: "var(--White)",
  textAlign: "left",

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

export const selectBoxOpen = style({
  backgroundColor: "var(--White)",
});

export const dropdownIcon = style({
  width: "1rem",
  height: "1rem",

  fill: "var(--MainOrange)",
});

export const dropdownIconOpen = style({
  transform: "rotate(180deg)",

  fill: "var(--MainOrange)",
});

export const optionsList = style({
  width: "100%",
  maxHeight: "48rem",

  display: "flex",
  flexDirection: "column",

  listStyle: "none",

  backgroundColor: "var(--White)",
  color: "var(--Black)",
  borderRadius: "10px",
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  zIndex: 1,

  overflowY: "auto",
  "::-webkit-scrollbar": {
    width: "1px",
    height: "5px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "var(--White)",
  },
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

//라디오 인풋
export const radioContainer = style({
  display: "flex",
  flexDirection: "row",

  position: "relative",
  border: "none",
  borderRadius: "10px",
});

export const radioOption = style({
  width: "100%",
  padding: "1.3rem 14.5rem 1.3rem 1.9rem",

  display: "inline-block",

  color: "var(--Gray81)",
  fontSize: "1.6rem",
  fontWeight: "600",
  float: "left",
  cursor: "pointer",
});

export const leftRadio = style({
  width: "100%",
  border: "solid 1.5px var(--GrayE2)",
  borderRadius: "10px 0px 0px 10px",
});

export const rightRadio = style({
  marginLeft: "-0.1rem",
  width: "100%",
  border: "solid 1.5px var(--GrayE2)",
  borderRadius: "0px 10px 10px 0px",
});

export const leftSelected = style({
  width: "100%",

  borderRadius: "10px 0px 0px 10px",
  color: "var(--MainOrange)",
  backgroundColor: "var(--LightOrange)",
});

export const rightSelected = style({
  width: "100%",

  borderRadius: "0px 10px 10px 0px",
  color: "var(--MainOrange)",
  backgroundColor: "var(--LightOrange)",
});

export const leftSelectedBorder = style([leftSelected, { border: "1.5px solid var(--MainOrange)", zIndex: 1 }]);

export const rightSelectedBorder = style([rightSelected, { border: "1.5px solid var(--MainOrange)", zIndex: 1 }]);

export const deleteButtonWrapper = style({});
export const deleteButton = style({
  marginTop: "3.2rem",
  padding: "0.6rem 1.4rem",
  borderRadius: "5px",
  border: "1px solid var(--Gray81)",

  color: "var(--Gray81)",

  fontSize: "1.4rem",
  fontWeight: 500,

  background: "var(--White)",

  ":hover": {
    color: "var(--White)",
    background: "var(--GrayE2)",
    border: "1px solid var(--GrayE2)",
  },
});

export const plusMarginWrapper = style({
  display: "flex",
  width: "100%",
  marginTop: "0.6rem",
});
