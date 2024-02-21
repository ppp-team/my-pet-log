import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  bottom: "7rem",

  fontSize: "1.3rem",
});

globalStyle(".Toastify__toast-container ", {
  width: "30rem",

  bottom: "10rem",
  left: "50%",
  transform: "translateX(-50%)",
});

globalStyle(".Toastify__toast ", {
  minHeight: "unset",
  padding: "1.2rem",

  borderRadius: "10px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: "rgba(0, 0, 0, 0.80)",
});

globalStyle(".Toastify__close-button", {
  alignSelf: "unset",
});

globalStyle(".Toastify__close-button--light", {
  color: "var(--White)",
  opacity: "unset",
});

globalStyle(".Toastify__toast-body", {
  padding: "unset",
});

globalStyle(".Toastify__close-button > svg", {
  display: "flex",
});
