import { style, createVar } from "@vanilla-extract/css";

export const borderColor = createVar();
export const errorMessageVisibility = createVar();

export const form = style({
  display: "flex",
  flexDirection: "column",
  padding: "0 2rem",
  marginBottom: "3.5rem",
});

export const subtitle = style({
  fontSize: "1.6rem",
  fontWeight: "500",
  color: "#000",
});

export const receivedInvitationCodeInput = style({
  paddingTop: "1.1rem",
  paddingBottom: "1.1rem",
  borderBottom: `2px solid ${borderColor}`,
  backgroundColor: "transparent",
  fontSize: "1.6rem",
  fontWeight: "400",
  "::placeholder": {
    color: "#9f9f9f",
  },
});

export const button = style({
  padding: "0.9rem 0",
  borderRadius: "10px",
  backgroundColor: "#FF8743",
  fontSize: "1.6rem",
  fontWeight: "600",
  textAlign: "center",
  color: "#F2F2F2",
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
  color: "#FF3B30",
});
