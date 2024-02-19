import { keyframes, style } from "@vanilla-extract/css";
import { Z_INDEX } from "@/styles/zindex.css";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const slideUp = keyframes({
  from: { transform: "translateX(-50%) translateY(-60%)" },
  to: { transform: "translateX(-50%) translateY(-50%)" },
});

export const wrapper = style({
  animation: `${fadeIn} 0.2s ease-out forwards`,
  width: "100%",
  height: "100%",

  position: "fixed",
  top: "0",
  left: "0",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: Z_INDEX.Modal,
});

export const container = style({
  animation: `${slideUp} 0.2s ease-out forwards`,
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
});
