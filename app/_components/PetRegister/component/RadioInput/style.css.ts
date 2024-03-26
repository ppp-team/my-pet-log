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

export const error = style({
  color: "var(--Red)",
  fontSize: "1.1rem",
  fontWeight: "500",
});

//라디오 인풋
export const radioContainer = style({
  display: "flex",
});

export const radioWrapper = style({
  width: "100%",

  border: "solid 1.5px var(--GrayE2)",

  padding: "1.3rem 0 1.3rem 1.9rem",

  color: "var(--Gray81)",
  fontSize: "1.6rem",
  fontWeight: "600",

  float: "left",

  cursor: "pointer",
});

export const leftRadio = style([radioWrapper, { borderRadius: "10px 0px 0px 10px" }]);

export const rightRadio = style([radioWrapper, { borderRadius: "0px 10px 10px 0px" }]);

export const checkedRadio = style({
  color: "var(--MainOrange)",
  backgroundColor: "var(--LightOrange)",
  border: "solid 1.5px var(--MainOrange)",
});
