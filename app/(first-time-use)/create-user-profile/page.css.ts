import { style } from "@vanilla-extract/css";

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

export const userProfileLabel = style({
  position: "relative",
  display: "inline-block",
  width: "auto",
  height: "auto",
  fontSize: "0",
  cursor: "pointer",
});

export const userProfileImageDefault = style({
  width: "12.6rem",
  height: "12.4rem",
  objectFit: "cover",
  overflow: "hidden",
  borderRadius: "50%",
});

export const userProfileImage = style({
  borderRadius: "50%",
});

export const cameraIcon = style({
  position: "absolute",
  bottom: "0.5rem",
  right: "0",
  padding: "0.4rem",
  borderRadius: "50%",
  border: "3px solid var(--White)",
  backgroundColor: "var(--LightOrange)",
});

export const idFieldset = style({ marginBottom: "2.7rem" });

export const nicknameFieldset = style({ marginBottom: "3.2rem" });

export const label = style({
  display: "block",
  marginBottom: "0.6rem",
  fontSize: "1.6rem",
  fontWeight: "600",
  color: "var(--Black)",
});

export const inputBoxStyle = style({
  width: "100%",
  minHeight: "5.1rem",
  padding: "0.8rem 1.8rem",
  borderRadius: "10px",
  border: `1.5px solid var(--GrayE2)`,
  backgroundColor: "var(--White)",
  fontSize: "1.6rem",
  fontWeight: "500",
  color: "var(--Gray81)",
});

export const inputFocusStyle = style({
  ":focus-within": {
    borderColor: "var(--MainOrange)",
  },
});

export const nicknameContainer = style({
  position: "relative",
  width: "100%",
});

export const idInput = style([
  inputBoxStyle,
  {
    cursor: "not-allowed",
  },
]);

export const nicknameInput = style([inputBoxStyle, inputFocusStyle]);

export const checkNicknameButton = style({
  position: "absolute",
  right: "0.9rem",
  top: "50%",
  transform: "translateY(-50%)",
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
