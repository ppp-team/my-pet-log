import { style, createVar } from "@vanilla-extract/css";

export const container = style({
  paddingLeft: "1.6rem",
  paddingRight: "1.6rem",
});

export const form = style({
  display: "grid",
});

export const userProfileImageContainer = style({
  paddingTop: "5.2rem",
  paddingBottom: "4.9rem",
  textAlign: "center",
});

export const userProfileImage = style({
  width: "12.6rem",
  height: "12.4rem",
  objectFit: "cover",
});

export const fieldset = style({
  display: "grid",
  gap: "0.6rem",
});

export const idFieldset = style([fieldset, { marginBottom: "2.7rem" }]);

export const nicknameFieldset = style([fieldset, { marginBottom: "3.2rem" }]);

export const label = style({
  fontSize: "1.6rem",
  fontWeight: "600",
  color: "var(--Black)",
});

export const length = style({
  fontSize: "1.2rem",
  fontWeight: "600",
  color: "var(--Black)",
});

export const maxLengthOver = style({
  color: "var(--Red)",
});

export const inputBoxStyle = style({
  minHeight: "5.1rem",
  padding: "0.8rem 1.8rem",
  borderRadius: "10px",
  border: `1.5px solid var(--GrayE2)`,
  backgroundColor: "var(--White)",
  fontSize: "1.6rem",
  fontWeight: "500",
  color: "var(--Gray81)",
});

export const nicknameInputContainer = style([
  inputBoxStyle,
  {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr auto",
    alignItems: "center",
  },
]);

export const idInput = style([
  inputBoxStyle,
  {
    cursor: "not-allowed",
  },
]);

export const inputErrorStyle = style({
  borderColor: "var(--Red)",
});

export const inputConfirmStyle = style({
  borderColor: "var(--Green)",
});

export const checkNicknameButton = style({
  padding: "0.8rem 0.9rem",
  borderRadius: "5px",
  backgroundColor: "var(--LightOrange)",
  color: "var(--MainOrange)",
});

export const submitButton = style({
  minHeight: "4.5rem",
  padding: "0.9rem 0",
  borderRadius: "10px",
  backgroundColor: "#FF8743",
  fontSize: "1.6rem",
  fontWeight: "600",
  textAlign: "center",
  color: "var(--GrayF2)",
});
