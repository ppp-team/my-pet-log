import { style } from "@vanilla-extract/css";

export const header = style({
  padding: "1.8rem 1.6rem",
  backgroundColor: "var(--GrayF4)",
});

export const invitation = style({
  padding: "1.6rem 1.8rem",

  borderRadius: "10px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  backgroundColor: "var(--White)",
  fontSize: "1.4rem",
  fontWeight: "600",
  boxShadow: "0px 2px 4px 2px rgba(164, 164, 164, 0.25)",
});

export const invitationButton = style({
  color: "var(--MainOrange)",
  textAlign: "center",
  fontSize: "1.4rem",
  fontWeight: "600",
});

export const container = style({
  width: "28rem",

  padding: "2.6rem 2rem 2rem",

  borderRadius: "10px",
  backgroundColor: "var(--GrayF2)",
});

export const iconWrapper = style({
  width: "100%",

  display: "flex",
  justifyContent: "flex-end",

  cursor: "pointer",
});

export const title = style({
  width: "22rem",
  margin: "0 auto 3.5rem",

  fontSize: "1.6rem",
  fontWeight: "500",
  textAlign: "center",

  wordBreak: "keep-all",
});
