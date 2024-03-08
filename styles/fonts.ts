import localFont from "next/font/local";

const fontPretendardVariable = localFont({
  src: "./PretendardVariable.woff2",
  display: "block",
  adjustFontFallback: false,
  fallback: ["Segoe UI Symbol", "sans-serif"],
  preload: true,
  variable: "--font-pretendard",
});

export { fontPretendardVariable };
