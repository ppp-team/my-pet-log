import { style } from "@vanilla-extract/css";

export const container = style({
  paddingTop: "11.6rem",
  paddingLeft: "1.6rem",
  paddingRight: "1.6rem",
  textAlign: "center",
  "@media": {
    "screen and (min-width: 744px)": {
      margin: "0 auto",
      paddingTop: "14.6rem",
      paddingLeft: "0",
      paddingRight: "0",
      maxWidth: "45rem",
    },
  },
});

export const title = style({
  marginBottom: "3rem",
  fontSize: "2.4rem",
  fontWeight: "700",
  color: "var(--Black)",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "3.6rem",
    },
  },
});

export const subTitle = style({
  marginBottom: "4.5rem",
  fontSize: "1.6rem",
  fontWeight: "400",
  color: "var(--Black)",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
    },
  },
});

export const mockUpImage = style({
  width: "20.3rem",
  height: "25.4rem",
  marginBottom: "4.4rem",
  "@media": {
    "screen and (min-width: 744px)": {
      width: "23.9rem",
      height: "30rem",
      marginBottom: "6rem",
    },
  },
});

export const linkBase = style({
  display: "inline-block",
  width: "100%",
  padding: "0.9rem 0",
  borderRadius: "30px",
  fontSize: "1.6rem",
  fontWeight: "600",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "2rem",
      padding: "1.1rem 0 1rem 0",
    },
  },
});

export const linkCreate = style([
  linkBase,
  {
    marginBottom: "1.6rem",
    backgroundColor: "var(--MainOrange)",
    color: "var(--White)",
  },
]);

export const linkParticipate = style([
  linkBase,
  {
    backgroundColor: "var(--LightOrange)",
    color: "var(--MainOrange)",
  },
]);
