import { style } from "@vanilla-extract/css";

export const container = style({ paddingLeft: "2rem" });

export const subtitle = style({ marginBottom: "1.2rem", fontSize: "1.6rem", fontWeight: "500", color: "#000" });

export const itemOverride = style({
  width: "auto!important",
});

export const item = style({
  display: "grid",
  justifyItems: "center",
  width: "12.4rem",
  height: "16.6rem",
  paddingTop: "2rem",
  paddingBottom: "1.6rem",
  borderRadius: "10px",
  border: "2px solid #FFE1D0",
  backgroundColor: "white",
  cursor: "default",
});

export const petImage = style({
  marginBottom: "1.6rem",
  borderRadius: "50%",
  border: "2px solid #FF8743",
});

export const petName = style({
  marginBottom: "0.3rem",
  fontSize: "1.4rem",
  fontWeight: "700",
  color: "#000",
});

export const invitedDate = style({
  marginBottom: "0.7rem",
  fontSize: "1.2rem",
  fontWeight: "500",
  color: "#818181",
});

export const responseContainer = style({
  display: "flex",
  gap: "0.7rem",
});

export const responseButton = style({
  fontSize: "1.2rem",
  fontWeight: "600",
  padding: "0.6rem 1.2rem",
  borderRadius: "5px",
});

export const acceptButton = style([responseButton, { border: "1px solid transparent", backgroundColor: "#FF8743", color: "white" }]);

export const declineButton = style([responseButton, { border: "1px solid #FF8743", backgroundColor: "white", color: "#FF8743" }]);
