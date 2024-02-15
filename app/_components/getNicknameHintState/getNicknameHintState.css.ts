import { style } from "@vanilla-extract/css";

export const inputConfirmStyle = style({
  borderColor: "var(--Green)",
});

export const length = style({
  justifySelf: "flex-end",
  marginTop: "0.6rem",
  fontSize: "1.1rem",
  fontWeight: "600",
  color: "var(--Black)",
});

export const inputErrorStyle = style({
  borderColor: "var(--Red)",
});

export const hintContainer = style({
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "1fr auto",
  minHeight: "1.95rem",
});

export const maxLengthOver = style({
  color: "var(--Red)",
});
