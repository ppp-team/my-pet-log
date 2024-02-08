import { style, createVar } from "@vanilla-extract/css";

export const borderColor = createVar();
export const errorMessageVisibility = createVar();

export const form = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: "3.5rem",
});

export const formTitle = style({
  fontSize: "1.6rem",
  fontWeight: "500",
  color: "var(--Black)",
});

export const input = style({
  paddingTop: "1.1rem",
  paddingBottom: "1.1rem",
  borderBottom: `2px solid ${borderColor}`,
  backgroundColor: "transparent",
  fontSize: "1.6rem",
  fontWeight: "400",
  "::placeholder": {
    color: "var(--Gray9f)",
  },
});

export const button = style({
  padding: "0.9rem 0",
  borderRadius: "30px",
  backgroundColor: "var(--MainOrange)",
  fontSize: "1.6rem",
  fontWeight: "600",
  color: "var(--White)",
  textAlign: "center",
});

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
