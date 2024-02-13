import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  bottom: "7rem",

  fontSize: "1.3rem",
});

globalStyle(".Toastify__toast-container ", {
  width: "20rem",

  bottom: "10rem",
  left: "50%",
  transform: "translateX(-50%)",
});

globalStyle(".Toastify__toast ", {
  minHeight: "unset",
  padding: "1.2rem",

  borderRadius: "6px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
});

globalStyle(".Toastify__close-button", {
  alignSelf: "unset",
});

globalStyle(".Toastify__toast-body", {
  padding: "unset",
});

globalStyle(".Toastify__close-button > svg", {
  display: "flex",
});
