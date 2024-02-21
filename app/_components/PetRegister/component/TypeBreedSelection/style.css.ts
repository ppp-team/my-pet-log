import { style } from "@vanilla-extract/css";

// 타입, 품종

export const label = style({
  marginTop: "0.8rem",
  marginBottom: "0.6rem",

  fontSize: "1.6rem",
  fontWeight: "600",
});

export const selectBox = style({
  width: "100%",
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
  padding: "0",

  display: "flex",
  flexDirection: "column",

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

export const inputWrapper = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const input = style({
  width: "100%",
  padding: "1.3rem 1.8rem",
  marginBottom: "0.8rem",

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
