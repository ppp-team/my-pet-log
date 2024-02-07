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
  marginBottom: "0.6rem",

  fontSize: "1.6rem",
  fontWeight: "600",
});

export const input = style({
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

export const selectBox = style({
  width: "100%",
  height: "3rem",

  padding: "0 1rem",

  borderRadius: "10px",
  border: "1px solid var(--MainOrange)",
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
  display: "inline-block",
  padding: "1.3rem 14.5rem 1.3rem 1.9rem",
  fontSize: "1.6rem",
  // border: "solid 1px transparent",
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
