import { style } from "@vanilla-extract/css";

export const container = style({
  minHeight: "19.7rem",
  paddingLeft: "2rem",
  marginBottom: "2.4rem",
  "@media": {
    "screen and (min-width: 744px)": {
      paddingLeft: "2.5rem",
      marginBottom: "3rem",
    },
  },
});

export const subtitle = style({
  marginBottom: "1.2rem",
  fontSize: "1.6rem",
  fontWeight: "500",
  color: "#000",
  "@media": {
    "screen and (min-width: 744px)": {
      marginBottom: "2rem",
      fontSize: "2rem",
    },
  },
});

export const swiperOverride = style({
  overflow: "visible!important",
});

export const itemOverride = style({
  width: "auto!important",
});

export const item = style({
  display: "grid",
  justifyItems: "center",
  width: "12.4rem",
  height: "16.6rem",
  marginRight: "2rem",
  paddingTop: "2rem",
  paddingBottom: "1.6rem",
  borderRadius: "10px",
  border: "2px solid #FFE1D0",
  backgroundColor: "white",
  cursor: "default",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "16.6rem",
      height: "22.2rem",
      marginRight: "2.7rem",
      paddingTop: "3rem",
    },
  },
});

export const petImage = style({
  marginBottom: "1.6rem",
  borderRadius: "50%",
  border: "2px solid #FF8743",

  "@media": {
    "screen and (min-width: 744px)": {
      width: "6.6rem",
      height: "6.6rem",
    },
  },
});

export const petName = style({
  marginBottom: "0.3rem",
  fontSize: "1.4rem",
  fontWeight: "700",
  color: "#000",

  "@media": {
    "screen and (min-width: 744px)": {
      marginBottom: "0.8rem",
      fontSize: "1.6rem",
    },
  },
});

export const invitedDate = style({
  marginBottom: "0.7rem",
  fontSize: "1.2rem",
  fontWeight: "500",
  color: "#818181",
  "@media": {
    "screen and (min-width: 744px)": {
      marginBottom: "1.2rem",
      fontSize: "1.4rem",
    },
  },
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
  "@media": {
    "screen and (min-width: 744px)": {
      padding: "0.8rem 1.9rem",
      fontSize: "1.4rem",
    },
  },
});

export const acceptButton = style([responseButton, { border: "1px solid transparent", backgroundColor: "#FF8743", color: "white" }]);

export const declineButton = style([responseButton, { border: "1px solid #FF8743", backgroundColor: "white", color: "#FF8743" }]);

export const noInvitationContainer = style({
  display: "grid",
  gap: "1.2rem",
  justifyItems: "center",
  alignItems: "center",
  height: "16.6rem",
  paddingRight: "2rem",

  "@media": {
    "screen and (min-width: 744px)": {
      height: "22.2rem",
      paddingRight: "2.5rem",
    },
  },
});

export const noInvitationTitle = style({
  fontSize: "1.6rem",
  fontWeight: "400",
  color: "var(--Gray81)",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
    },
  },
});
