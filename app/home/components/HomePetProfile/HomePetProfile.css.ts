import { style } from "@vanilla-extract/css";

export const container = style({
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  marginBottom: "2.1rem",
});

export const petProfileImage = style({ width: "18rem", height: "18rem", marginBottom: "2rem", borderRadius: "50%", border: "5px solid var(--MainOrange)", objectFit: "cover" });

export const petName = style({
  marginBottom: "1rem",
  fontSize: "2rem",
  fontWeight: "700",
  color: "var(--Black)",
});

export const petInfo = style({ marginBottom: "2rem", fontSize: "1.6rem", fontWeight: "500", color: "var(--Black)" });

export const subtitle = style({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.4rem",
  padding: "0.4rem 3.2rem",
  borderRadius: "14.5px",
  backgroundColor: "var(--MainOrange)",
  fontSize: "1.4rem",
  fontWeight: "600",
  color: "var(--White)",
});
