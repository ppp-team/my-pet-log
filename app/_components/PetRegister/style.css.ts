import { style } from "@vanilla-extract/css";

export const formContainer = style({
  padding: "5rem 1.5rem",

  display: "flex",
  flexDirection: "column",
});

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
});

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
  marginTop: "2.4rem",

  borderRadius: "30px",

  color: "#fff",
  backgroundColor: "var(--MainOrange)",
});

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
});

// 타입, 품종

export const selectBox = style({
  padding: "1.3rem 1.8rem",
  marginBottom: "0.8rem",

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

// export const selectBox = style({
//   width: "100%",
//   height: "4rem",

//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",

//   padding: "0 1rem",

//   borderRadius: "10px",
//   border: "1.5px solid var(--White)",

//   backgroundColor: "var(--MainOrange)",
//   color: "var(--White)",
//   textAlign: "left",
// });

export const selectBoxOpen = style({
  backgroundColor: "var(--White)",
  color: "var(--MainOrange)",
});

export const dropdownIcon = style({
  width: "1rem",
  height: "1rem",

  fill: "var(--MainOrange)",
});

export const dropdownIconOpen = style({
  transform: "rotate(180deg)",

  fill: "var(--White)",
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
  zIndex: 1,
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
  border: "1.5px var(--LightOrange)",
  borderRadius: "5px",
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
  border: "solid 1px rgba(0, 0, 0, .15)",
});

export const rightRadio = style({
  width: "100%",
  border: "solid 1px rgba(0, 0, 0, .15)",
});

export const leftSelected = style({
  width: "100%",

  borderRadius: "10px 0px 0px 10px",
  border: "1.5px solid var(--MainOrange)",

  color: "var(--MainOrange)",
  backgroundColor: "var(--LightOrange)",
});

export const rightSelected = style({
  width: "100%",

  borderRadius: "0px 10px 10px 0px",
  border: "1.5px solid var(--MainOrange)",

  color: "var(--MainOrange)",
  backgroundColor: "var(--LightOrange)",
});
