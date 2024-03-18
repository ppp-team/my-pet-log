import { style } from "@vanilla-extract/css";

export const notificationPageContainer = style({
  display: "grid",
  gap: "3.2rem",
  padding: "2.4rem 1.6rem",
});

export const notificationContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

export const newNotificationList = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const title = style({
  fontSize: "1.4rem",
  fontWeight: "700",
  color: "var(--Gray81)",
});

export const pastNotificationTitleArea = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const deleteButton = style({
  fontSize: "1.4rem",
  fontWeight: "500",
  color: "var(--Gray81)",
});

export const pastNotificationList = style({
  fontSize: "1.4rem",
  fontWeight: "500",
  color: "var(--Gray81)",
});

export const days = style({
  fontSize: "1.2rem",
  fontWeight: "400",
  color: "var(--Gray81)",
  textAlign: "center",
});

export const scrollButton = style({
  position: "fixed",
  bottom: "6.9rem",
  right: "1.6rem",
  width: "6rem",
  height: "6rem",
  borderRadius: "50%",
  backgroundColor: "var(--MainOrange)",
  boxShadow: "2px 2px 4px 1px rgba(88, 88, 88, 0.20)",
  cursor: "pointer",
});
