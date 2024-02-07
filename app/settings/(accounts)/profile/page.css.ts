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
  border: "3px solid var(--White)",
  backgroundColor: "var(--GrayF2)",
});

export const label = style({
  margin: "0.6rem 0",

  fontSize: "1.6rem",
  fontWeight: "600",
});

export const input = style({
  padding: "1.3rem 1.8rem",

  borderRadius: "10px",
  border: "1.5px solid var(--GrayE2)",

  fontSize: "1.6rem",
  fontWeight: "600",

  ":focus": {
    outline: "none",
  },
});

export const nickname = style([
  input,
  {
    ":focus": {
      border: "1.5px solid  var(--MainOrange)",
    },
  },
]);

export const email = style([
  input,
  {
    color: "var(--Gray81)",
    cursor: "not-allowed",
  },
]);

//슬추수
export const length = style({
  marginTop: "1rem",

  fontSize: "1.4rem",
  fontWeight: "600",
  color: "var(--MainOrange)",
});

export const button = style({
  padding: "1.3rem 0",
  marginTop: "2.4rem",

  borderRadius: "30px",

  color: "var(--White)",
  backgroundColor: "var(--MainOrange)",
});
