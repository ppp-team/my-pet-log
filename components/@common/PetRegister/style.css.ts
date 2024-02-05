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
  border: "1px solid #d9d9d9",
});

export const radioWrapper = style({
  padding: "1.3rem 1.8rem",
});

export const rightRadio = style({
  borderRadius: "10px 0px 0px 10px",
  border: "1.5px solid var(--, #E2E2E2)",
});
