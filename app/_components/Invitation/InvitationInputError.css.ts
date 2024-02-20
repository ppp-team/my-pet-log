import { style, createVar } from "@vanilla-extract/css";

export const errorMessageVisibility = createVar();

export const errorMessageContainer = style({
  visibility: errorMessageVisibility,
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  paddingTop: "0.8rem",
  paddingBottom: "0.8rem",
});

export const errorMessage = style({
  fontSize: "1rem",
  fontWeight: "500",
  color: "var(--Red)",
});
