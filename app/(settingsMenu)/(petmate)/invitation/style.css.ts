import { style } from "@vanilla-extract/css";

export const header = style({
  padding: "1.8rem 1.6rem",
  backgroundColor: "#F4F4F4",
});

export const invitation = style({
  padding: "1.6rem 1.8rem",

  borderRadius: "10px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  backgroundColor: "#fff",
  fontSize: "1.4rem",
  fontWeight: "600",
  boxShadow: "0px 2px 4px 2px rgba(164, 164, 164, 0.25)",
});

export const invitationButton = style({
  color: "#FF8746",
  textAlign: "center",
  fontSize: "1.4rem",
  fontWeight: "600",
});

export const main = style({
  padding: "2.4rem 1.5rem 0",

  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const member = style({
  padding: "1.2rem 1.6rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  borderRadius: "10px",
  border: "2px solid orange",
});

export const profileWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "1.4rem",
});

export const profileImg = style({
  width: "4rem",
  height: "4rem",

  borderRadius: "50%",
  border: "1px solid orange",
  backgroundSize: "contain",
});

export const nickname = style({
  fontSize: "1.6rem",
  fontWeight: "600",
});

export const state = style({
  width: "5.4rem",
  height: "2.1rem",

  borderRadius: "5px",

  backgroundColor: "rgba(255, 225, 208, 1)",
  color: "#ff8746",
  textAlign: "center",
  fontSize: "1.2rem",
  fontWeight: "600",
  lineHeight: "2.1rem",
});

export const cancelButton = style({
  color: "orange",
  fontSize: "1.6rem",
  fontWeight: "500",
});
