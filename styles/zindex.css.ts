import { createGlobalTheme } from "@vanilla-extract/css";
/**
 * Z_INDEX 작성
 * 컴포넌트이름_스타일컴포넌트이름
 */
export const Z_INDEX = createGlobalTheme(":root", {
  AppLayout: "2",
  Modal: "10",
  SelectMateDropdown_dropdownList: "5",
  SubtypeDetail_optionsList: "1",
  Header: "10",
  LoadingPage: "15",
});
