import { style } from "@vanilla-extract/css";

export const buttonCommon = style({
  width: "4.6rem",
  height: "2.5rem",

  borderRadius: "5px",

  fontWeight: "600",
  fontSize: "1.2rem",
  "@media": {
    "screen and (min-width: 744px)": {
      width: "5.7rem",
      height: "3.1rem",

      fontSize: "1.4rem",
    },
  },
});

export const groupdateCommon = style({
  color: "var(--Gray81)",
  fontSize: "1.4rem",
  fontWeight: "500",

  "@media": {
    "screen and (max-width: 335px)": {
      fontSize: "1.3rem",
    },

    "screen and (max-width: 327px)": {
      fontSize: "1.1rem",
    },
  },
});

export const container = style({
  padding: "2.4rem 1.5rem 0",

  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  "@media": {
    "screen and (min-width: 744px)": {
      maxWidth: "45rem",
      paddingTop: "3.6rem",
      margin: "0 auto",
      gap: "2rem",
    },
  },
});

export const list = style({
  padding: "1.6rem 2.2rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1.8rem",

  borderRadius: "10px",
  border: "2px solid var(--LightOrange)",
  "@media": {
    "screen and (min-width: 744px)": {
      height: "10rem",
      gap: "2rem",
    },
  },
});

export const infoContainer = style({
  width: "100%",
});

export const text = style({
  marginBottom: "0.6rem",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  "@media": {
    "screen and (min-width: 744px)": {
      gap: "1.7rem",
      marginBottom: "1rem",
    },
  },
});

export const profileImg = style({
  width: "4rem",
  height: "4rem",

  minWidth: "4rem",
  minHeight: "4rem",

  borderRadius: "50%",
  border: "2px solid var(--MainOrange)",
  objectFit: "cover",
  "@media": {
    "screen and (min-width: 744px)": {
      width: "6.4rem",
      height: "6.4rem",

      minWidth: "6.4rem",
      minHeight: "6.4rem",
    },
  },
});

export const petname = style({
  fontSize: "1.6rem",
  fontWeight: "600",

  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  "@media": {
    "screen and (min-width: 744px)": {
      fontSize: "1.6rem",
      fontWeight: "700",
    },
  },
});

export const group = style([
  groupdateCommon,
  {
    marginRight: "auto",
    "@media": {
      "screen and (min-width: 744px)": {
        fontSize: "1.6rem",
        fontWeight: "500",
      },
    },
  },
]);

export const date = style([
  groupdateCommon,
  {
    "@media": {
      "screen and (min-width: 744px)": {
        fontSize: "1.6rem",
      },
    },
  },
]);

export const acceptButton = style([
  buttonCommon,
  {
    marginRight: "0.8rem",

    backgroundColor: "var(--MainOrange)",
    color: "var(--White)",
  },
]);

export const refuseButton = style([
  buttonCommon,
  {
    border: "1px solid var(--MainOrange)",
    backgroundColor: "var(--White)",
    color: "var(--MainOrange)",
  },
]);
