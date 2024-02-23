import { style } from "@vanilla-extract/css";

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
