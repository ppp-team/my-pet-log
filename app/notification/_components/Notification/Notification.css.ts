import { style } from "@vanilla-extract/css";

export const containerBasic = style({
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  gap: "0.4rem 0.8rem",
  padding: "1.2rem 1.6rem",
  borderRadius: "10px",
  border: "2px solid var(--GrayE8)",
  backgroundColor: "var(--White)",
});

export const containerPast = style([
  containerBasic,
  {
    opacity: "0.7",
  },
]);

export const thumbnail = style({
  borderRadius: "50%",
  overflow: "hidden",
});

export const thumbnailWrapperBasic = style({
  width: "3rem",
  height: "3rem",
  position: "relative",
  gridColumn: "1 / 2",
  gridRow: "1 / 3",
});

export const thumbnailWrapperNew = style([
  thumbnailWrapperBasic,
  {
    "::before": {
      content: "",
      display: "inline-block",
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "1",
      width: "0.3rem",
      height: "0.3rem",
      borderRadius: "10px",
      backgroundColor: "var(--MainOrange)",
    },
  },
]);

export const type = style({
  gridColumn: "2 / 3",
  gridRow: "1 / 2",
  fontSize: "1.4rem",
  fontWeight: "700",
  color: "var(--MainOrange)",
});

export const date = style({
  gridColumn: "3 / 4",
  gridRow: "1 / 2",
  fontSize: "1.4rem",
  fontWeight: "400",
  color: "var(--GrayA4)",
});

export const content = style({
  gridColumn: "2 / 4",
  gridRow: "2 / 3",
  fontSize: "1.4rem",
  fontWeight: "400",
  color: "var(--Gray2E)",
});
