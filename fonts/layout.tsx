import localFont from "next/font/local";

const pretendard = localFont({
  src: "PretendardVariable.woff2",
  display: "swap",
});

const FontLayout = ({ children }: { children: React.ReactNode }) => {
  return <body className={pretendard.className}>{children}</body>;
};

export default FontLayout;
