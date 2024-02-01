import { style } from "@vanilla-extract/css";
import dropdownIconSrc from "@/assets/drop-down-icon.svg?url";

export const inputContainer = style({
  width: "100%",
  height: "4rem",

  padding: "1rem",

  display: "flex",
  alignItems: "center",

  border: "1px solid #d9d9d9",
  borderRadius: "10px",

  backgroundImage: `url(${dropdownIconSrc})`,
  backgroundSize: "1rem 1rem",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 1.5rem center",
});

export const dropdownList = style({
  width: "100%",

  padding: "0 1rem",

  display: "flex",
  flexDirection: "column",

  backgroundColor: "white",
  border: "1px solid #d9d9d9",
  borderRadius: "10px",

  listStyle: "none",
});

export const dropdownItem = style({
  height: "4rem",

  display: "flex",
  alignItems: "center",

  fontSize: "1.4rem",
  fontWeight: "normal",
});
