import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "54rem",
  height: "25rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "8px",
  background: "lightgrey",
});

export const contents = style({
  marginTop: "10.8rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "black",
  fontSize: "1.8rem",
  fontWeight: 500,
});

export const buttonWrapper = style({
  marginTop: "4.5rem",
});

export const styledButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid grey",
  borderRadius: "8px",
  backgroundColor: "white",
  color: "black",
  fontWeight: 500,
  width: "12rem",
  padding: "1.4rem 0",
});
