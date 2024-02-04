import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "28rem",
  height: "53.6rem",
  paddingTop: "2.6rem",
  borderRadius: "10px",
  backgroundColor: "#F2F2F2",
});

export const closeButton = style({
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "2.3rem",
});

export const title = style({
  marginTop: "0.1rem",
  marginBottom: "3.5rem",
  fontSize: "1.6rem",
  fontWeight: "500",
  textAlign: "center",
  color: "#000",
});
