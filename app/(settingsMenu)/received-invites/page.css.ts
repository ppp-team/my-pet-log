import { style } from "@vanilla-extract/css";

export const buttonCommon = style({
  width: "4.6rem",
  height: "2.5rem",

  borderRadius: "5px",

  fontWeight: "600",
  fontSize: "1.2rem",
});

export const groupdateCommon = style({
  color: "#818181",
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
});

export const list = style({
  padding: "1.6rem 2.2rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1.8rem",

  borderRadius: "10px",
  border: "2px solid var(--LightOrange)",
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
});

export const profileImg = style({
  width: "4rem",
  height: "4rem",

  minWidth: "4rem",
  minHeight: "4rem",

  borderRadius: "50%",
  border: "2px solid orange",
  backgroundSize: "contain",
});

export const petname = style({
  width: "6rem",

  fontSize: "1.6rem",
  fontWeight: "600",

  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const group = style([
  groupdateCommon,
  {
    marginRight: "auto",
  },
]);

export const date = style([groupdateCommon]);

export const acceptButton = style([
  buttonCommon,
  {
    marginRight: "0.8rem",

    backgroundColor: "var(--MainOrange)",
    color: "#fff",
  },
]);

export const refuseButton = style([
  buttonCommon,
  {
    border: "1px solid var(--MainOrange)",
    backgroundColor: "#fff",
    color: "var(--MainOrange)",
  },
]);
