import { style } from "@vanilla-extract/css";

export const header = style({
  padding: "1.8rem 1.6rem",
  backgroundColor: "var(--GrayF4)",
});

export const invitation = style({
  height: "6.4rem",
  padding: "1.6rem 1.8rem",

  borderRadius: "10px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  backgroundColor: "var(--White)",
  fontSize: "1.4rem",
  fontWeight: "600",
  boxShadow: "0px 2px 4px 2px rgba(164, 164, 164, 0.25)",
  "@media": {
    "screen and (min-width: 744px)": {
      maxWidth: "45rem",
      margin: "0 auto",
    },
  },
});

export const invitationButton = style({
  color: "var(--MainOrange)",
  textAlign: "center",
  fontSize: "1.4rem",
  fontWeight: "600",
  fontFamily: "Pretendard",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "1.6rem",
    },
  },
});

export const inviteText = style({
  fontSize: "1.4rem",
  fontWeight: "600",
  fontFamily: "Pretendard",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "1.6rem",
    },
  },
});

export const container = style({
  width: "28rem",

  padding: "2.6rem 2rem 2rem",

  borderRadius: "10px",
  backgroundColor: "var(--GrayF2)",
  "@media": {
    "screen and (min-width: 744px)": {
      width: "35rem",
    },
  },
});

export const iconWrapper = style({
  width: "100%",

  display: "flex",
  justifyContent: "flex-end",

  cursor: "pointer",
});

export const title = style({
  width: "18rem",
  margin: "0 auto 3.5rem",

  fontSize: "1.6rem",
  fontWeight: "500",
  textAlign: "center",

  wordBreak: "keep-all",
  "@media": {
    "screen and (min-width: 744px)": {
      width: "22rem",
      fontSize: "2rem",
      marginBottom: "4.3rem",
    },
  },
});
