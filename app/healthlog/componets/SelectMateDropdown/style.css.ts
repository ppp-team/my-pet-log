import { style } from "@vanilla-extract/css";
import dropdownIconSrc from "@/public/icons/drop-down-icon.svg?url";
import { Z_INDEX } from "@/styles/zindex.css";

export const container = style({
  position: "relative",
});

export const inputBox = style({
  width: "100%",
  height: "4.5rem",

  padding: "1rem",

  display: "flex",
  alignItems: "center",

  border: "1.5px solid var(--GrayE2)",
  borderRadius: "10px",

  backgroundImage: `url(${dropdownIconSrc})`,
  backgroundSize: "1rem 1rem",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 1.5rem center",

  fontSize: "1.6rem",
  fontWeight: "500",

  ":focus": {
    border: "1.5px solid var(--MainOrange)",
  },
});

export const dropdownList = style({
  width: "100%",

  position: "absolute",
  padding: "0 1rem",

  display: "flex",
  flexDirection: "column",

  backgroundColor: "white",
  border: "1px solid #d9d9d9",
  borderRadius: "10px",

  listStyle: "none",
  zIndex: Z_INDEX.SelectMateDropdown_dropdownList,
});

export const dropdownItem = style({
  height: "4rem",

  display: "flex",
  alignItems: "center",

  fontSize: "1.4rem",
  fontWeight: "500",

  ":hover": {
    backgroundColor: "var(--LightOrange)",
    color: "var(--MainOrange)",
  },
});
